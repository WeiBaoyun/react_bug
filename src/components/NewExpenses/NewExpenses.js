import React from "react"
import './NewExpenses.css'
import ExpensesForm from "./ExpensesForm"
function NewExpenses (props){
function saveExpenseDataHandler (enteredExpenseData){
const ExpenseData ={
    ...enteredExpenseData,
    id : Math.random().toString()
}
props.onAddExpense(ExpenseData)
}
return (<div className="new-expense">
    <ExpensesForm onSaveExpenseData ={saveExpenseDataHandler}></ExpensesForm>
</div>)
}
export default NewExpenses