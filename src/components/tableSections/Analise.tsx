import React,{useState} from "react";
import CheckBox from "../CheckBox";
import { useEffect } from "react";
import "../../styles/global.css";
import Line from "../Line";


interface AnaliseProps extends React.InputHTMLAttributes<HTMLInputElement>{ }  
   

    const Analise = React.forwardRef<HTMLInputElement, AnaliseProps>((props) => {
       


       const [checkBox,setCheckBoxes]=useState([Array(3).fill(Array(5).fill(true))])
    
       
       
       
function logCheckbox(){
  console.log(checkBox);
}
    return(
        
   <div>
  <button onClick={logCheckbox}/> 
    <div className="line">
    <Line name="Análise"    cols={[checkBox[0][0],checkBox[0][1],checkBox[0][2],checkBox[0][3],checkBox[0][4],checkBox[0][5]]}/>
    </div>
       
    <div className="line">

    </div>
   
    <div className="line">
  
    </div>
     
     </div>   
   )

    })

export default Analise;