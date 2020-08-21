import React from 'react';


const Transaction = ({ trans }: any) => {
    const sign = trans.amount < 0 ? '-' : '+';
    return (
        <li key={trans.id}
            className={(trans.amount < 0 ? "transItem minus" : "transItem plus")}
        >
            <p>{trans.text}</p>
            <span>
                { '$ '+sign + Math.abs(trans.amount)}
            </span>
        </li>
    )
}
export default Transaction;
