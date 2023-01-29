import './ExpenseForm.css';
import { useState } from 'react';

const ExpenseForm = () => {
    const [enteredTitle, setEnteredTitle] = useState('');
    const [enteredAmount, setEnteredAmount] = useState('');
    const [enteredDate, setEnteredDate] = useState('');
    //const [userInput, setUserInput] = useState({
     //   enteredTitle: '',
     //   enteredAmount: '',
      //  enteredDate: ''
    //});
    
    const titleChangeHandler = (e) =>{
        setEnteredTitle(e.target.value);
        //setUserInput({
        //    ...userInput,
        //    enteredTitle: e.target.value
        //setUserInput((prevState) => { // 이전 상태에 의존시 꼭 이런식으로 하기 
        //    console.log('prevState: ', prevState);
        //    return {...prevState, enteredTitle: e.target.value};
        //});
    };
    
    const amountChangeHandler = (e) =>{
        setEnteredAmount(e.target.value);
        //setUserInput({
        //    ...userInput,
        //    enteredAmount: e.target.value
        //});
    };

    const dateChangeHandler = (e) => {
        setEnteredDate(e.target.value);
        //setUserInput({
        //    ...userInput,
        //    enteredDate: e.target.value
        //});
    };

    const submitHandler = (e) => {
        e.preventDefault();

        const expenseData = {
            title: enteredTitle,
            amount: enteredAmount,
            date: new Date(enteredDate)
        };

        console.log(expenseData);
    };

    return <form onSubmit={submitHandler}>
        <div className="new-expense__controls">
            <div className="new-expense__controls">
                <label>Title</label>
                <input type='text' onChange={titleChangeHandler}/>
            </div>
            <div className="new-expense__controls">
                <label>Amount</label>
                <input type='number' min="0.01" step="0.01" onChange={amountChangeHandler}/>
            </div>
            <div className="new-expense__controls">
                <label>Date</label>
                <input type='date' min="2023-01-01" max="2026-12-31" onChange={dateChangeHandler}/>
            </div>
        </div>
        <div className="new-expense__actions">
            <button type='submit'>Add Expense</button>
        </div>
    </form>
};

export default ExpenseForm;