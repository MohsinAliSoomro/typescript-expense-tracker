import React, { useContext } from 'react';
import { GlobalContext } from '../globalState/globalProvider';
import { ITrans } from '../transType/tranType'
const IncomeExpensesList = () => {
    const { state } = useContext(GlobalContext)
    const sign = state.transactions.amount < 0 ? '-' : '+';
    return (
        <div className="in-ex-list">
            <ul>
                {state.transactions.map((item: ITrans) => {
                    return (
                        <li key={item.id}>{item.text}
                            <span>
                                {sign + '$' + Math.abs(item.amount)}
                            </span>
                        </li>
                )}
            )}
            </ul>
        </div>
    )
}
export default IncomeExpensesList;