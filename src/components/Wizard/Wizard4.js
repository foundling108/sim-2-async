import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import './Wizard.css';

import { updateProperty } from '../../dux/reducer';


class Wizard4 extends Component {
    constructor(props) {
        super(props)
        
        this.state = {
            loan_amount: '',
            monthly_mortgage: ''
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
                <p>Step 4</p>
            </div>
            <div className='dots'>
                <img className='the-dots' src={require("./../../icons/step_completed.png")} alt="current"/>
                <img className='the-dots' src={require("./../../icons/step_completed.png")} alt="Step 2"/>
                <img className='the-dots' src={require("./../../icons/step_completed.png")} alt="Step 3"/>
                <img className='the-dots' src={require("./../../icons/step_active.png")} alt="Step 4"/>
                <img className='the-dots' src={require("./../../icons/step_inactive.png")} alt="Step 5"/>
            </div>
            <div className='name-desc-box'>
                <p className='texts' id='prop-name'>Loan Amount</p>
                <input className='input-boxes' id='input-name' type="text"/>
                <p className='texts'>Monthly Mortgage</p>
                <input className='input-boxes' id='input-mort' type="text"/>
            </div>
            <div id='prev-next-box'>
                <Link to='/wizard/wizard3'>
                    <button className='next-step' id='prev-next-prev'>
                        Previous Step
                    </button>
                </Link>
                <Link to='/wizard/wizard5'>
                    <button className='next-step' id='prev-next-next'>
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

export default connect(mapStateToProps, {updateProperty}) (Wizard4);