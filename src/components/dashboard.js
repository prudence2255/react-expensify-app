import React from 'react';
import ExpenseList from './expensesList';
import ExpenseListFilters from './expenseListFilters';


 const Dashboard = () => (
    <div>
     <ExpenseListFilters />
        <ExpenseList />
        <p>Dashboard</p>
    </div>
)

export default Dashboard;