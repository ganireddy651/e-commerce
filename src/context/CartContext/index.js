import React from 'react'

const CartContext = React.createContext({
  count: 0,
  increament: () => {},
  decreament: () => {},
  isAdded: false,
})

export default CartContext
