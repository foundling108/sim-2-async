const initialState = {
    user: {},
    username: '',
    password: '',
    name: '',
    description: '',
    address: '',
    city: '',
    state: '',
    zip: '',
    image: '',
    loan_amount: '',
    monthly_mortgage: '',
    desired_rent: ''
  }
  
  const USER_DATA = 'USER_DATA';
  const PLACE_INFO = 'PLACE_INFO';
  const IMAGE_INFO = 'IMAGE_INFO';
  const LOGOUT = 'LOGOUT';
  
  export default function (state = initialState, action) {
    let { type, payload } = action;
    switch (type) {
      case USER_DATA:
        return Object.assign({}, state, { user: payload });
      case PLACE_INFO:
        return Object.assign( {}, state, {placeObj: payload} );
      case IMAGE_INFO:
        return Object.assign( {}, state, {imageURL: payload} );
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

  export function updatePlace(placeObj){
    return {
    type: PLACE_INFO,
    payload: placeObj
    }
  }

export function updateImage(imageURL){
    return {
    type: IMAGE_INFO,
    payload: imageURL
    }
  }

  export function logout() {
    return {
      type: LOGOUT
    }
  }