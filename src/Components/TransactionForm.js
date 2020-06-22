import React, { useState, useContext } from 'react'
import {GlobalContext} from '../Context/GlobalState';

export const TransactionForm = () => {
    const [text, setText] = useState('');
    const [amount, setAmount] = useState('');

    const {addTransaction} = useContext(GlobalContext);

    const Submit = e => {
        e.preventDefault();

        const newTransaction = {
            id: new Date().getTime(),
            text,
            amount: +amount
        }

        addTransaction(newTransaction);
    }

   

    

    return (
        <div>
            <h1>Add new transaction</h1>

            <form onSubmit={Submit}>
                <label htmlFor = "text">Transaction Details</label>
                <input type = "text" value = {text} id = 'text' required = "required" onChange = {(e)=> {setText(e.target.value);}}  placeholder = "Enter transaction details"/>
                <br/><br/>
                <label htmlFor = "amount">Amount</label>
                <input type = "number" value = {amount} id = 'amount' required = "required" onChange = {(e)=> {setAmount(e.target.value);}}/>
                <br/><br/>
                <button type = "submit">Add Transaction</button>
            </form>
        </div>
    )
}