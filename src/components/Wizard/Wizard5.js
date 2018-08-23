import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import './Wizard.css';

import { updatePlace } from '../../dux/reducer';


class Wizard5 extends Component {
    constructor(props) {
        super(props)
        
        this.state = {
            desired_rent: ''
        }


    }

    render() {
        return(
            <div>
                <Link to='/wizard/wizard4'><button>Next Step</button></Link>
                <Link to='/dash'><button>Complete</button></Link>
            </div>
        )
    }
}

function mapStateToProps(state) {
  

    return {
        state
    };
}

export default connect(mapStateToProps, {updatePlace}) (Wizard5);