import React, { useContext } from 'react';
import { GlobalContext } from '../globalState/globalProvider';
import { ITrans } from '../transType/tranType'
import Transaction from './transaction'
import Button from '@material-ui/core/Button';
const IncomeExpensesList = () => {
    const { state } = useContext(GlobalContext)
    return (
        <div className="in-ex-list">
            <Button>click me</Button>
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