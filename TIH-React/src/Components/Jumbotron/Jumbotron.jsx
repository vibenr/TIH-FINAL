import React from 'react'
import './jumbotron.css'
import {Link} from "react-router-dom";
function Jumbotron() {
  return (
    <div className="jumbotron">
      <div className="container">
        <h1>WELCOME TO TECHNO-IT-HUB</h1>
       <div className="PARA">
       <p>We Provid You Everything You Require For Career Growth</p>
        <p>So What Are You Waiting For Join Us Now!</p>
       </div>
        <div className="button">
          <button><Link to="/login">LOGIN</Link></button>
        </div>
      </div>
    </div>
  )
}

export default Jumbotron;
