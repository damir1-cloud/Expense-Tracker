import React, {useContext} from 'react'
import { GlobalContext } from '../Context/GlobalState';

export const Balance = () => {
    const {transactions}  = useContext(GlobalContext);
    const amounts = transactions.map(transaction => transaction.amount);
    const total = amounts.reduce((pre,curr) => (pre+curr), 0)

    
    
    return (
        <div>
            <h3>Your Balance is</h3>
    <h1>{total}</h1>
        </div>
    );
}
