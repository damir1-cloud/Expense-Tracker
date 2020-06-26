import React, {useContext} from 'react'
import {GlobalContext} from '../Context/GlobalState';


export const Calculation = ({transaction}) => {
    const {deleteTransaction} = useContext(GlobalContext);


    const sign = transaction.amount < 0? "-": "+";

    const transactionType = transaction.transactionAmount > 0 ? 'plus' : 'minus';
    return (
        <div className = {transactionType}>
            <li>
    {transaction.text} <span>{sign}{Math.abs(transaction.amount)}</span>
                    <button className="delete-btn" onClick = {()=> deleteTransaction(transaction.id)}>X</button>
                </li> 
        </div>
    )
}
