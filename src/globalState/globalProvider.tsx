import React, { useReducer, createContext } from 'react';
import { IState, IAction, ITrans } from '../transType/tranType'

const initialState: IState = {
    transactions: []
}

export const GlobalContext = createContext<IState | any>(initialState)

function reducer(state: IState, action: IAction): IState {
    switch (action.type) {
        case 'ADD':
            return { ...state, transactions: [action.payload, ...state.transactions] }

        case 'DEL':
            return { ...state, transactions: state.transactions.filter((transaction: ITrans) => transaction.id !== action.payload) }

        default:
            return state;
    }

}
export function GlobalProvider(props: any): JSX.Element {
    const [state, dispatch] = useReducer(reducer, initialState);
    return <GlobalContext.Provider value={{ state, dispatch }}>{props.children}</GlobalContext.Provider>
}

// export const GlobalProvider:React.FC = ({ children }) => {
//     const [state, dispatch] = useReducer(reducer, initialState)
//     function addTransaction(transaction:transactionType) {
//         dispatch({
//             type:"ADD_TRANSACTION",
//             payload:transaction
//         })
//     }
//     return (
//         <GlobalContext.Provider 
//         value={{ transaction: state.transaction, }} >
//             {children}
//         </GlobalContext.Provider>
//     )
// }
