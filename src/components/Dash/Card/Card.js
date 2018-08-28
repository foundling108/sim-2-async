import React from 'react';
// import connect from 'react-redux';

function Card(props){
    return(
        <section className='Cards'>
            <div className='card-img-box'>
            <img id='card-img' src="" alt="house"/>
            </div>
            <div>
                <h4>Name</h4>
                <p>description</p>
            </div>
            <div>
                <h5>Loan</h5>
                <h5>Monthly Mortgage</h5>
                <h5>Recommended Rent</h5>
                <h5>Desired Rent</h5>
                <h5>Address</h5>
                <h5>City</h5>
                <h5>State</h5>
                <h5>Zip</h5>
            </div>
            <div>
                <img src={require('./../../../icons/delete_icon.png')} alt=""/>
            </div>
        </section>
    )
}

export default (Card);