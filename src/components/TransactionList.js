import React, { useContext } from 'react'
import { globalContext } from '../context/GlobalState'

export const TransactionList = () => {
    const { transactions } = useContext(globalContext);
    return (
        <>
            <h3>History</h3>
            <ul id="list" className="list">
                {transactions.map(transactions =>
                    <li className="minus">
                        {transactions.text}<span>{transactions.amount}</span><button className="delete-btn">x</button>
                    </li>
                )}
            </ul>
        </>
    )
}
