import React from 'react';
import './App.css';

//import components
import { Header } from './Components/Header';
import { Balance } from './Components/Balance';
import { IncomeExpense } from './Components/IncomeExpense';
import { TransactionHistory } from './Components/TransactionHistory';
import { TransactionForm } from './Components/TransactionForm';

//Import Context
import { GlobalProvider } from './Context/GlobalState';

function App() {
  return (
    <GlobalProvider>
      <Header/>
      <Balance/>
      <IncomeExpense/>
      <TransactionHistory/>
      <TransactionForm/>
    </GlobalProvider>
  );
}

export default App;
