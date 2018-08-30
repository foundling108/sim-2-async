import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import './Wizard.css';

import { newDesiredRent } from '../../dux/reducer';


class Wizard5 extends Component {
    constructor(props) {
        super(props)
        
        this.state = {
            desired_rent: '',
            recommended: this.props.monthly_mortgage * 1.25
        }

        this.recoRent = this.recoRent.bind(this);
    }

    addDesiredRent = (e) => {
        this.props.newDesiredRent(e.target.value)
    }

    recoRent() {
        Math.floor((Math.random() *1200) + 500)
    }

    render() {
        return(
        <section className='wiz-box'>
            <div className='add-cancel'>
                <h1 id='add-listing'>Add new listing</h1>
                <Link to='/dash'><button id='cancel'>Cancel</button></Link>
            </div>
            <div className='steps'>
                <p>Step 5</p>
            </div>
            <div className='dots'>
                <img className='the-dots' src={require("./../../icons/step_completed.png")} alt="current"/>
                <img className='the-dots' src={require("./../../icons/step_completed.png")} alt="Step 2"/>
                <img className='the-dots' src={require("./../../icons/step_completed.png")} alt="Step 3"/>
                <img className='the-dots' src={require("./../../icons/step_completed.png")} alt="Step 4"/>
                <img className='the-dots' src={require("./../../icons/step_active.png")} alt="Step 5"/>
            </div>
            <div className='name-desc-box'>
                <p className='texts' id='reco-rent' value={this.props.monthly_mortgage * 1.25} >Recommended Rent ${this.props.monthly_mortgage * 1.25}</p>
                <p className='texts' id='des-rent'>Desired Rent</p>
                <input className='input-boxes' id='input-mort' type="text" onChange={this.addDesiredRent} value={this.props.desired_rent}/>
            </div>
            <div id='prev-next-box'>
                <Link to='/wizard/wizard4'>
                    <button className='next-step' id='prev-next-prev'>
                        Previous Step
                    </button>
                </Link>
                <Link to='/dash'>
                    <button className='next-step' id='prev-next-comp'>
                        Complete
                    </button>
                </Link>
            </div>
        </section>
        )
    }
}

function mapStateToProps(reduxState) {
    return {
        desired_rent: reduxState.desired_rent
    };
}

export default connect(mapStateToProps, { newDesiredRent }) (Wizard5);