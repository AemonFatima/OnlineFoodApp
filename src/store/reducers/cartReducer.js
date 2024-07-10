const initialState = {
    cartItems: JSON.parse(localStorage.getItem('cartItems')) || []
  };
  
  const cartReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'ADD_TO_CART':
        const item = action.payload;
        const existItem = state.cartItems.find(x => x.id === item.id);
  
        if (existItem) {
          return {
            ...state,
            cartItems: state.cartItems.map(x =>
              x.id === existItem.id ? item : x
            )
          };
        } else {
          return {
            ...state,
            cartItems: [...state.cartItems, item]
          };
        }
      case 'REMOVE_FROM_CART':
        return {
          ...state,
          cartItems: state.cartItems.filter(x => x.id !== action.payload)
        };
      case 'INCREASE_QUANTITY':
        return {
          ...state,
          cartItems: state.cartItems.map(x =>
            x.id === action.payload ? { ...x, quantity: x.quantity + 1 } : x
          )
        };
      case 'DECREASE_QUANTITY':
        return {
          ...state,
          cartItems: state.cartItems.map(x =>
            x.id === action.payload ? { ...x, quantity: x.quantity - 1 } : x
          )
        };
      default:
        return state;
    }
  };
  
  export default cartReducer;
  