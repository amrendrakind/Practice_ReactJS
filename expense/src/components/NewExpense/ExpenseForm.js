import React from "react"
import './ExpenseForm.css'

const ExpenseForm = () => {
    return (
        <form>
            <div className="new-expense__controls">
                <div className="new-expense__controls">
                    <label>Title</label>
                    <input type="text" />
                </div>
            </div>
        </form>
    )
}
export default ExpenseForm