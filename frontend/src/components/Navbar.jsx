import { Link } from "react-router-dom"

function Navbar(){

 return(

  <div>

   <Link to="/dashboard">Dashboard</Link>

   <Link to="/add-spring">Add Spring</Link>

  </div>

 )

}

export default Navbar