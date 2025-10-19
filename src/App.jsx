import React from "react"
import { Route,Routes } from "react-router-dom"
 import Links from "./Links"
 import Home from "./Home"
 import Signup from "./SIgnup"
import Contact from "./Contact"
 import About from "./About"
 import ServicePage from "./Service"
function App(){
  return(
<>
<Links/>
<div> 
<Routes>
<Route path="/" element={<Home />} />
<Route path="/signup" element={<Signup />} />
<Route path="/contact" element={<Contact />} />
<Route path="/about" element={<About />} />
<Route path="/service" element={<ServicePage />} />
</Routes></div>
</>

  )
}export default App