import React, {useState} from "react"
import './ExpensesForm.css'
function ExpensesForm(props){
    const [enteredTitle,setEnteredTitle]=useState('')
    const [enterderAmount,setEnteredAmount]=useState('')
    const [enterderDate,setEnteredDate]=useState('')


    function titleChangeHandler(event){
        setEnteredTitle(event.target.value)
    }
    
    function amountChangeHandler(event){
        setEnteredAmount(event.target.value)
    }
    
    function dateChangeHandler(event){
        setEnteredDate(event.target.value)
    }



function submitHandler(event){
   event.preventDefault();
   const expenseData={  
       title : enteredTitle,
       amount: enterderAmount,
       date: new Date(enterderDate)
   }
props.onSaveExpenseData(expenseData);
   
   }

return (
<form onSubmit={submitHandler}>
    <div className="new-expense__controls">
        <div className="new-expense__control">
            <label>Title</label>
            <input type='text' value={enteredTitle} onChange={titleChangeHandler}></input>
        </div>
        <div className="new-expense__control">
            <label>amount</label>
            <input type='number' value={enterderAmount} onChange={amountChangeHandler}></input>
        </div>
        <div className="new-expense__control">
            <label>date</label>
            <input type='date' min='2019-01-01' max='2022-12-31' onChange={dateChangeHandler}></input>
        </div>
    </div>
    <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
    </div>
</form>)

}
export default ExpensesForm