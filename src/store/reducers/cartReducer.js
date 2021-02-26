export const cartReducer = (
    state = { cartItems: [], shippingAddress: {} },
    action
  ) => {
    switch (action.type) {
      case 'CART_ADD_ITEM':
        const item = action.payload
        
        const existItem = state.cartItems.find((x) => x.product === item.product)
  
        if (existItem) {
          const currentItem=state.cartItems.map((x) =>
              x.product === existItem.product ? item : x)
          return {
            ...state,
            cartItems: [...state.cartItems,currentItem[0]
            ]
          }
        } else {
          return {
            ...state,
            cartItems: [...state.cartItems, item],
          }
        }
      case 'CART_REMOVE_ITEM':
        return {
          ...state,
          cartItems: state.cartItems.filter((x) => {if(x._id !== action.payload._id){
            return(x)
          }}),
        }
      case 'CART_SAVE_SHIPPING_ADDRESS':
        return {
          ...state,
          shippingAddress: action.payload,
        }
      case 'CART_SAVE_PAYMENT_METHOD':
        return {
          ...state,
          paymentMethod: action.payload,
        }
      case 'CART_CLEAR_ITEMS':
        return {
          ...state,
          cartItems: [],
        }
      default:
        return state
    }
  }