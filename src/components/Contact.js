import React,{useEffect,useRef} from 'react';
import telefon from '../img/telefon.png'

function Contact(props) {


    
  return <div className="contact">
      
      <br/>
<h1 className="h1contact">You can contact with me by....</h1>
          
          <img className="telefon" src={telefon} alt="fon"/> <div className="fon"> +485024945454 </div>  
          
         
          
          <br/>
          
          <h1 className="h1contact">...or send me e-mail</h1>

            
          <form  action="https://formsubmit.co/kalwara_marcin@o2.pl" method="POST" >
              <label htmlFor="email" className="label">Enter your e-mail</label>
              <br/>
              <input name="email" type="email" id="email"></input><br/>
              <label htmlFor='txtare' className="label" >Send me message</label>
              <br/>
              <textarea name="email" id="txtarea" className="textarea"></textarea>
              <br/>
              <button name="email" type="submit" className="send">send</button>
          </form>
    
                </div>
  
}

export default Contact;
