import React,{useState} from "react";
import CheckBox from "../CheckBox";
import { useEffect } from "react";
import "../../styles/global.css";
import Line from "../Line";


interface AnaliseProps extends React.InputHTMLAttributes<HTMLInputElement>{ }  
   


   
   



    const Analise = React.forwardRef<HTMLInputElement, AnaliseProps>((props) => {
       


       const [checkBox,setCheckBoxes]=useState([Array(3).fill(Array(5).fill(true))])
    
       
       
       

    return(
        
   <div>
   
    <div className="line">
    <Line name="Análise"    cols={[checkBox[0][0],checkBox[0][1],checkBox[0][2],checkBox[0][3],checkBox[0][4],checkBox[0][5]]}/>
    </div>
       
    <div className="line">
   <Line  name="Análise de Contas" cols={[checkBox[1][0],checkBox[1][1],checkBox[1][2],checkBox[1][3],checkBox[1][4],checkBox[1][5]]}/>

    </div>
   
    <div className="line">
    <Line name="Análise de Transações" cols={[checkBox[2][0],checkBox[2][1],checkBox[2][2],checkBox[2][3],checkBox[2][4],checkBox[2][5]]}/>
  
    </div>
     
     </div>   
   )

    })

export default Analise;