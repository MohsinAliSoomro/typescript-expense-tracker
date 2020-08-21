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
      <div className="container">
        <div className="row">
          <div className="col-sm-12 col-md-4 col-lg-4"></div>
          <div className="col-sm-12 col-md-4 col-lg-4 p-2 pb-5 bg-color">
            <Row>
              <Col span={24}>
                <Head />
                <Blnc />
                <IncomeExpenses />
                <p className="h5 text-white">History</p>
                <hr />
                <IncomeExpensesList />
                <InExForm />
              </Col>
            </Row>
          </div>
          <div className="col-sm-12 col-md-4 col-lg-4"></div>
        </div>
      </div>
    </GlobalProvider>
  );
}

export default App;
