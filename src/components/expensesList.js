import React from 'react';
import {connect} from 'react-redux';
import ExpenseListItem from './expenseListItem';
import selectExpenses from '../selectors/expenses';

const ExpenseList = ({expenses, filters}) => {
    return (
    
        <div>
        <h1>Expense List</h1>
        {expenses.length === 0 && (
            <p>No Expenses</p>
        )}
        {
            expenses.map((expense) => (
                <ExpenseListItem {...expense} key={expense.id}/>
            ))
        }
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        expenses:selectExpenses(state.expenses,state.filters),
    }
}

export default connect(mapStateToProps)(ExpenseList)

