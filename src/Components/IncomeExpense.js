import React, {useContext} from 'react'
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
        <div className="inc-exp-container">
            <div>
                <h4 className="money plus">PKR{income}</h4>
                
            </div>
            <div>
                 <h4 className="money minus">PKR{expense}</h4>
                
            </div>
        </div>
    )
}
