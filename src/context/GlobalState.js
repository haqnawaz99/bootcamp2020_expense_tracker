import React, { createContext, useReducer } from 'react';
import AppReducer from './AppReducer';

//Initial state
const initialState = {
    transactions:  [
        {id: 1, text: 'Flower', amount: -20},
        {id: 2, text: 'Salary', amount: 300},
        {id: 3, text: 'Book', amount: -20},
        {id: 4, text: 'Camera', amount: 150},
    ]
}

// Create context
export const globalContext = createContext(initialState);

//Provider Component
export const GlobalProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);

    return (<globalContext.Provider value={{
        transactions: state.transactions
    }}>
        {children}
    </globalContext.Provider>);
}