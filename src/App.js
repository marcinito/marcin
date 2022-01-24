import React,{useEffect,useRef,useState} from 'react';
import Navbar from './components/Navbar';
import Zawartosc from './components/Zawartosc';
import './css/style.css'

function App() {

  const canvasRef=useRef()
  const containerRef=useRef()
  useEffect(()=>{
  
    const canvas=canvasRef.current
    const ctx=canvas.getContext("2d")
   canvas.width=window.innerWidth
   canvas.height=window.innerHeight
   canvas.style.zIndex="-1"
   window.addEventListener("resize",()=>{
    canvas.width=window.innerWidth
    canvas.height=window.innerHeight
    console.log(window)
  
   })

})
  return <div className="container" ref={containerRef}>
    <canvas id="canvas" ref={canvasRef}></canvas>
<nav>
  <Navbar/>
  <Zawartosc />
</nav>

  </div>;
}

export default App;
