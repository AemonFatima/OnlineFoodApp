import { combineReducers } from 'redux';
import productReducer from './productReducer';
import cartReducer from './cartReducer';
import authReducer from './authReducer';

const rootReducer = combineReducers({
  products: productReducer,
  cart: cartReducer,
  auth: authReducer
});

export default rootReducer;
