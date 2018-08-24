import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import axios from 'axios';

import { logout } from './../../dux/reducer';

import './Nav.css';

class Nav extends Component {
    constructor(props) {
        super(props);

        this.logout = this.logout.bind(this);
    }

    logout() {
        axios.get('/api/auth/logout')
        .then( ()=>{
            this.props.history.push('/');
        })
        }
    

    render() {
        if (this.props.location.pathname !== '/') {

            return(
                <section>
                    <section  className='navbar'>
                    <div className='nav-content'>
                        <img src="./header_logo.png" alt="little house"/>
                        <h1>Houser</h1>
                        <h2>Dashboard</h2>
                    </div>
                    <div className='log-button'>
                        <a><button className='logout' onClick={this.logout}>LOGOUT</button></a>
                    </div>
                    </section>
                </section>
            )
        } else {
            
            return null
            
        }
    }
}

function mapStateToProps(state) {
    return state;
}

export default withRouter(connect(mapStateToProps, {logout}) (Nav));