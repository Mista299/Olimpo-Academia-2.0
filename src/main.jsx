import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import NavBar from './components/Navbar'
import Carousel from './components/Carousel'
import Footer from './components/Footer'
import MapSlider from './components/MapSlider'


import { AppProvider } from './context/index.jsx'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AppProvider>
      <App />
      <NavBar />
      <Carousel/>
      <MapSlider/>
      <Footer/>
    </AppProvider>
  </StrictMode>,
);