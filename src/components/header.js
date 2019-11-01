import React from 'react';
import {NavLink} from 'react-router-dom';
import {connect} from 'react-redux';
import {startLogout} from '../actions/auth';


const Header = ({startLogout}) => (
    <div>
    <h3>Expensify</h3>
        <NavLink to="/" activeClassName="is-active" exact >Home</NavLink>
        <NavLink to="/create" activeClassName="is-active">Create</NavLink>
        <NavLink to="/edit" activeClassName="is-active">Edit page</NavLink>
        <NavLink to="/help" activeClassName="is-active">Help</NavLink>
        <button onClick={()=> {
            startLogout();
           
        }}>Logout</button>
    </div>
)

const mapDispatchToProps = dispatch => {
    return {
        startLogout: () => dispatch(startLogout())
    }
}

export default connect(null, mapDispatchToProps)(Header)