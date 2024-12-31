import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './components/App.jsx'

//takes an HTML element as input and defines the HTML element where a React component should be displayed
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
); //render is called to define the React component that is rendered