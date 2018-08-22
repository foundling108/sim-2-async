const initialState = {
    user: {},
    username: '',
    password: ''
  }
  
  const USER_DATA = 'USER_DATA';
  const LOGOUT = 'LOGOUT';
  
  export default function (state = initialState, action) {
    let { type, payload } = action;
    switch (type) {
      case USER_DATA:
        return Object.assign({}, state, { user: payload });
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

  export function logout() {
    return {
      type: LOGOUT
    }
  }