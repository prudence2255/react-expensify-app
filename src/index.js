import React from 'react';
import ReactDOM from 'react-dom';
import App from './App'
import {Provider} from 'react-redux';
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

ReactDOM.render(<AppRoot />, document.getElementById('root'));

