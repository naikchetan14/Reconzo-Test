import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'
import { transitions, positions, Provider as AlertProvider } from 'react-alert'
import AlertTemplate from 'react-alert-template-basic'
import './index.css'

// optional configuration
const options = {
  // you can also just use 'bottom center'
  position: positions.BOTTOM_CENTER,
  timeout: 5000,
  offset: '30px',
  // you can also just use 'scale'
  transition: transitions.SCALE
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
     <AlertProvider template={AlertTemplate} {...options}>
    <App/>
    </AlertProvider>
  </StrictMode>,
)
