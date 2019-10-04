import React from 'react';
import ReactDOM from 'react-dom';
import App from './App'
import {Provider} from 'react-redux';
import configStore from './store/configStore';
import {addExpense} from './actions/expenses';


const store = configStore();
store.dispatch(addExpense({amount: 300, description: 'Water bill',createdAt: '10/01/2019'}));
store.dispatch(addExpense({amount: 500, description: 'Rent',createdAt: 100}));
store.dispatch(addExpense({amount: 350, description: 'Gas Bill',createdAt: 400}));
console.log(store.getState());
function AppRoot () {
    return(
        <Provider store={store} >
       <App />
        </Provider>
    )
}

ReactDOM.render(<AppRoot />, document.getElementById('root'));

