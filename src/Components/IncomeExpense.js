import React, {useContext} from 'react'
import './IncomeExpense.css';
import {GlobalContext} from '../Context/GlobalState';

export const IncomeExpense = () => {
    const {transactions} = useContext(GlobalContext);
    const amounts = transactions.map(transaction => transaction.amount);
    
    const income = amounts
        .filter(curr => curr>0)
        .reduce((pre, curr) => (pre+curr), 0);

    const expense = amounts
        .filter(curr => curr<0)
        .reduce((pre, curr) => (pre+curr),0);

    return (
        <div className = "row">
            <div className = "column">
                <h4>{income}</h4>
                <p>+PKR0.00</p>
            </div>
            <div className = "column">
                 <h4>{expense}</h4>
                <p>-PKR0.00</p>
            </div>
        </div>
    )
}
