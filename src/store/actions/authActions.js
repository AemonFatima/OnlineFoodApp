// store/actions/authActions.js
export const login = (username, password) => {
    return (dispatch) => {
      const staticUsername = 'user';
      const staticPassword = 'password';
  
      if (username === staticUsername && password === staticPassword) {
        dispatch({ type: 'LOGIN_SUCCESS' });
      } else {
        dispatch({ type: 'LOGIN_FAILURE' });
      }
    };
  };
  