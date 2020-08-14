import React, { useContext } from 'react';
import { GlobalContext } from '../globalState/globalProvider';
import { ITrans } from '../transType/tranType'
import Transaction from './transaction'
const IncomeExpensesList = () => {
    const { state } = useContext(GlobalContext)
    return (
        <div className="in-ex-list">
            <ul>
                {state.transactions.map((item: ITrans) => {
                    return (
                        item.text.length < -1 ?
                            <div>Add something in transaction</div>
                            :
                            <Transaction trans={item} />
                    )
                }
                )}
            </ul>
        </div>
    )
}
export default IncomeExpensesList;