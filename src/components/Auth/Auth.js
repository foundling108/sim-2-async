import React, {Component} from 'react';
import axios from 'axios'
import { connect } from 'react-redux';

import { updateUser } from './../../dux/reducer';

import './Auth.css';

class Auth extends Component {
    constructor(props) {
        super(props);

        this.state = {
            username: '',
            password: ''
        }

        this.login = this.login.bind(this);
        this.register = this.register.bind(this);
    }

    handleChange(prop, val) {
        if(val.length < 20) {
            this.setState({
                [prop]: val
            })
        }
    }

    login() {
        axios.get('/api/auth/login', {username: this.state.username, password: this.state.password})
        .then(res => {
            if( res.status === 200 ) {
                this.props.updateUser(res.data);
                this.props.history.push('/dash');
            }
            else {
                alert( "username and password do not match" )
            }
        })
        .catch(err => console.log(err))
    }

    register() {
        axios.post('/api/auth/register', this.state)
        .then(res => {
            this.props.updateUser(res.data);
            this.props.history.push('/dash');
        })
    }

    render() {
        return(
            <section className='auth-box'>
                <div className='auth-logo'>
                    <img src={require('./../../icons/auth_logo.png')} alt="Houser"/>
                </div>
                <div className='auth-input-box' >
                    <p className='user-pass'>Username</p>
                    <input className='auth-input' value={this.state.username} onChange={e => this.handleChange('username', e.target.value)}/>
                </div>
                <div className='auth-input-box'>
                    <p className='user-pass'>Password</p>
                    <input className='auth-input' value={this.state.password} type='password' onChange={e => this.handleChange('password', e.target.value)}/>
                </div>
                <div className='button-box'>
                    <button className='auth-buttons' id='login-button' onClick={this.login} > Login </button>
                    <button className='auth-buttons' id='register-button' onClick={this.register} > Register </button>
                </div>
            </section>
        )
    }
}

export default connect(null, {updateUser})(Auth);