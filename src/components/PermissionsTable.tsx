import Analise from '../components/tableSections/Analise'
import CheckBox from '../components/CheckBox'
import { useEffect, useState } from 'react'


interface PermissionsTable{
    
}

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
     <CheckBox marked={MarkGeneralColumn1} clickMe={()=>setMarkGeneralColumn1(!MarkGeneralColumn1)} name="markGeneralColumn1" />
     <CheckBox marked={MarkGeneralColumn2} clickMe={()=>setMarkGeneralColumn2(!MarkGeneralColumn2)} name="markGeneralColumn2" />
     <CheckBox marked={MarkGeneralColumn3} clickMe={()=>setMarkGeneralColumn3(!MarkGeneralColumn3)} name="markGeneralColumn3" />
     <CheckBox marked={MarkGeneralColumn4} clickMe={()=>setMarkGeneralColumn4(!MarkGeneralColumn4)} name="markGeneralColumn4" />
     <CheckBox marked={MarkGeneralColumn5} clickMe={()=>setMarkGeneralColumn5(!MarkGeneralColumn5)} name="markGeneralColumn5" />


     <Analise 
     markedGeneralColumn1={MarkGeneralColumn1} setMarkedGeneralColumn1={setGeneralColumn1} 
     markedGeneralColumn2={MarkGeneralColumn2} setMarkedGeneralColumn2={setGeneralColumn2}
     markedGeneralColumn3={MarkGeneralColumn3} setMarkedGeneralColumn3={setGeneralColumn3}
     markedGeneralColumn4={MarkGeneralColumn4} setMarkedGeneralColumn4={setGeneralColumn4} 
     markedGeneralColumn5={MarkGeneralColumn5} setMarkedGeneralColumn5={setGeneralColumn5} />     
     </div>   
   )
}