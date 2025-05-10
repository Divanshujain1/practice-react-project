import React, { useState } from 'react'
import './auth.css'

const AuthPage: React.FC = () => {
  const [showLogin, setShowLogin] = useState(false)

  return (
    <div className="auth-container">
      <h1 className="auth-title">Sign up for free</h1>

      <div className="auth-buttons">
        <button className="auth-btn" onClick={() => setShowLogin(false)}>
          Sign Up
        </button>
        <button className="auth-btn" onClick={() => setShowLogin(true)}>
          Login
        </button>
      </div>

      {showLogin && (
        <div className="auth-form">
          <input type="text" placeholder="Name" />
          <input type="email" placeholder="Email ID" />
          <input type="password" placeholder="Password" />
          <button className="auth-submit">Sign In</button>
        </div>
      )}
    </div>
  )
}

export default AuthPage
