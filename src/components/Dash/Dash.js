import React, {Component} from 'react';
import { Link } from 'react-router-dom';
// import axios from 'axios';
import { getUserData } from './../../dux/reducer';
import { connect } from 'react-redux';
// import Card from './Card/Card';
import './Dash.css';

class Dash extends Component {
    constructor(props) {
        super(props);

        this.state = {
            properties: []
        }
    }


    render() {
        return(

            <section className='dash-box'>
                <div className='add-box'>
                    <Link to='/wizard/wizard1'>
                        <button className='add-button'>
                            Add new property
                        </button>
                    </Link>
                </div>
                <div className='properties'>
                    <p className='rent-text'>
                    List properties with "desired rent" greater than: $
                    </p>
                    <input className='rent-input' type="text" placeholder='0'/>
                    <button className='fil-res' id='filter'>Filter</button>
                    <button className='fil-res' id='reset'>Reset</button>
                </div>
                <hr/>
                <div className='h3-div'>
                    <h3>Home Listings</h3>
                </div>
                <div className='card-box'>
                    <Card/>
                </div>
            </section>

        )
    }
}

function mapStateToProps(state) {
    return {
        user: state.user
    };
}

export default connect(mapStateToProps, { getUserData }) (Dash);

function Card(props){
    return(
        <section className='cards'>
            <div className='card-img-box'>
            <img id='card-img' src="" alt="house"/>
            </div>
            <div className='name-desc-card-box'>
                <h5>Name</h5>
                <p>description</p>
            </div>
            <section className='h5-hr-box'>
                <div className='hr-box'>
                    <hr id='vertical-line'/>
                </div>
                <div className='h5-box'>
                    <h5>Loan</h5>
                    <h5>Monthly Mortgage</h5>
                    <h5>Recommended Rent</h5>
                    <h5>Desired Rent</h5>
                    <h5>Address</h5>
                    <h5>City</h5>
                    <h5>State</h5>
                    <h5>Zip</h5>
                </div>
            </section>
            <div className='lil-x' >
                <img src={require('./../../icons/delete_icon.png')} alt=""/>
            </div>
        </section>
    )
}