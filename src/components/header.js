import React from 'react';
import {NavLink} from 'react-router-dom';
import {connect} from 'react-redux';
import {startLogout} from '../actions/auth';




const Header = ({dispatch}) => (
    <div>
    <h3>Expensify</h3>
        <NavLink to="/dashboard" activeClassName="is-active" >Home</NavLink>
        <NavLink to="/create" activeClassName="is-active">Create</NavLink>
        <button onClick={()=> {
           dispatch(startLogout())
        }}>Logout</button>
    </div>
)


export default connect()(Header)