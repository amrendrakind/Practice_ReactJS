import './App.css';
import Expenses from './components/Expenses/Expenses';
import NewExpense from './components/NewExpense/NewExpense';

function App() {
  const expenses = [
    { title: "Toilet Paper", amount: 194.67, date: new Date(2021, 9, 1) },
    { title: "New TV", amount: 799.67, date: new Date(2021, 8, 1) },
    { title: "New Desk (Wooden)", amount: 450.05, date: new Date(2021, 6, 1) },
    { title: "Car Insurance", amount: 294.67, date: new Date(2021, 9, 1) },
  ]
  const addExpenseHandler = (expense)=>{
    console.log("In App JS")
    console.log(expense)
  }
  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} /> 
      <Expenses items= {expenses}/>
    </div>
  );
}

export default App;
