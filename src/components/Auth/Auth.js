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
            <section>
                Auth
            </section>
        )
    }
}

export default connect(null, {getUserData})(Auth);