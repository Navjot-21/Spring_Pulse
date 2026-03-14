import {Link} from "react-router-dom"

function Landing(){

 return(

  <div style={{textAlign:"center",padding:"120px"}}>

   <h1>SpringPulse AI</h1>

   <p>AI powered monitoring system for natural springs</p>

   <Link to="/login">
    <button>Login</button>
   </Link>

   <Link to="/register">
    <button style={{marginLeft:20}}>Register</button>
   </Link>

  </div>

 )

}

export default Landing