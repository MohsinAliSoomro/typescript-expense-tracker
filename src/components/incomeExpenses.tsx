import React, { useContext } from 'react';
import { ITrans } from '../transType/tranType'
import { GlobalContext } from '../globalState/globalProvider'
import CountUp from 'react-countup';
const IncomeExpenses = () => {
    const { state } = useContext(GlobalContext)
    const amount = state.transactions.map((trans: ITrans) => trans.amount);
    const income = amount.filter((item: number) => item > 0).reduce((acc: number, item: number) => (acc += item), 0).toFixed(2);
    const expenses: number = parseInt(
        (amount.filter((item: number) => item < 0).reduce((acc: number, item: number) => (acc += item), 0) * -1).toFixed(2));
    return (
        <div className="incomeExpenses-container">
            <div className="income-expenses">
                <p className="plus">Income <br /> $<CountUp end={income} /> </p>
                <div className="divider"></div>
                <p className="minus">Expenses <br /> $<CountUp end={expenses} /> </p>
            </div>
        </div>
    )
}
export default IncomeExpenses;