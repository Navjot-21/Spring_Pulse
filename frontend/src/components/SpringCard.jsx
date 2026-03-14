import { useNavigate } from "react-router-dom"
import API from "../api/api"

function SpringCard({spring}){

 const navigate = useNavigate()

 const deleteSpring = async()=>{

  if(window.confirm("Delete spring?")){

   await API.delete(`/springs/${spring._id}`)

   window.location.reload()

  }

 }

 return(

  <div style={{border:"1px solid white",padding:"10px",margin:"10px"}}>

   <h3>{spring.name}</h3>
   <p>{spring.village}</p>
   <p>{spring.district}</p>

   {spring.photo && <img src={spring.photo} width="150"/>}

   <br/>

   <button onClick={()=>navigate(`/spring/${spring._id}`)}>
    View
   </button>

   <button onClick={()=>navigate(`/edit-spring/${spring._id}`)}>
    Update
   </button>

   <button onClick={deleteSpring}>
    Delete
   </button>

  </div>

 )

}

export default SpringCard