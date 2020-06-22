import React, {useContext} from 'react'
import {GlobalContext} from '../Context/GlobalState';

export const Calculation = ({transaction}) => {
    const {deleteTransaction} = useContext(GlobalContext);


    const sign = transaction.amount < 0? "-": "+";
    return (
        <div>
            <li>
    {transaction.text} <span>{sign}{Math.abs(transaction.amount)}</span>
                    <button onClick = {()=> deleteTransaction(transaction.id)}>X</button>
                </li> 
        </div>
    )
}
