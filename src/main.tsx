import React from 'react' //react component
// import { StrictMode } from 'react'   //style choice
import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import App from './App'

createRoot(document.getElementById('root')!).render(
  //This finds the HTML element with the id root (usually defined in index.html) and attaches the React app to it.
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
)
//strict mode is used to resolve problem
