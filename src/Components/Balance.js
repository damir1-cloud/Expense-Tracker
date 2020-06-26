import React, {useContext} from 'react'
import { GlobalContext } from '../Context/GlobalState';


export const Balance = () => {
    const {transactions}  = useContext(GlobalContext);
    const amounts = transactions.map(transaction => transaction.amount);
    const total = amounts.reduce((pre,curr) => (pre+curr), 0);

    
    
    return (
        <div>
            <h4>Your Balance is</h4>
    <h1>PKR{total}</h1>
        </div>
    );
}
