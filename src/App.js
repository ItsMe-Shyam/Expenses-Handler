import Card from './components/UI/Card';
import Expenses from './components/Expenses/Expenses';
import NewExpenses from './components/NewExpenses/NewExpenses';
import {useState, useEffect} from 'react';



const App = () => {
  const DUMMY_DATA = [
  {
    title: 'Groceries',
    price: 689.87,
    date: new Date(2022, 4, 6)
  },
  {
    title: 'Medicines',
    price: 300.21,
    date: new Date(2022, 8, 12),
  },
  {
    title: 'Clothing',
    price: 1000,
    date: new Date(2022, 9, 9)
  }
];
  const [expenses, setExpenses] = useState(DUMMY_DATA);

  const newExpenseHandler = newExpense => {
    console.log(expenses);
    console.log(newExpense);
    setExpenses(prevExpenses => {
      return [newExpense, ...prevExpenses];
    });
    console.log(expenses);
  }

  return (
    <div>
    <NewExpenses onNewExpense={newExpenseHandler} />
    <Card>
      <Expenses items={expenses}/>
    </Card>
    </div>
  );
}

export default App;
