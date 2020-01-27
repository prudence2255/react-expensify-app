import React from 'react';
import ExpenseList from './expensesList';
import ExpenseListFilters from './expenseListFilters';
import ExpensesSummary from './expenses-summary'


 const Dashboard = () => (
    <div className="">
    <ExpensesSummary />
     <ExpenseListFilters />
        <ExpenseList />
    </div>
)

export default Dashboard;