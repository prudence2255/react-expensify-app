import React from 'react';
import {NavLink} from 'react-router-dom';
import {connect} from 'react-redux';
import {startLogout} from '../actions/auth';




const Header = ({dispatch}) => (
    <div className="header">
   <div className="header-nav">
   <h3>Expensify</h3>
        <div>
        <NavLink to="/dashboard" activeClassName="is-active w3-btn">Dashboard</NavLink>
        </div>
        <button onClick={()=> {
           dispatch(startLogout())
        }} className="w3-btn btn-blue">Logout</button>
   </div>
    </div>
)


export default connect()(Header)