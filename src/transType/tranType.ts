export interface IState {transactions:Array<ITrans>}
export interface ITrans {id:number,text:string,amount:number}
export interface IAction {type:string,payload:any}
export interface IAmount {amount:Array<number>}

export type transactionType={
    id:number,
    name:string,
    money:number
}