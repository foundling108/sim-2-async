import axios from 'axios';

const initialState = {
    user: {},
    username: '',
    password: '',
    properties: [],
    name: '',
    description: '',
    address: '',
    city: '',
    state: '',
    zip: '',
    image: '',
    loan_amount: '',
    monthly_mortgage: '',
    desired_rent: '',
    recommended_rent: ''
  }
  
  const USER_DATA = 'USER_DATA';
  const UPDATE_USER = 'UPDATE_USER';
  const LOGOUT = 'LOGOUT';

  const GET_PROPERTIES = 'GET_PROPERTIES';
  const FILTER_PROPERTIES = 'FILTER_PROPERTIES';
  const UPDATE_PROPERTIES = 'UPDATE_PROPERTIES';
  const NAME = 'NAME';
  const DESCRIPTION = 'DESCRIPTION';
  const ADDRESS = 'ADDRESS';
  const CITY = 'CITY';
  const STATE = 'STATE';
  const ZIP = 'ZIP';
  const IMAGE = 'IMAGE';
  const LOAN_AMOUNT = 'LOAN_AMOUT';
  const MONTHLY_MORTGAGE = 'MONTHLY_MORTGAGE';
  const DESIRED_RENT = 'DESIRED_RENT';
  const RECOMMENDED_RENT = 'RECOMMENDED_RENT';

  
  export default function (state = initialState, action) {
    let { type, payload } = action;
    switch (type) {
      case USER_DATA:
        return Object.assign({}, state, { user: payload });
      case UPDATE_USER:
        return { ...state, username: payload.username, password: payload.password };
      case GET_PROPERTIES + '_FULFILLED':
        return Object.assign( {}, state, { properties: payload } );
      case FILTER_PROPERTIES + '_FULFILLED':
        return Object.assign( {}, state, { properties: payload } );
      case UPDATE_PROPERTIES: 
        return Object.assign( {}, state, {name:'', description:'', address:'', city:'', state:'', zip:'', image:'', loan_amount:'', monthly_mortgage:'', desired_rent:''} )
      case NAME:
        return Object.assign( {}, state, { name: payload } );
      case DESCRIPTION:
        return Object.assign( {}, state, { description: payload } );
      case ADDRESS:
        return Object.assign( {}, state, { address: payload } );
      case CITY:
        return Object.assign( {}, state, { city: payload } );
      case STATE:
        return Object.assign( {}, state, { state: payload } );
      case ZIP:
        return Object.assign( {}, state, { zip: payload } );
      case IMAGE:
        return Object.assign( {}, state, { image: payload } );
      case LOAN_AMOUNT:
        return Object.assign( {}, state, { loan_amount: payload } );
      case MONTHLY_MORTGAGE:
        return Object.assign( {}, state, { monthly_mortgage: payload } );
      case DESIRED_RENT:
        return Object.assign( {}, state, { desired_rent: payload } );
      case RECOMMENDED_RENT:
        return Object.assign( {}, state, { recommended_rent: payload } ); 
      case LOGOUT:
        return initialState;
      default:
        return state;
    }
  }
  
  export function getUserData(user) {
    return {
      type: USER_DATA,
      payload: user
    };
  }

  export function updateUser(user) {
    return {
      type: UPDATE_USER,
      payload: user
    }
  }

  export function getProperties() {
    let properties = axios.get('/api/properties').then(res => res.data);
    return {
      type: GET_PROPERTIES,
      payload: properties
    }
  }

  export function filterProperties(rent) {
    let properties = axios.get(`/api/properties?rent=${rent}`).then(res => res.data);
    return {
      type: FILTER_PROPERTIES,
      payload: properties
    }
  }

  export function updateProperty(name, description, address, city, state, zip, image, loan_amount, monthly_mortgage, desired_rent){
    return {
    type: UPDATE_PROPERTIES,
    payload:[ name, description, address, city, state, zip, image, loan_amount, monthly_mortgage, desired_rent ]
    }
  }

  export function newName(name) {
    return {
      type: NAME,
      payload: name
    }
  }

  export function newDescription(description) {
    return {
      type: DESCRIPTION,
      payload: description
    }
  }

  export function newAddress(address) {
    return {
      type: ADDRESS,
      payload: address
    }
  }

  export function newCity(city) {
    return {
      type: CITY,
      payload: city
    }
  }

  export function newState(state) {
    return {
      type: STATE,
      payload: state
    }
  }

  export function newZip(zip) {
    return {
      type: ZIP,
      payload: zip
    }
  }

  export function newImage(image) {
    return {
      type: IMAGE,
      payload: image
    }
  }

  export function newLoanAmount(loan_amount) {
    return {
      type: LOAN_AMOUNT,
      payload: loan_amount
    }
  }

  export function newMonthlyMortgage(monthly_mortgage) {
    return {
      type: MONTHLY_MORTGAGE,
      payload: monthly_mortgage
    }
  }

  export function newDesiredRent(desired_rent) {
    return {
      type: DESIRED_RENT,
      payload: desired_rent
    }
  }

  export function newRecommendeRent(recommended_rent) {
    return {
      type: RECOMMENDED_RENT,
      payload: recommended_rent
    }
  }

  export function logout() {
    return {
      type: LOGOUT
    }
  }