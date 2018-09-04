import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { getUserData } from './../../dux/reducer';
import { connect } from 'react-redux';
// import Card from './Card/Card';
import './Dash.css';

class Dash extends Component {
    constructor(props) {
        super(props);

        this.state = {
            properties: [],
            filterify: 0,
            byAmount: 0
        }

        this.deleteCard = this.deleteCard.bind(this);
        this.filterByAmount = this.filterByAmount.bind(this);
        this.filterButton = this.filterButton.bind(this);
        this.resetButton = this.resetButton.bind(this);
    }

    componentDidMount() {
        axios.get('/api/properties')
        .then(res => {
            this.setState({
                properties: res.data
            })
        })
    }

    deleteCard(id) {
        axios.delete(`/api/properties/${id}`)
        .then(res => {
            this.setState({
                properties: res.data
            })
        })
    }

    filterByAmount(e) {
        this.setState({
            byAmount: e.target.value
        })
    }

    filterButton(){
        this.setState({
            filterify: this.state.byAmount
        })
    }

    resetButton() {
        this.setState({
            filterify: 0,
            byAmount: 0
        })
    }


    render() {
        const propertyDisplay = this.state.properties.filter( (cards, i) => {
            return cards.desired_rent > this.state.filterify ? true : false
        }).map( (el, i) => {
            if(el.name === null && el.description === null) {
                return(
                    null
                )
            } else {
                let calculateRec = el.monthly_mortgage * 1.25
                return(
                    <section className='cards' key={el.id}>
                    <div className='card-img-box'>
                        <img id='card-img' src={el.image} alt="house"/>
                    </div>
                    <div className='name-desc-card-box'>
                        <h5 id='name-h5'>Name {el.name}</h5>
                        <p>{el.description}</p>
                    </div>
                    <section className='h5-hr-box'>
                        <div className='hr-box'>
                            <hr id='vertical-line'/>
                        </div>
                        <div className='h5-box'>
                            <h5>Loan: {el.loan_amount}</h5>
                            <h5>Monthly Mortgage: {el.monthly_mortgage}</h5>
                            <h5>Recommended Rent: {calculateRec}</h5>
                            <h5>Desired Rent: {el.desired_rent}</h5>
                            <h5>Address: {el.address}</h5>
                            <h5>City: {el.city}</h5>
                            <h5>State: {el.state}</h5>
                            <h5>Zip: {el.zip}</h5>
                        </div>
                    </section>
                    <div className='lil-x' >
                        <img src={require('./../../icons/delete_icon.png')} alt="delete" onClick={() => this.deleteCard(el.id)}/>
                    </div>
                </section>
                )
            }
        } )
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
                    <input className='rent-input' type="text" placeholder='0' onChange={this.filterByAmount} value={this.state.byAmount}/>
                    <button className='fil-res' id='filter' onClick={this.filterButton}>Filter</button>
                    <button className='fil-res' id='reset' onClick={this.resetButton}>Reset</button>
                </div>
                <hr/>
                <div className='h3-div'>
                    <h3>Home Listings</h3>
                </div>
                <div className='card-box'>
                    { propertyDisplay }
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

// function Card(props){
//     let fullCard = this.props.properties.map( el => { 
//         return(
//             <section className='cards' key={el.id}>
//                 <div className='card-img-box'>
//                 <img id='card-img' src={el.image} alt="house"/>
//                 </div>
//                 <div className='name-desc-card-box'>
//                     <h5>Name {el.name}</h5>
//                     <p>{el.description}</p>
//                 </div>
//                 <section className='h5-hr-box'>
//                     <div className='hr-box'>
//                         <hr id='vertical-line'/>
//                     </div>
//                     <div className='h5-box'>
//                         <h5>Loan: {el.loan_amount}</h5>
//                         <h5>Monthly Mortgage: {el.monthly_mortgage}</h5>
//                         <h5>Recommended Rent: {el.recommend_rent}</h5>
//                         <h5>Desired Rent: {el.desired_rent}</h5>
//                         <h5>Address: {el.address}</h5>
//                         <h5>City: {el.city}</h5>
//                         <h5>State: {el.state}</h5>
//                         <h5>Zip: {el.zip}</h5>
//                     </div>
//                 </section>
//                 <div className='lil-x' >
//                     <img src={require('./../../icons/delete_icon.png')} alt=""/>
//                 </div>
//             </section>
//             )
//     })
// }