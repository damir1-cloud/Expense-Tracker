import React, {useContext} from 'react';
import {Calculation} from './Calculation';

//Import Context
import { GlobalContext } from '../Context/GlobalState';

export const TransactionHistory = () => {
    const {transactions}  = useContext(GlobalContext);

    return (
        <div>
            <h1>Transaction History</h1>
            <ul>
                {transactions.map(transaction => (<Calculation key = {transaction.id} transaction = {transaction}/>))}
            </ul>
        </div>
    )
}
