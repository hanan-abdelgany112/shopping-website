import React, { components } from 'react';




import '../style/LogIn.css';



function LogIn() {
 
        return(

<div className="signupFrm">
    <form action="" class="form">
      <h1 className="title">Sign In</h1>

      <div className="inputContainer">   
        <input type="text" class="input" placeholder="a"/>
        <label for="" class="label">Username</label>
      </div>

      <div className="inputContainer">
        <input type="text" class="input" placeholder="a"/>
        <label for="" class="label">Password</label>
      </div>
          <div className="sub">
      <input type="submit" class="submitBtn" value="LogIn"/>
      </div>
    </form>
  </div>

           

        )
    }

export default LogIn;