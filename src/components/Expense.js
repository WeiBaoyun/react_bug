import React, {useState} from "react"
import './Expense.css'
import ExpensesFilter from './ExpensesFilter'

import ExpenseItem from "./ExpenseItem"
function Expenses (props){
  const [fliterYear, setFliterYear ] = useState('2020')
  function fliterChangeHandler(selectedYear){
    setFliterYear(selectedYear)
  
  }
return(
  <div>
    <ExpensesFilter select={fliterYear} onChangeFilter={fliterChangeHandler}></ExpensesFilter>
    <div className='expenses'>
    {props.items.map(expense=> <ExpenseItem title={expense.title} amount={expense.amount} date={expense.date}></ExpenseItem>)}
      
</div>
</div>
)
}
export default Expenses