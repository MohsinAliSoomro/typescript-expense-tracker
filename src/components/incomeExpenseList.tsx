import React, { useContext } from 'react';
import { GlobalContext } from '../globalState/globalProvider';
import { ITrans } from '../transType/tranType'
import Transaction from './transaction'
import { Collapse } from 'antd';
const { Panel } = Collapse;

const IncomeExpensesList = () => {
  const { state } = useContext(GlobalContext)

  const callback = () => {
    console.log('change')
  }
  const text = "Hello"
  return (
    <div >
      <Collapse defaultActiveKey={['0']} onChange={callback}>
        <Panel header="Transactions" key="1">
        <ul className="transactionList">
        {state.transactions.map((item: ITrans) => {
          return (
            <Transaction trans={item} />
          )
        }
        )}
      </ul> 
        </Panel>
        <Panel header="Graphs" key="2">
          <p>{text}</p>
        </Panel>
      </Collapse>
    </div>
  )
}
export default IncomeExpensesList;
