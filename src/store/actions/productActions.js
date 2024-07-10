import axios from 'axios';

export const fetchProducts = () => async (dispatch) => {
  const response = await axios.get('https://dummyjson.com/products');
  dispatch({ type: 'SET_PRODUCTS', payload: response.data.products });
};
