import React from "react";


interface checkBoxProps extends React.InputHTMLAttributes<HTMLInputElement>{
  name: string;
  marked:boolean;
  clickMe?:()=>void;
}

const Checkbox = React.forwardRef<HTMLInputElement, checkBoxProps>((props) => {
  
  
  function clickMe (){
    if(props.clickMe){
    props.clickMe()}
    
}


  return (    
    <input 
      type="checkbox" 
  
      checked={props.marked}   
      name={props.name} 
      onChange={() => clickMe ()}
    ></input>
  );
})

export default Checkbox