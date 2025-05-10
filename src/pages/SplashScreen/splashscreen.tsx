import { useEffect, useState } from 'react'
import './splashscreen.css'
import img1 from '../../assets/splash1.png'
import img2 from '../../assets/splash2.png'
import img3 from '../../assets/splash3.png'
import img4 from '../../assets/splash4.png'
import img5 from '../../assets/splash5.png'
const images = [img1, img2, img3, img4, img5]

function SplashScreen() {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length)
    }, 800) //800ms

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="splash-screen">
      <img src={images[index]} alt="splash" className="splash-image" />
    </div>
  )
}

export default SplashScreen
