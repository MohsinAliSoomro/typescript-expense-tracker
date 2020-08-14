import React from 'react';
const Transaction = ({ trans }: any) => {
    const sign = trans.amount < 0 ? '-' : '+';
    return (
        <li key={trans.id}
            className={(trans.amount < 0 ? "minus" : "plus")}
        >
            {trans.text}
            <span>
                {sign + '$' + Math.abs(trans.amount)}
            </span>
        </li>
    )
}
export default Transaction;
