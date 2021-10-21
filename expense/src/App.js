import ExpenseItem from './components/ExpenseItem';
import './App.css';

function App() {
  const expenses = [
    { title: "Toilet Paper", amount: 94.67, date: new Date(2021, 9, 20) },
    { title: "New TV", amount: 799.67, date: new Date(2021, 9, 20) },
    { title: "New Desk (Wooden)", amount: 450, date: new Date(2021, 9, 20) },
    { title: "Car Insurance", amount: 294.67, date: new Date(2021, 9, 20) },
]

  return (
    <div>
      <h2>Lets Go Started!!!</h2>
      <ExpenseItem title={expenses[0].title} amount={expenses[0].amount} date={expenses[0].date} />
      <ExpenseItem title={expenses[1].title} amount={expenses[1].amount} date={expenses[1].date} />
      <ExpenseItem title={expenses[2].title} amount={expenses[2].amount} date={expenses[2].date} />
      <ExpenseItem title={expenses[3].title} amount={expenses[3].amount} date={expenses[3].date} />
      </div>
  );
}

export default App;
