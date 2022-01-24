import React,{useEffect, useRef,useState} from 'react';
import {Routes,Route} from 'react-router-dom'
import Aboutme from './Aboutme';
import Contact from './Contact';
import Credential from './Credential';
function Zawartosc(props) {
 
  console.log(props.gave)
    

  return <div className="zawartosc">
<Routes>
    <Route path="/" element={<Aboutme/>}/>
    <Route path="/contact" element={<Contact give={props.gave} />}/>
    <Route path="/credential" element={<Credential give={props.gave}/>}/>
</Routes>

  </div>;
}

export default Zawartosc;
