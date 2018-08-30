import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import './Wizard.css';

import { newImage } from '../../dux/reducer';


class Wizard3 extends Component {
    constructor(props) {
        super(props)
        
        this.state = {
            image: '',
            picture: []
        }

    }

    addImage = (e) => {
        this.props.newImage(e.target.value)
    }

    render() {
        return(
            <section className='wiz-box'>
            <div className='add-cancel'>
                <h1 id='add-listing'>Add new listing</h1>
                <Link to='/dash'><button id='cancel'>Cancel</button></Link>
            </div>
                <div className='steps'>
                    <p>Step 3</p>
                </div>
                <div className='dots'>
                    <img className='the-dots' src={require("./../../icons/step_completed.png")} alt="current"/>
                    <img className='the-dots' src={require("./../../icons/step_completed.png")} alt="Step 2"/>
                    <img className='the-dots' src={require("./../../icons/step_active.png")} alt="Step 3"/>
                    <img className='the-dots' src={require("./../../icons/step_inactive.png")} alt="Step 4"/>
                    <img className='the-dots' src={require("./../../icons/step_inactive.png")} alt="Step 5"/>
                </div>
                <div className='preview-img'>
                    <img src={this.state.image} alt="preview"/>
                </div>
                <div className='img-box' >
                    <p className='texts' id='img-url' >Image URL</p>
                    <input className='input-boxes' id='input-img' type="text" onChange={this.addImage} value={this.props.image} placeholder='url...'/>
                </div>
            <div id='prev-next-box3'>
                <Link to='/wizard/wizard2'>
                    <button className='next-step' id='prev-next-prev'>
                        Previous Step
                    </button>
                </Link>
                <Link to='/wizard/wizard4'>
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
        image: reduxState.image
    };
}

export default connect(mapStateToProps, {newImage}) (Wizard3);