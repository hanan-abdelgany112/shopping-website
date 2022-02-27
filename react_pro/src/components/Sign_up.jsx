import React, { components } from 'react';


import '../style/Sign_up.css';



function Sign_up() {
 
        return(

<div className="signupFrm">
    <form action="" class="form">
      <h1 className="title">Sign up</h1>

      <div className="inputContainer">
        <input type="text" class="input" placeholder="a"/>
        <label for="" class="label">Email</label>
      </div>

      <div className="inputContainer">
        <input type="text" class="input" placeholder="a"/>
        <label for="" class="label">Username</label>
      </div>

      <div className="inputContainer">
        <input type="text" class="input" placeholder="a"/>
        <label for="" class="label">Password</label>
      </div>

      <div className="inputContainer">
        <input type="text" class="input" placeholder="a"/>
        <label for="" class="label">Confirm Password</label>
      </div>
          <div className="sub">
      <input type="submit" class="submitBtn" value="Sign up"/>
      </div>
    </form>
  </div>

           

        )
    }

export default Sign_up;