import React, { useContext } from 'react';
import { ITrans } from '../transType/tranType'
import { GlobalContext } from '../globalState/globalProvider';

const Header = () => {

    const { state } = useContext(GlobalContext)

    const amount = state.transactions.map((trans: ITrans) => trans.amount);

    const total: number = amount.reduce((acc: number, item: number) => (acc += item), 0).toFixed(2)

    return (
        <h4 className="text-center" style={{ color: '#fff' }}>Balance <br /> ${total} </h4>
    )
}
export default Header;