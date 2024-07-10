// store/reducers/authReducer.js
const initialState = {
    isAuthenticated: false,
    error: null,
  };
  
  const authReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'LOGIN_SUCCESS':
        return {
          ...state,
          isAuthenticated: true,
          error: null,
        };
      case 'LOGIN_FAILURE':
        return {
          ...state,
          isAuthenticated: false,
          error: 'Invalid credentials',
        };
      default:
        return state;
    }
  };
  
  export default authReducer;
  