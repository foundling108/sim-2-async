import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import './Wizard.css';

import { updateProperty } from '../../dux/reducer';


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
            <section className='wiz-box'>
                <div className='add-cancel'>
                    <h1 id='add-listing'>Add new listing</h1>
                    <Link to='/dash'><button id='cancel'>Cancel</button></Link>
                </div>
                    <div className='steps'>
                        <p>Step 1</p>
                    </div>
                    <div className='dots'>
                        <img className='the-dots' src={require("./../../icons/step_active.png")} alt="current"/>
                        <img className='the-dots' src={require("./../../icons/step_inactive.png")} alt="Step 2"/>
                        <img className='the-dots' src={require("./../../icons/step_inactive.png")} alt="Step 3"/>
                        <img className='the-dots' src={require("./../../icons/step_inactive.png")} alt="Step 4"/>
                        <img className='the-dots' src={require("./../../icons/step_inactive.png")} alt="Step 5"/>
                    </div>
                    <div className='name-desc-box'>
                        <p className='texts' id='prop-name'>Property Name</p>
                        <input className='input-boxes' id='input-name' type="text"/>
                        <p className='texts'>Property Description</p>
                        <input className='input-boxes' id='input-desc' type="text"/>
                    </div>
                <div id='next-box1'>
                    <Link to='/wizard/wizard2'>
                        <button className='next-step'>
                            Next Step
                        </button>
                    </Link>
                </div>
            </section>
        )
    }
}

function mapStateToProps(state) {
  

    return {
        state
    };
}

export default connect(mapStateToProps, {updateProperty}) (Wizard1);