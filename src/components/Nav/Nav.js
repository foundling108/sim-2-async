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
                <nav>
                    <div id="menuToggle">
                        <a id="logout"><li onClick={this.logout}>LOGOUT</li></a>
                    </div>
                </nav>
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