import React, { useState } from 'react'

export const TransactionForm = () => {
    const [text, setText] = useState('');
    const [amount, setAmount] = useState(0);

    return (
        <div>
            <h1>Add new transaction</h1>
            <form>
                <label htmlFor = "details">Transaction Details</label>
                <input type = "text" value = {text} onChange = {(e)=> {setText(e.target.value);}} id = "details" placeholder = "Enter transaction details"/>
                <br/><br/>
                <label htmlFor = "amnt">Amount</label>
                <input type = "number" value = {amount} onChange = {(e)=> {setAmount(e.target.value);}} id = "amnt"/>
                <br/><br/>
                <button>Submit Transaction</button>
            </form>
        </div>
    )
}
