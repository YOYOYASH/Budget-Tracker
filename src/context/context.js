import React,{useReducer, createContext} from 'react'

import contextReducer from './contextReducer'

const initialState=JSON.parse(localStorage.getItem('transactions')) ||[{"amount":200,"category":"Food","type":"Expense","date":"2021-10-21","id":"934aa5a8-7cf2-4ced-a6b3-1150bb017195"},{"amount":3000,"category":"Shopping","type":"Expense","date":"2021-10-22","id":"ea61455c-a9de-4ee5-b3a9-8f437342c537"},{"amount":100,"category":"Gifts","type":"Income","date":"2021-10-22","id":"a640e20b-18c3-4e07-af3c-911464fd9924"},{"amount":5000,"category":"Savings","type":"Income","date":"2021-10-26","id":"3f6f453e-eec3-4879-8211-20700a123345"}];

export const ExpenseTrackerContext=createContext(initialState);

export const Provider =({children}) =>{
    const [transactions, dispatch] = useReducer(contextReducer, initialState);
     
    //Action Creators
    const deleteTransaction = (id) => {
        dispatch({ type: 'DELETE_TRANSACTION', payload: id})
    };

    const addTransaction = (transaction) => {
        dispatch({ type: 'ADD_TRANSACTION', payload: transaction})
    };
    
    const balance=transactions.reduce((acc,currVal)=>{
        return  (currVal.type === 'Expense'? acc-currVal.amount : acc+currVal.amount)
     },0);



    return (
    <ExpenseTrackerContext.Provider value={{deleteTransaction, 
        addTransaction,
        transactions,
        balance
    }}>
        {children}
    </ExpenseTrackerContext.Provider>
    );
}
