import React from "react";
import "./App.css";
import Head from "./components/head";
import Blnc from "./components/blnc";
import IncomeExpenses from "./components/incomeExpenses";
import IncomeExpensesList from "./components/incomeExpenseList";
import InExForm from "./components/in-ex-form";
import { GlobalProvider } from "./globalState/globalProvider";
import "bootstrap/dist/css/bootstrap.css";
import { messaging } from "./sevices/firebase";

Notification.requestPermission((permissions) => {
  console.warn(permissions);
  if (permissions === "granted") {
    messaging
      .getToken()
      .then((currentToken) => {
        console.log(currentToken);
      })
      .catch((err) => {
        console.log("Something is wrong... " + err);
      });
  }
});

function App() {
  return (
    <GlobalProvider>
      <div className="container">
        <div className="row">
          <div className="col-sm-12 col-md-4 col-lg-4"></div>
          <div className="col-sm-12 col-md-4 col-lg-4 p-2 pb-5 bg-color">
            <Head />
            <Blnc />
            <IncomeExpenses />
            <p className="text-white">History</p>
            <hr />
            <IncomeExpensesList />
            <InExForm />
          </div>
          <div className="col-sm-12 col-md-4 col-lg-4"></div>
        </div>
      </div>
    </GlobalProvider>
  );
}

export default App;
