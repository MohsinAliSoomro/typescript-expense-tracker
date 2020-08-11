import React, { useContext } from 'react';
import {ITrans}  from '../transType/tranType'
import {GlobalContext} from '../globalState/globalProvider'
const Header = () => {
    const {state} =useContext(GlobalContext)
    const amount =state.transactions.map((trans:ITrans)=>trans.amount);
    const totol=amount.reduce((acc:number,item:number)=>(acc+=item),0).toFixed(2)
    return (
    <p className="blnc">Balance <br /> ${totol}</p>
    )
}
export default Header;