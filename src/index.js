import React from 'react';
import ReactDOM from 'react-dom';
import App, {history} from './App'
import {Provider} from 'react-redux';
import {setStartExpenses} from './actions/expenses';
import configStore from './store/configStore';
import {firebase} from './firebase/firebase';
import {login, logout} from './actions/auth'



const store = configStore();
let hasRendered = false;


function AppRoot () {
    return(
        <Provider store={store} >
       <App />
        </Provider>
    )
}
const renderApp = () => {

    if(!hasRendered) {
        ReactDOM.render(<AppRoot />, document.getElementById('root'));
        hasRendered = true;
    }
}

ReactDOM.render(<p>Loading...</p>, document.getElementById('root'));



firebase.auth().onAuthStateChanged((user) => {
    if(user) {
        store.dispatch(login(user.uid));
        store.dispatch(setStartExpenses()).then(() => {
          renderApp();
          if(history.location.pathname === '/'){
              history.push('/dashboard')
           
          }
        })
     
    }else{
        store.dispatch(logout());
      renderApp();
        history.push('/');
    }
})

