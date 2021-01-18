import Analise from './tableSections/Analise'
import CheckBox from './CheckBox'
import {  useState } from 'react'
import "../styles/components/permissions-table.css";




export default function PermissionsTable(){
  const [MarkGeneralColumn1,setMarkGeneralColumn1]= useState(false);
  const [MarkGeneralColumn2,setMarkGeneralColumn2]= useState(false);
  const [MarkGeneralColumn3,setMarkGeneralColumn3]= useState(false);
  const [MarkGeneralColumn4,setMarkGeneralColumn4]= useState(false);
  const [MarkGeneralColumn5,setMarkGeneralColumn5]= useState(false);

  const setGeneralColumn1 = (mark:boolean) => {
    setMarkGeneralColumn1(mark);
  }
 
  const setGeneralColumn2 = (mark:boolean) => {
    setMarkGeneralColumn2(mark);
  }

  const setGeneralColumn3 = (mark:boolean) => {
    setMarkGeneralColumn3(mark);
  }
  
  const setGeneralColumn4 = (mark:boolean) => {
    setMarkGeneralColumn4(mark);
  }

  const setGeneralColumn5 = (mark:boolean) => {
    setMarkGeneralColumn5(mark);
  }

    return(
     <div>
     <div className="header-general">
       <div className="line-label-general">Todos</div>
     
     </div>

     <Analise/>     
     </div>  
      
   )
}