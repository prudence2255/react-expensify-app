import React from 'react';
import ExpenseForm from './expenseForm'
import {connect} from 'react-redux'
import {startAddExpense} from '../actions/expenses'

 const addExpensePage = (props) => (
    <div>
    <h1>Expense Form</h1>
    <ExpenseForm 
        onSubmit={(expense) => {
props.dispatch(startAddExpense(expense));
props.history.push('/');
        }}
    />
    </div>
)

export default connect()(addExpensePage)