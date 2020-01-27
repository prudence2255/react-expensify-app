import React from 'react';
import {connect} from 'react-redux';
import {startLogin} from '../actions/auth'

 const LoginPage = ({startLogin}) => (
    <div className="bg-layout">
        <div className="login-box">
            <h1 className="">Expensify App</h1>
            <p>It is time to get your expenses under control</p>
            <button onClick={startLogin} className="w3-btn w3-blue mx-auto">Login With Google</button>
        </div>
       
    </div>
)

const mapDispatchToProps = dispatch => {
    return {
        startLogin: () => dispatch(startLogin())
    }
}

 export default connect(null, mapDispatchToProps)(LoginPage)