import React, { useReducer, createContext } from 'react';

//Import Reducer
import AppReducer from './AppReducer';

//Initial state
const initialState = {

    transactions: [
        {id:1, text: 'wallet', amount: 20},
        {id:2, text: 'mobile', amount: -50},
        {id:3, text: 'bag', amount: 200},
        {id:4, text: 'shoes', amount: -100}
    ]
}

//Create context
export const GlobalContext = createContext(initialState);

//Provider componenet
export const GlobalProvider  = ({children}) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);

    const deleteTransaction = (id)=> {
        dispatch({
            type: 'DELETE_TRANSACTION',
            payload: id
        });

    }

    const addTransaction = (transaction) => {
        return {
            type: 'ADD_TRANSACTION',
            payload: transaction
        }
    }

    return (
        <GlobalContext.Provider value = {{transactions : state.transactions, deleteTransaction, addTransaction}}>
            {children}
        </GlobalContext.Provider>
    );
}