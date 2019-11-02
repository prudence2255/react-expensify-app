import React from 'react';
import './App.scss';
import {Router, Route, Switch} from 'react-router-dom';
import { createBrowserHistory } from 'history';
import addExpense from './components/addExpense';
import editExpense from './components/editExpense';
import expenseDashboard from './components/dashboard'
import notFound from './components/notFound';
import './firebase/firebase';
import  LoginPage from './components/loginPage';
import PrivateRoute from './routers/privateRoute.js'
import PublicRouter from './routers/publicRoute.js'

export const history = createBrowserHistory()


 const App = () => {
   
    return (
       <Router history={history}>
            <div>
            <Switch>
            <PublicRouter path="/" exact component={LoginPage} />
            <PrivateRoute path="/dashboard" component={expenseDashboard}/>
            <PrivateRoute path="/create" component={addExpense}/>
            <PrivateRoute path="/edit/:id" component={editExpense}/>
            <Route component={notFound}/>
            </Switch>
            
            </div>
       </Router>
    )
}

export default App;