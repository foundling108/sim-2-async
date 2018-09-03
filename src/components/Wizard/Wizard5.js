import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import axios from 'axios';
import './Wizard.css';

import { newDesiredRent, updateProperty } from '../../dux/reducer';


class Wizard5 extends Component {
    constructor(props) {
        super(props)
        
        this.state = {

            desired_rent: '',
            recommended: this.props.monthly_mortgage * 1.25
        }

        this.createProperty = this.createProperty.bind(this);
    }

    addDesiredRent = (e) => {
        this.props.newDesiredRent(e.target.value)
    }

    createProperty() {
        const { recommended } = this.state;
        let { name, description, address, city, state, zip, image, loan_amount, monthly_mortgage, desired_rent } = this.props;

        let content = {
            name: name, 
            description: description, 
            address: address,
            city: city, 
            state: state, 
            zip: zip, 
            image: image, 
            loan_amount: loan_amount, 
            monthly_mortgage: monthly_mortgage, 
            desired_rent: desired_rent,
            recommended_rent: recommended
        }

        axios.post('/api/properties', content)
                  .then(res => {})
                  .catch(err => console.log(err))
            this.props.updateProperty()
            this.props.history.push('/dash')


    }



    render() {
        const { newDesiredRent } = this.props;
            console.log(this.props.monthly_mortgage)
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
                <input className='input-boxes' id='input-mort' type="text" onChange={(e) => newDesiredRent(e.target.value)} value={this.props.desired_rent}/>
            </div>
            <div id='prev-next-box'>
                <Link to='/wizard/wizard4'>
                    <button className='next-step' id='prev-next-prev'>
                        Previous Step
                    </button>
                </Link>

                    <button className='next-step' id='prev-next-comp' onClick={this.createProperty}>
                        Complete
                    </button>

            </div>
        </section>
        )
    }
}

function mapStateToProps(reduxState) {
    return {
        name: reduxState.name,
        description: reduxState.description,
        address: reduxState.address,
        city: reduxState.city,
        state: reduxState.state,
        zip: reduxState.zip,
        image: reduxState.image,
        loan_amount :reduxState.loan_amount,
        monthly_mortgage: reduxState.monthly_mortgage,
        desired_rent: reduxState.desired_rent
    };
}

export default connect(mapStateToProps, { newDesiredRent, updateProperty }) (Wizard5);