import Card from '../UI/Card';
import './Expenses.css';
import {useState} from 'react';
import ExpensesFilter from './ExpensesFilter';
import ExpensesList from './ExpensesList';
import ExpensesChart from './ExpensesChart';

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("2022");
  const dropdownChangeHandler = selectedYear => {
    setFilteredYear(selectedYear);
  }
  const filteredExpenses = props.items.filter(expenses => (
    expenses.date.getFullYear().toString() === filteredYear
  ))
  return (
    <Card className="expenses">
    <ExpensesFilter selected={filteredYear} onFilterChange={dropdownChangeHandler} />
    <ExpensesChart expenses={filteredExpenses} />
    <ExpensesList items={filteredExpenses} />
    </Card>
  )}

export default Expenses;

