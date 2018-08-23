import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import './Wizard.css';

import { updatePlace } from '../../dux/reducer';


class Wizard1 extends Component {
    constructor(props) {
        super(props)
        
        this.state = {
            name: '',
            description: ''
        }


    }

    render() {
        return(
            <div>
                <Link to='/wizard/wizard2'><button>Next Step</button></Link>
            </div>
        )
    }
}

function mapStateToProps(state) {
  

    return {
        state
    };
}

export default connect(mapStateToProps, {updatePlace}) (Wizard1);