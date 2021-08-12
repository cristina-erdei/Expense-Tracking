import React from "react";
import './App.css';
import Header from "./components/Header";
import Balance from "./components/Balance";
import IncomeExpense from "./components/IncomeExpense";
import TransactionHistoryList from "./components/transaction_history/TransactionHistoryList";
import NewTransaction from "./components/new_transaction/NewTransaction";
import GlobalContextProvider from "./context/GlobalState";

function App() {
  return (
   <GlobalContextProvider>
       <Header />
       <div className="container">
           <Balance />
           <IncomeExpense/>
           <TransactionHistoryList />
           <NewTransaction />
       </div>
   </GlobalContextProvider>
  );
}

export default App;
