import React from 'react';
import './App.scss';
import {BrowserRouter as Router, Route, Switch, NavLink} from 'react-router-dom'
import addExpense from './components/addExpense';
import editExpense from './components/editExpense';
import helpExpense from './components/help';
import expenseDashboard from './components/dashboard'
import notFound from './components/notFound';
import './firebase/firebase';


export const Header = () => (
    <div>
    <h3>Expensify</h3>
        <NavLink to="/" activeClassName="is-active" exact >Home</NavLink>
        <NavLink to="/create" activeClassName="is-active">Create</NavLink>
        <NavLink to="/edit" activeClassName="is-active">Edit page</NavLink>
        <NavLink to="/help" activeClassName="is-active">Help</NavLink>
    </div>
)

 const App = () => {

    return (
       <Router>
            <div>
            <Header />
            <Switch>
            <Route path="/" exact component={expenseDashboard}/>
            <Route path="/create" component={addExpense}/>
            <Route path="/edit/:id" component={editExpense}/>
            <Route path="/help" component={helpExpense}/>
            <Route component={notFound}/>
            </Switch>
            
            </div>
       </Router>
    )
}

export default App;