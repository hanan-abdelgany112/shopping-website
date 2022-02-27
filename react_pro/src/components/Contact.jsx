import React from "react";
import '../style/Contact.css';
function Contact() {
  return (

<div className="contact">
    <div className="overlay">
    <pre>                 </pre>      
       <pre>                 </pre>       
       <pre>                 </pre>
       <pre>                 </pre>
       <pre>                 </pre>
            <h2>contact us</h2>
            <form action=""> 
                <div className="left">
            
      
                <input type="text" placeholder="Your Name" name="username"/>
                <input type="text" placeholder="Your phone" name="phone"/>
                <input type="text" placeholder="Your email" name="email"/>
                <input type="text" placeholder="subject" name="subject"/>
            </div>
            <div className="right">
                <textarea name="massage" placeholder="your message"></textarea>
                <input type="submit" value="send"/>
            </div>
            </form>
      
    </div>
</div>



  

  );
}

export default Contact;