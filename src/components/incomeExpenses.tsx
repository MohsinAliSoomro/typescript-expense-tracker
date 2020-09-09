import React, { useContext } from 'react';
import { ITrans } from '../transType/tranType'
import { GlobalContext } from '../globalState/globalProvider'

const IncomeExpenses = () => {
    const { state } = useContext(GlobalContext)
    const amount = state.transactions.map((trans: ITrans) => trans.amount);
    const income = amount.filter((item: number) => item > 0).reduce((acc: number, item: number) => (acc += item), 0).toFixed(2);
    const expenses: number = parseInt(
        (amount.filter((item: number) => item < 0).reduce((acc: number, item: number) => (acc += item), 0) * -1).toFixed(2));
    return (
        <div className="income-expense">
            <div>
                <h4  style={{ color: '#fff' }} >Income <br /> ${income} </h4>
            </div>
            <div >
                <h4 style={{ color: '#fff' }} >Expenses <br /> ${expenses} </h4>
            </div>
        </div>
    )
}
export default IncomeExpenses;