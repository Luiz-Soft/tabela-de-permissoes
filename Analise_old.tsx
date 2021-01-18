import React,{useState} from "react";
import CheckBox from "../CheckBox";
import { useEffect } from "react";
import "../../styles/global.css";



interface AnaliseProps extends React.InputHTMLAttributes<HTMLInputElement>{   
    clickMe?:()=>void;
    
    markedGeneralColumn1:boolean;
    setMarkedGeneralColumn1:(state: boolean)=>void;

    markedGeneralColumn2:boolean;
    setMarkedGeneralColumn2:(state: boolean)=>void;
            
    markedGeneralColumn3:boolean;
    setMarkedGeneralColumn3:(state: boolean)=>void;

    markedGeneralColumn4:boolean;
    setMarkedGeneralColumn4:(state: boolean)=>void;

    markedGeneralColumn5:boolean;
    setMarkedGeneralColumn5:(state: boolean)=>void;

}

    const Analise = React.forwardRef<HTMLInputElement, AnaliseProps>((props) => {

        useEffect(() => {
           
           
           
           
                 if(props.markedGeneralColumn1==true){
                   checkAllColumn1()}
                 if(props.markedGeneralColumn2==true){
                    checkAllColumn2()
                }if(props.markedGeneralColumn3==true){
                    checkAllColumn3()
                }if(props.markedGeneralColumn4==true){
                    checkAllColumn4()
                }if(props.markedGeneralColumn5==true){
                    checkAllColumn5()
                }
                 }, [props.markedGeneralColumn1, props.markedGeneralColumn2,props.markedGeneralColumn3,props.markedGeneralColumn4,props.markedGeneralColumn5]);


    function clickMe (){
         { if(props.clickMe)
        props.clickMe()}
    }
    

    const [markAllAnalise1, setMarkAllAnalise1] = useState(false);  //listagem column
    const [markAllAnalise2, setMarkAllAnalise2] = useState(false);  //detalhes column
    const [markAllAnalise3, setMarkAllAnalise3] = useState(false);  //criar column
    const [markAllAnalise4, setMarkAllAnalise4] = useState(false);  //editar column
    const [markAllAnalise5, setMarkAllAnalise5] = useState(false);  //deletar column
    
    const [markAnaliseDeContas1, setMarkAnaliseDeContas1] = useState(false);
    const [markAnaliseDeContas2, setMarkAnaliseDeContas2] = useState(false);
    const [markAnaliseDeContas3, setMarkAnaliseDeContas3] = useState(false);
    const [markAnaliseDeContas4, setMarkAnaliseDeContas4] = useState(false);
    const [markAnaliseDeContas5, setMarkAnaliseDeContas5] = useState(false);

    const [markAnaliseDeTransacoes1, setMarkAnaliseDeTransacoes1] = useState(false);
    const [markAnaliseDeTransacoes2, setMarkAnaliseDeTransacoes2] = useState(false);
    const [markAnaliseDeTransacoes3, setMarkAnaliseDeTransacoes3] = useState(false);
    const [markAnaliseDeTransacoes4, setMarkAnaliseDeTransacoes4] = useState(false);
    const [markAnaliseDeTransacoes5, setMarkAnaliseDeTransacoes5] = useState(false);
    
    
   


    function checkAllColumn1(){
        setMarkAllAnalise1(true);
        setMarkAnaliseDeContas1(true);
        setMarkAnaliseDeTransacoes1(true);
    }

    function uncheckAllColumn1(){
        props.setMarkedGeneralColumn1(false);
        setMarkAllAnalise1(false);
        setMarkAnaliseDeContas1(false);
        setMarkAnaliseDeTransacoes1(false);
    }
  
    function checkAllColumn2(){
        setMarkAllAnalise2(true);
        setMarkAnaliseDeContas2(true);
        setMarkAnaliseDeTransacoes2(true);
    }

    function uncheckAllColumn2(){
        props.setMarkedGeneralColumn2(false);
        setMarkAllAnalise2(false);
        setMarkAnaliseDeContas2(false);
        setMarkAnaliseDeTransacoes2(false);
    }
   
    function checkAllColumn3(){
        setMarkAllAnalise3(true);
        setMarkAnaliseDeContas3(true);
        setMarkAnaliseDeTransacoes3(true);
    }

    function uncheckAllColumn3(){
        props.setMarkedGeneralColumn3(false);
        setMarkAllAnalise3(false);
        setMarkAnaliseDeContas3(false);
        setMarkAnaliseDeTransacoes3(false);
    }
    function checkAllColumn4(){
        setMarkAllAnalise4(true);
        setMarkAnaliseDeContas4(true);
        setMarkAnaliseDeTransacoes4(true);
    }

    function uncheckAllColumn4(){
        props.setMarkedGeneralColumn4(false);
        setMarkAllAnalise4(false);
        setMarkAnaliseDeContas4(false);
        setMarkAnaliseDeTransacoes4(false);
    }

    function checkAllColumn5(){
        setMarkAllAnalise5(true);
        setMarkAnaliseDeContas5(true);
        setMarkAnaliseDeTransacoes5(true);
    }

    function uncheckAllColumn5(){
        props.setMarkedGeneralColumn5(false)
        setMarkAllAnalise5(false);
        setMarkAnaliseDeContas5(false);
        setMarkAnaliseDeTransacoes5(false);
    }
    

    return(
        
   <div onClick={()=>clickMe} >
   
    <header className="header-line">
    <p className="line-label" > Análise</p>
    <CheckBox marked={markAllAnalise1} clickMe={markAllAnalise1?uncheckAllColumn1:checkAllColumn1} name="listagem_todos"/>
    <CheckBox marked={markAllAnalise2} clickMe={markAllAnalise2?uncheckAllColumn2:checkAllColumn2} name="detalhes_todos"/>
    <CheckBox marked={markAllAnalise3} clickMe={markAllAnalise3?uncheckAllColumn3:checkAllColumn3} name="criar_todos"/>
    <CheckBox marked={markAllAnalise4} clickMe={markAllAnalise4?uncheckAllColumn4:checkAllColumn4} name="editar_todos"/>
    <CheckBox marked={markAllAnalise5} clickMe={markAllAnalise5?uncheckAllColumn5:checkAllColumn5} name="deletar_todos"/>
    </header>
    
    
    <div className="line">
    <p className="line-label" > Análisse de contas</p>
    <CheckBox  marked={markAnaliseDeContas1} clickMe={()=>{setMarkAnaliseDeContas1(!markAnaliseDeContas1);setMarkAllAnalise1(false);props.setMarkedGeneralColumn1(false);}} name="analise_de_contas1"/>
    <CheckBox  marked={markAnaliseDeContas2} clickMe={()=>{setMarkAnaliseDeContas2(!markAnaliseDeContas2);setMarkAllAnalise2(false);props.setMarkedGeneralColumn2(false);}} name="analise_de_contas2"/>
    <CheckBox  marked={markAnaliseDeContas3} clickMe={()=>{setMarkAnaliseDeContas3(!markAnaliseDeContas3);setMarkAllAnalise3(false);props.setMarkedGeneralColumn3(false);}} name="analise_de_contas3"/>
    <CheckBox  marked={markAnaliseDeContas4} clickMe={()=>{setMarkAnaliseDeContas4(!markAnaliseDeContas4);setMarkAllAnalise4(false);props.setMarkedGeneralColumn4(false);}} name="analise_de_contas4"/>
    <CheckBox  marked={markAnaliseDeContas5} clickMe={()=>{setMarkAnaliseDeContas5(!markAnaliseDeContas5);setMarkAllAnalise5(false);props.setMarkedGeneralColumn5(false);}} name="analise_de_contas5"/>
    </div>
   
    <div className="line">
    <p className="line-label" > Análisse de transações</p>
    <CheckBox  marked={markAnaliseDeTransacoes1} clickMe={()=>{setMarkAnaliseDeTransacoes1(!markAnaliseDeTransacoes1);setMarkAllAnalise1(false);props.setMarkedGeneralColumn1(false);}} name="analise_de_transacoes1"/>
    <CheckBox  marked={markAnaliseDeTransacoes2} clickMe={()=>{setMarkAnaliseDeTransacoes2(!markAnaliseDeTransacoes2);setMarkAllAnalise2(false);props.setMarkedGeneralColumn2(false);}} name="analise_de_transacoes2"/>
    <CheckBox  marked={markAnaliseDeTransacoes3} clickMe={()=>{setMarkAnaliseDeTransacoes3(!markAnaliseDeTransacoes3);setMarkAllAnalise3(false);props.setMarkedGeneralColumn3(false);}} name="analise_de_transacoes3"/>
    <CheckBox  marked={markAnaliseDeTransacoes4} clickMe={()=>{setMarkAnaliseDeTransacoes4(!markAnaliseDeTransacoes4);setMarkAllAnalise4(false);props.setMarkedGeneralColumn4(false);}} name="analise_de_transacoes4"/>
    <CheckBox  marked={markAnaliseDeTransacoes5} clickMe={()=>{setMarkAnaliseDeTransacoes5(!markAnaliseDeTransacoes5);setMarkAllAnalise5(false);props.setMarkedGeneralColumn5(false);}} name="analise_de_transacoes5"/>
    </div>
     
     </div>   
   )
}
)

export default Analise