import {useState} from 'react';
import Card from '../UI/Card';

const ExpensesForm = (props) => {
    const [enteredTitle, setEnteredTitle] = useState('');
    const [enteredAmount, setEnteredAmount] = useState('');
    const [enteredDate, setEnteredDate] = useState('');

    const submitHandler = event => {
        event.preventDefault();
        const formData = {
            title: enteredTitle,
            price: enteredAmount,
            date: new Date(enteredDate)
        };
        props.onFormSubmit(formData);
        setEnteredAmount('');
        setEnteredDate('');
        setEnteredTitle('');
        // console.log(formData);
    }
    return (
        <Card>
        <form onSubmit={submitHandler}>
            <div className="newExpense">
                <div className="newExpense-title">
                    <label>Title</label> <br />
                    <input type="text"  onChange={e => setEnteredTitle(e.target.value)} value={enteredTitle} /> <br/>
                </div>
                <div className="newExpense-amount">
                    <label>Amount</label> <br />
                    <input type="number" min="0.01" step="0.01"onChange={e => setEnteredAmount(e.target.value)} value={enteredAmount} /> <br/>
                </div>
                <br />
                <div className="newExpense-date">
                    <label>Date</label> <br />
                    <input type="date" min="2019/1/1" max="2030/1/1" onChange={e => setEnteredDate(e.target.value)} value={enteredDate} /> <br/>
                </div>
                <div className="newExpense-action">
                    <button>Add Expense</button>
                </div>
            </div>
        </form>
    </Card>
    )
}

export default ExpensesForm;