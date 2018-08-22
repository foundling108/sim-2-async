import React, {Component} from 'react';
// import { Link } from 'react-router-dom';
// import axios from 'axios';
import { getUserData } from './../../dux/reducer';
import { connect } from 'react-redux';
import './Home.css';

class Home extends Component {
    constructor(props) {
        super(props);

        this.state = {
            username: ''
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

        <div>
            Dash
        </div>

        )
    }
}

function mapStateToProps(state) {
    return {
        user: state.user
    };
}

export default connect(mapStateToProps, { getUserData }) (Home);