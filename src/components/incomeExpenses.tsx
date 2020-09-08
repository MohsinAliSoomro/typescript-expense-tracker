import React, { useContext } from 'react';
import { ITrans } from '../transType/tranType'
import { GlobalContext } from '../globalState/globalProvider'
import { Row, Col } from 'antd';
import { Typography } from 'antd';
const { Title } = Typography;
const IncomeExpenses = () => {
    const { state } = useContext(GlobalContext)
    const amount = state.transactions.map((trans: ITrans) => trans.amount);
    const income = amount.filter((item: number) => item > 0).reduce((acc: number, item: number) => (acc += item), 0).toFixed(2);
    const expenses: number = parseInt(
        (amount.filter((item: number) => item < 0).reduce((acc: number, item: number) => (acc += item), 0) * -1).toFixed(2));
    return (
        <Row>
            <Col span={12}>
                <Title level={2} style={{ color: '#fff' }} >Income <br /> ${income} </Title>
            </Col>
            <Col span={12}>
                <Title level={2} style={{ color: '#fff' }} >Expenses <br /> ${expenses} </Title>
            </Col>

        </Row>
    )
}
export default IncomeExpenses;