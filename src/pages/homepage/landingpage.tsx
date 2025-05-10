import './landingpage.css'
import React, { useRef } from 'react'
const authRef = useRef<HTMLDivElement | null>(null)

import AuthSection from '../../components/Auth/auth'

const LandingPage: React.FC = () => {
  const scrollToSection = () => {
    const section = document.getElementById('prompt-section')
    section?.scrollIntoView({ behavior: 'smooth' })
  }
  const handleScrollToAuth = () => {
    authRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div className="landing-container">
      <div className="text-content">
        <h1>Let's begin writing ...</h1>
        <p>
          Add content add content content content Add content add content
          content content Add content add content content content
        </p>
        <div className="button-group">
          <button className="btn-primary">Sign Up for free</button>
          <button className="btn-secondary" onClick={scrollToSection}>
            Explore the plans
          </button>
        </div>
      </div>

      <div className="decorative-text">
        <p>Let's begin writing Let's begin writing</p>
        <p>Let's begin writing Let's begin writing...!!</p>
      </div>
      <div ref={authRef}>
        <AuthSection />
      </div>

      <div id="prompt-section" className="prompt-section">
        <div className="prompt-boxes">
          <div className="box upload-box">
            <span>Upload</span>
          </div>
          <div className="box output-box">
            <span>Final Output</span>
            <p className="subtext">Get the final images</p>
          </div>
        </div>

        <div className="prompt-buttons">
          <button className="convert-btn" disabled>
            🔒 Convert
          </button>
          <button className="download-btn">Download</button>
        </div>
      </div>
    </div>
  )
}

export default LandingPage
