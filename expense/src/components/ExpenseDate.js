import './ExpenseDate.css'
function ExpenseDate(props) {
    const year = props.date.getFullYear();
    const month = props.date.toLocaleString('en-US', { month: 'long' })
    const day = props.date.toLocaleString('en-US', { month: '2-digit' })

    return (
        <div className = "expense-date">
            <div>{month}</div>
            <div>{year}</div>
            <div>{day}</div>
        </div>)
}
export default ExpenseDate