import React, { useContext } from 'react';
import { GlobalContext } from '../globalState/globalProvider';
import { ITrans } from '../transType/tranType'
import Transaction from './transaction'
const IncomeExpensesList = () => {
    const { state } = useContext(GlobalContext)
    return (
        <div className="in-ex-list">
            <button className="btn btn-primary" type="button" data-toggle="collapse" data-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
                Button with data-target
            </button>
            <ul>
                {state.transactions.map((item: ITrans) => {
                    return (
                        <Transaction trans={item} />
                    )
                }
                )}
            </ul>
        </div>
    )
}
export default IncomeExpensesList;