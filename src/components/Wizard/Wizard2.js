import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import './Wizard.css';

import { updatePlace } from '../../dux/reducer';


class Wizard2 extends Component {
    constructor(props) {
        super(props)
        
        this.state = {
            address: '',
            city: '',
            state: '',
            zip: ''
        }


    }

    render() {
        return(
            <div>
                <Link to='/wizard/wizard1'><button>Previous Step</button></Link>
                <Link to='/wizard/wizard3'><button>Next Step</button></Link>
            </div>
        )
    }
}

function mapStateToProps(state) {
  

    return {
        state
    };
}

export default connect(mapStateToProps, {updatePlace}) (Wizard2);