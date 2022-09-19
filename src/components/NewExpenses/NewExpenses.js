import './NewExpenses.css';
import ExpensesForm from './ExpensesForm';

const NewExpenses = (props) => {
    const formSubmitHandler = enteredFormData => {
        props.onNewExpense(enteredFormData);
    };
    return (
        <ExpensesForm onFormSubmit={formSubmitHandler} />
    );
}

export default NewExpenses;