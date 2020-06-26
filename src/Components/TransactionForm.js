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
            <h3>Add new transaction</h3>

            <form onSubmit={Submit}>
            <div className="form-control">
                <label htmlFor = "text">Transaction Details</label>
                <br/>
                <input type = "text" value = {text} id = 'text' required = "required" onChange = {(e)=> {setText(e.target.value);}}  placeholder = "Enter transaction details"/>
            </div>

            <div className="form-control">
                <label htmlFor = "amount">Amount</label>
                <br/>
                <input type = "number" value = {amount} id = 'amount' required = "required" onChange = {(e)=> {setAmount(e.target.value);}}/>
            </div>
                <button  className="btn" type = "submit">Add Transaction</button>
            </form>
        </div>
    )
}