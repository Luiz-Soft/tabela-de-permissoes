import React,{useState} from "react";
import { useEffect } from "react";
import "../../styles/global.css";
import Line from "../Line";


interface AnaliseProps{}   
   

    const Analise = React.forwardRef<HTMLInputElement, AnaliseProps>((props) => {
       


 

       const [checkBox,setCheckBox]=useState(Array(3).fill(Array(5).fill(false))) //3 lines with 5 checkboxes each
    
       
       useEffect(() =>
       {
        toggleCollum();
      }, [JSON.stringify(checkBox)]);
       
function toggleCollum(){
 console.log("checkbox called");
  if(checkBox[0][0]==true){
    for(var line=0;line<=checkBox.length;line++){
     var arrayTemporario1 = checkBox[0]
     var arrayTemporario2= checkBox[1];
     var arrayTemporario3= checkBox[2];
     var arrayFINAL= [checkBox[0],checkBox[1],checkBox[2]];
     
     arrayTemporario1[line]=true;
      setCheckBox(arrayFINAL);
    }
  }
}


    return(
        
   <div>
    <div className="line">
    <Line name="Análise"    cols={[checkBox[0][0],checkBox[0][1],checkBox[0][2],checkBox[0][3],checkBox[0][4]]}/>
    </div>
       
    <div className="line">
    <Line name="Análise de contas"    cols={[checkBox[1][0],checkBox[1][1],checkBox[1][2],checkBox[1][3],checkBox[1][4]]}/>

    </div>
   
    <div className="line">
    <Line name="Análise de transações"    cols={[checkBox[2][0],checkBox[2][1],checkBox[2][2],checkBox[2][3],checkBox[2][4]]}/>

    </div>
     
     </div>   
   )

    })

export default Analise;