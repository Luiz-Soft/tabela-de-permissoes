import React, { useState } from 'react';
import CheckBox from "./CheckBox";
import "../styles/components/line.css";
import { isPropertySignature } from 'typescript';

interface LineProps{
    cols:boolean[];
    name:String;
    toggleCollum?:(collumNumber: number, state: boolean)=>(void);
}



export const  Line: React.FC<LineProps> = ({cols,name}:LineProps) => {
    const [markeds,setMarkeds]= useState(false);
   
return (

    <>
       <div className="line-label">
        {name}</div>
        {


        cols.map((value)=>{
        
        return(
                     
           
           
            <CheckBox className="line" marked={value}/>
            
        )
    })}</>


)}

export default Line;
