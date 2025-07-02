import React from 'react'
import './App.css'
import hairBlesserOfficial from "./assets/hairBlesserOfficial.png";





export const App = () => {
 

  return (
  <div className="home container-fluid"
      style={{
        backgroundImage: `url(${hairBlesserOfficial})`,
        backgroundSize: "cover",
        backgroundPosition: "center", 
        backgroundRepeat: "no-repeat",
        height: "100vh",
        width: "100vw",
      }}>

  </div>
  )
}

export default App
