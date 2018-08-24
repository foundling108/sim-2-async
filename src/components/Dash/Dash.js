import React, {Component} from 'react';
import { Link } from 'react-router-dom';
// import axios from 'axios';
import { getUserData } from './../../dux/reducer';
import { connect } from 'react-redux';
import './Dash.css';

class Dash extends Component {
    constructor(props) {
        super(props);

        this.state = {
            properties: []
        }
    }

    // componentDidMount() {
    //     axios.get('/api/auth/getUser')
    //     .then( res => {
    //         if( !res.data ) {
    //             this.props.history.push('/');
    //         }
    //     })
    // }


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
                <div>
                    {/* If (has content) {
                        display: content
                    } else {
                        display: null
                    } */}
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