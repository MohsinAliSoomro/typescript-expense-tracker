import React from 'react';
import './App.css';
import Head from './components/head';
import Blnc from './components/blnc';
import IncomeExpenses from './components/incomeExpenses'
import IncomeExpensesList from './components/incomeExpenseList'
import InExForm from './components/in-ex-form'
import { GlobalProvider } from './globalState/globalProvider'
import 'bootstrap/dist/css/bootstrap.css'
import 'antd/dist/antd.css';
import { Row, Col } from 'antd';
function App() {
  return (
    <GlobalProvider>
      <div>
        <Row>
          <Col span={8}></Col>
          <Col span={8}>
            <Head />
            <Blnc />
            <IncomeExpenses />
            <p>History</p>
            <hr />
            <IncomeExpensesList />
            <InExForm />
          </Col>
          <Col span={8}></Col>
        </Row>

      </div>
    </GlobalProvider>
  );
}

export default App;
