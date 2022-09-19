import ExpenseItem from './ExpenseItem';
import './ExpensesList.css';

const ExpensesList = props => {
    return (
        props.items.length === 0 ? (
            <p>No expenses Found.</p>
            ) : (
              props.items.map(expense => (
                <ExpenseItem
                  key={Math.random()}
                  title={expense.title}
                  price={expense.price}
                  date={expense.date}
                />
              ))
            )
    )
}
export default ExpensesList;