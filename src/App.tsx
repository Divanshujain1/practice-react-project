import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom' //router using browser history
import { useEffect, useState } from 'react' //manage state and perform side effect
import Navbar from './components/Navbar/navbar'
import LandingPage from './pages/homepage/landingpage'
import SplashScreen from './pages/SplashScreen/splashscreen'
// import ExplorePlans from './pages/Exploreplans/exploreplan'
// import Signup from './pages/signup'
import AuthSection from './components/Auth/auth'

function App() {
  // root function
  const [showSplash, setShowSplash] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      //calling splash
      setShowSplash(false)
    }, 3200) // splash for 3.2 seconds

    return () => clearTimeout(timer)
  }, [])

  if (showSplash) {
    return <SplashScreen /> // at time of splash none of other component work
  }

  return (
    <Router>
      <Navbar btnText="Login" btnRoute="/login" />
      <Routes>
        <Route path="/" element={<LandingPage />} /> // set login button locate
        to navigate path
        <Route path="/auth" element={<AuthSection />} />
        {/* <Route path="/explore-plans" element={<ExplorePlans />} /> */}
        {/* <Route path="/signup" element={<Signup />} /> */}
      </Routes>
    </Router>
  )
}

export default App
