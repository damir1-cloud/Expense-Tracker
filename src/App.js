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
      <GlobalProvider className = "bb">
          <Header/>
        <div className="container">
          <Balance/>
          <IncomeExpense/>
         <TransactionHistory/>
         <TransactionForm/>
        </div>
      </GlobalProvider>
  );
}

export default App;
