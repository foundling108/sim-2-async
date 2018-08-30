import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import './Wizard.css';

import { newLoanAmount, newMonthlyMortgage } from '../../dux/reducer';


class Wizard4 extends Component {
    constructor(props) {
        super(props)
        
        this.state = {
            loan_amount: '',
            monthly_mortgage: ''
        }
    }

    addLoanAmount = (e) => {
        this.props.newLoanAmount(e.target.value)
    }

    addMonthlyMortgage = (e) => {
        this.props.newMonthlyMortgage(e.target.value)
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
                <input className='input-boxes' id='input-name' type="text" onChange={this.addLoanAmount} value={this.props.loan_amount}/>
                <p className='texts'>Monthly Mortgage</p>
                <input className='input-boxes' id='input-mort' type="text" onChange={this.addMonthlyMortgage} value={this.props.monthly_mortgage}/>
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

function mapStateToProps(reduxState) {
    return {
        loan_amount :reduxState.loan_amount,
        monthly_mortgage: reduxState.monthly_mortgage
    };
}

export default connect(mapStateToProps, {newLoanAmount, newMonthlyMortgage}) (Wizard4);