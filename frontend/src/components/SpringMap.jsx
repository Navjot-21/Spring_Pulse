import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet"
import { useEffect, useState } from "react"
import L from "leaflet"
import "leaflet/dist/leaflet.css"

function FitBounds({ springs, userLocation }) {

 const map = useMap()

 useEffect(() => {

  const points = []

  if(userLocation){
   points.push(userLocation)
  }

  springs.forEach(s=>{
   if(s.latitude && s.longitude){
    points.push([Number(s.latitude),Number(s.longitude)])
   }
  })

  if(points.length > 0){

   const bounds = L.latLngBounds(points)
   map.fitBounds(bounds,{padding:[50,50]})

  }

 },[springs,userLocation])

 return null
}

function SpringMap({ springs }) {

 const [userLocation,setUserLocation] = useState(null)

 // get current location
 useEffect(()=>{

  navigator.geolocation.getCurrentPosition(

   (pos)=>{

    setUserLocation([
     pos.coords.latitude,
     pos.coords.longitude
    ])

   },

   (err)=>{
    console.log(err)
   }

  )

 },[])

 return (

  <MapContainer
   center={[31.686,76.521]}
   zoom={8}
   style={{height:"450px",width:"100%"}}
  >

   <TileLayer
    attribution='&copy; OpenStreetMap contributors'
    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
   />

   <FitBounds springs={springs} userLocation={userLocation} />

   {/* USER LOCATION MARKER */}
   {userLocation && (

    <Marker position={userLocation}>

     <Popup>
      📍 Your Location
     </Popup>

    </Marker>

   )}

   {/* SPRING MARKERS */}
   {springs.map((spring)=>(

    <Marker
     key={spring._id}
     position={[
      Number(spring.latitude),
      Number(spring.longitude)
     ]}
    >

     <Popup>

      <h3>{spring.name}</h3>

      <p>{spring.village}</p>

      <button
       onClick={()=>window.location.href=`/spring/${spring._id}`}
       style={{
        background:"#2563eb",
        color:"white",
        border:"none",
        padding:"6px 12px",
        borderRadius:"6px",
        cursor:"pointer"
       }}
      >
       View Details
      </button>

     </Popup>

    </Marker>

   ))}

  </MapContainer>

 )

}

export default SpringMap