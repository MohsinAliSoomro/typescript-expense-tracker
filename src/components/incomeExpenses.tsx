import React, { useContext } from 'react';
import { ITrans } from '../transType/tranType'
import { GlobalContext } from '../globalState/globalProvider'
import CountUp from 'react-countup';
import { Typography } from 'antd';
const {Title} =Typography;
const IncomeExpenses = () => {
    const { state } = useContext(GlobalContext)
    const amount = state.transactions.map((trans: ITrans) => trans.amount);
    const income = amount.filter((item: number) => item > 0).reduce((acc: number, item: number) => (acc += item), 0).toFixed(2);
    const expenses: number = parseInt(
        (amount.filter((item: number) => item < 0).reduce((acc: number, item: number) => (acc += item), 0) * -1).toFixed(2));
    return (
            <div className="income-expenses">
                <Title level={3} className="plus">Income <br /> $<CountUp end={income} /> </Title>
                <div className="divider"></div>
                <Title level={3} className="minus">Expenses <br /> $<CountUp end={expenses} /> </Title>
            </div>
    )
}
export default IncomeExpenses;