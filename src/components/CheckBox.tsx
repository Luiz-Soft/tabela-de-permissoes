import React, { useState } from "react";
import "../styles/components/checkbox.css"

interface checkBoxProps extends React.InputHTMLAttributes<HTMLInputElement>{
  
  marked:boolean;
  click?:(marked:boolean)=>void;
}

const Checkbox = React.forwardRef<HTMLInputElement, checkBoxProps>(({click,marked,...props}) => {
   const [isMarked,setMarked]=useState(marked);
  
  function clickMe (){

    setMarked(!isMarked);
    if(click){
      click(isMarked);
    }
}


  return (    
    <input  className="checkbox"
      type="checkbox" 



      checked={isMarked}   
       
      onChange={() => clickMe ()}
    ></input>
  );
})

export default Checkbox