import React, { useState} from 'react';
import Expenses from './components/Expense';
import Expense from './components/Expense';
import ExpensesFilter from './components/ExpensesFilter';
import NewExpenses from './components/NewExpenses/NewExpenses';

const DUMMY_EXPENSES = [
  {
    id: 'e1',
    title: 'Toilet Paper',
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  { id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12) },
  {
    id: 'e3',
    title: 'Car Insurance',
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: 'e4',
    title: 'New Desk (Wooden)',
    amount: 450,
    date: new Date(2021, 5, 12),
  },
];
function App() {
  const[expenses,setExpenses] = useState(DUMMY_EXPENSES)
  function addExpenseHandler(){
    setExpenses(function(prevExpenses){
      return [expenses, ...prevExpenses]
    })
  }
  
  return (
    <div>
      
      <NewExpenses onAddExpense={addExpenseHandler}></NewExpenses>
      
      <Expense items ={expenses}></Expense>
    </div>
  );
}

export default App;
