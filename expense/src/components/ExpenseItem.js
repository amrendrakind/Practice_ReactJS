import './ExpenseItem.css'

function ExpenseItem(props) {
    const expenseDate = new Date(2021, 9, 20)
    const expenseTitle = "Car Insurance"
    const expenseAmount = 294.67
    return (<div className="expense-item">
        <div >{expenseDate.toISOString()}</div>
        <div className="expense-item__description">
            <h2>{expenseTitle}</h2>
            <div className="expense-item__price">${expenseAmount}</div>
        </div>
        <div></div>
    </div>)
}

export default ExpenseItem