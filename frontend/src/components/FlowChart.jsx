import {
 Chart as ChartJS,
 LineElement,
 CategoryScale,
 LinearScale,
 PointElement
} from "chart.js"

import {Line} from "react-chartjs-2"

ChartJS.register(
 LineElement,
 CategoryScale,
 LinearScale,
 PointElement
)

function FlowChart({history}){

 const data = {

  labels:history.map((_,i)=>`Week ${i+1}`),

  datasets:[
   {
    label:"Flow Rate",
    data:history,
    borderColor:"#06b6d4",
    tension:0.4
   }
  ]

 }

 return(

  <div className="card">

   <h3>Flow Trend</h3>

   <Line data={data}/>

  </div>

 )

}

export default FlowChart