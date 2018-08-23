import React, {Component} from 'react';
// import axios from 'axios
import { connect } from 'react-redux';

import { getUserData } from './../../dux/reducer';

import './Auth.css';

class Auth extends Component {
    constructor(props) {
        super(props);

        this.state = {
            username: '',
            password: ''
        }
    }

    render() {
        return(
            <section className='auth-box'>
                <div className='auth-logo'>
                    <img src='./../../icons/auth_logo.png' alt="Houser"/>
                </div>
                <div className='auth-input-box' >
                    <p className='user-pass'>Username</p>
                    <input className='auth-input' type="text"/>
                </div>
                <div className='auth-input-box'>
                    <p className='user-pass'>Password</p>
                    <input className='auth-input' type="text"/>
                </div>
                <div className='button-box'>
                    <button className='auth-buttons' id='login-button' > Login </button>
                    <button className='auth-buttons' id='register-button' > Register </button>
                </div>
            </section>
        )
    }
}

export default connect(null, {getUserData})(Auth);