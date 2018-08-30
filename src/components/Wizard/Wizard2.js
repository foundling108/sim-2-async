import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import './Wizard.css';

import { newAddress, newCity, newState, newZip } from '../../dux/reducer';


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

    addAddress = (e) => {
        this.props.newAddress(e.target.value)
    }

    addCity = (e) => {
        this.props.newCity(e.target.value)
    }

    addState = (e) => {
        this.props.newState(e.target.value)
    }

    addZip = (e) => {
        this.props.newZip(e.target.value)
    }

    render() {
        return(
            <section className='wiz-box'>
            <div className='add-cancel'>
                <h1 id='add-listing'>Add new listing</h1>
                <Link to='/dash'><button id='cancel'>Cancel</button></Link>
            </div>
                <div className='steps'>
                    <p>Step 2</p>
                </div>
                <div className='dots'>
                    <img className='the-dots' src={require("./../../icons/step_completed.png")} alt="current"/>
                    <img className='the-dots' src={require("./../../icons/step_active.png")} alt="Step 2"/>
                    <img className='the-dots' src={require("./../../icons/step_inactive.png")} alt="Step 3"/>
                    <img className='the-dots' src={require("./../../icons/step_inactive.png")} alt="Step 4"/>
                    <img className='the-dots' src={require("./../../icons/step_inactive.png")} alt="Step 5"/>
                </div>
                <div className='address-box' >
                    <p className='texts' id='address' >Address</p>
                    <input className='input-boxes' id='input-add' type="text" onChange={this.addAddress} value={this.props.address}/>
                </div>
                <div className='city-state-box' >
                    <p className='texts' id='city' >City</p>
                    <p className='texts' id='state' >State</p>
                </div>
                <div className='city-state-box' >
                    <input className='input-boxes' id='input-city' type="text" onChange={this.addCity} value={this.props.city}/>
                    <input className='input-boxes' id='input-state' type="text" onChange={this.addState} value={this.props.state}/>
                </div>
                <div className='zip-box' >
                    <p className='texts' id='zip' >Zip</p>
                    <input className='input-boxes' id='input-zip' type="text" onChange={this.addZip} value={this.props.zip}/>
                </div>
            <div id='prev-next-box'>
                <Link to='/wizard/wizard1'>
                    <button className='next-step' id='prev-next-prev'>
                        Previous Step
                    </button>
                </Link>
                <Link to='/wizard/wizard3'>
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
        address: reduxState.address,
        city: reduxState.city,
        state: reduxState.state,
        zip: reduxState.zip
    };
}

export default connect(mapStateToProps, { newAddress, newCity, newState, newZip }) (Wizard2);