import React, { useState } from 'react'
import { NavigateFunction, useNavigate } from 'react-router-dom'
import { SubmitHandler, useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'

//signup ek functional component
//react.fc props typing
//react element return type of react element
const Signup: React.FC = () => {
  const [showForm, setShowForm] = useState(false)

  return (
    <div className="signup-container">
      <h1 className="title">Sign up for free</h1>

      <div className="button-section">
        <button className="signup-btn">Sign Up</button>
        </div>
      <div>
          <button className="login-btn">Login</button>
          </div>
          <div>
          {showForm && (
            <div className="login-form">
              <input type="text" placeholder="Name" />
              <input type="email" placeholder="Email ID" />
              <input type="password" placeholder="Password" />
              <button className="submit-btn">Sign In</button>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default Signup
