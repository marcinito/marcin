import React,{useEffect,useRef,useState} from 'react';
import Navbar from './components/Navbar';
import Zawartosc from './components/Zawartosc';
import './css/style.css'

function App() {

  const canvasRef=useRef()
  const containerRef=useRef()

  return <div className="container" ref={containerRef}>
   
<nav>
  <Navbar/>

</nav>
<main>
<Zawartosc />
</main>

  </div>;
}

export default App;
