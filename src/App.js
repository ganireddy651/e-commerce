import {useState} from 'react'
import Ecommerce from './components/Ecommerce'
import CartContext from './context/CartContext'
import './App.css'

const App = () => {
  const [count, setCount] = useState(0)
  const [isAdded, setIsAdded] = useState(false)

  const increament = () => {
    setCount(count + 1)
  }

  const decreament = () => {
    setCount(count - 1)
  }

  return (
    <CartContext.Provider
      value={{count, increament, decreament, isAdded, setIsAdded}}
    >
      <Ecommerce />
    </CartContext.Provider>
  )
}

export default App
