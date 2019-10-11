import React from 'react';
import ReactDOM from 'react-dom';
import App from './App'
import {Provider} from 'react-redux';
import {setStartExpenses} from './actions/expenses';
import configStore from './store/configStore';


const store = configStore();

console.log(store.getState());
function AppRoot () {
    return(
        <Provider store={store} >
       <App />
        </Provider>
    )
}

ReactDOM.render(<p>Loading...</p>, document.getElementById('root'));

store.dispatch(setStartExpenses()).then(() => {
    ReactDOM.render(<AppRoot />, document.getElementById('root'));
})


