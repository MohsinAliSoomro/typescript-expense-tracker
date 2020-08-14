import React from 'react';
import './App.css';
import Head from './components/head';
import Blnc from './components/blnc';
import IncomeExpenses from './components/incomeExpenses'
import IncomeExpensesList from './components/incomeExpenseList'
import InExForm from './components/in-ex-form'
import { GlobalProvider } from './globalState/globalProvider'
import 'bootstrap/dist/css/bootstrap.css'
function App() {
  return (
    <GlobalProvider>
      <div className="container-main">
        <Head />
        <Blnc />
        <IncomeExpenses />
        <p>History</p>
        <hr />
        <IncomeExpensesList />
        <InExForm />
      </div>
    </GlobalProvider>
  );
}

export default App;
