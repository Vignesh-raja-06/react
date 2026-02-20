import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Mobile from'./mobile.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <Mobile />
  </StrictMode>
)
