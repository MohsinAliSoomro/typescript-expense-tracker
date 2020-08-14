import React, { useState, useContext } from 'react';
import { ITrans } from '../transType/tranType'
import { GlobalContext } from '../globalState/globalProvider'
const InExForm = () => {
    const [text, setText] = useState('');
    const [amount, setAmount] = useState(0);
    const { dispatch } = useContext(GlobalContext)
    const [msg, setMsg] = useState('')
    const [bothinput, setBothinput] = useState('')
    function addTransaction(transaction: ITrans) {
        dispatch({
            type: 'ADD',
            payload: transaction
        });
    }

    const onSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        const newTransaction: ITrans = {
            id: Math.random() * 100,
            text,
            amount: amount
        }
        if (newTransaction.text.length <= 0) {
            setBothinput('Please fill the inputs')
        }
        else if (newTransaction.amount === 0) {
            setMsg("Amount must be greater then 0 or less then 0")
            setBothinput('');
        }
        else {
            addTransaction(newTransaction)
            setMsg('')
            setAmount(0)
            setText('')
        }
    }
    return (
        <>
            <div className="form-container">
                <div>{bothinput}</div>
                <div>{msg}</div>
                <form>
                    <label className="lbl">Name</label> <br />
                    <input type="text" required value={text} className="form-input" onChange={(e: React.ChangeEvent<HTMLInputElement>) => setText(e.target.value)} /><br />
                    <label className="lbl">Balance</label><br />
                    <input type="number" required value={amount} className="form-input" onChange={(e: React.ChangeEvent<HTMLInputElement>) => setAmount(parseFloat(e.target.value))} /><br />
                    <button onClick={onSubmit}>Save</button>
                </form>
            </div>
        </>
    )
}
export default InExForm;