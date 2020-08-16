import React, { useContext } from 'react';
import { ITrans } from '../transType/tranType'
import { GlobalContext } from '../globalState/globalProvider';
import CountUp from 'react-countup';
import { Typography } from 'antd';
const { Title } = Typography;
const Header = () => {

    const { state } = useContext(GlobalContext)

    const amount = state.transactions.map((trans: ITrans) => trans.amount);

    const totol = amount.reduce((acc: number, item: number) => (acc += item), 0).toFixed(2)

    return (
        <Title className={(totol < 0 ? 'minus' : 'plus')}>Balance <br /> $<CountUp end={totol} /> </Title>
    )
}
export default Header;