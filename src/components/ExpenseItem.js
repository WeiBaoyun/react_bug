import React, {useState} from 'react';
import ExpenseDate from './ExpenseDate';
import './ExpenseItem.css'
import Card from './Card';

function ExpenseItem(props) {
    const [title, setTitle] = useState(props.title);
    
    function clickHandler(){
        setTitle('updated!')

    }
    return (
        <Card className="expense-item">
            
            <ExpenseDate date={props.date} />
            
            <div className='expense-item__description'>
            <h2 className="expense-item__title">{title}</h2>
            <div className='expense-item__price'>${props.amount}</div>
            </div>
            <butten onClick={clickHandler}>change title</butten>
            
        </Card>
    )
}
export default ExpenseItem;