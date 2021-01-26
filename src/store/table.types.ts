import Checkbox from "../components/CheckBox";

export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';

{ sections :
[{"name":"Analise", "subSections":["Análise de contas", "Análise de transações"]},
 {"name":"Contas", "subSections": ["Cliente", "Transações"]}]}

 export interface checkBox{
   index: number,
   marked: boolean
 }

export interface ISubsection {
    title: string
    marked: checkBox[]
    markedAll: checkBox;
  }

 export interface ISection {
      title: string
      subSections: ISubsection[]
  }

 export type TableState = {
    sections: ISection[]
  }
  
 export type TableAction = {
    type: string
   //article: IArticle //what the hell is this?
    index: number
  }

  export type activateCheckBox = {
    type: typeof Checkbox
    index: number
  }
  
  export type TableDispatchType = (args: TableAction) => TableAction