import React, { useState, useContext } from 'react';
import {ITrans} from '../transType/tranType'
import {GlobalContext} from '../globalState/globalProvider'
const InExForm = () => {
const [text,setText]=useState('');
const [amount,setAmount]=useState(0);
const {dispatch} = useContext(GlobalContext)

function addTransaction(transaction:ITrans){
    dispatch({
        type:'ADD',
        payload:transaction
    });
}
const onSubmit=(e:React.MouseEvent<HTMLButtonElement>)=>{
    e.preventDefault();
    const newTransaction:ITrans={
        id: Math.random() * 100,
        text,
        amount:amount
    }
    addTransaction(newTransaction)
}
    return (
        <>
        <div className="form-container">
            <form>
                <label className="lbl">Name</label> <br />
                <input type="text" value={text} className="form-input" onChange={(e:React.ChangeEvent<HTMLInputElement>)=>setText(e.target.value)} /><br />
                <label className="lbl">Balance</label><br />
                <input type="number" value={amount} className="form-input" onChange={(e:React.ChangeEvent<HTMLInputElement>)=>setAmount(parseFloat(e.target.value))} /><br />
                <button onClick={onSubmit}>Save</button>
            </form>
        </div>
        </>
    )
}
export default InExForm;