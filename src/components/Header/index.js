import React, {useContext} from 'react'
import {BsCart} from 'react-icons/bs'
import CartContext from '../../context/CartContext'
import './index.css'

const Header = props => {
  const {title, isloading} = props
  console.log(title)

  const {count} = useContext(CartContext)

  const appName = isloading ? 'E-commerce' : title

  return (
    <div className="header-container">
      <span className="main-heading">{appName}</span>
      <div className="cart-container">
        <div>
          <div className="cart">
            <BsCart className="cart-icon" />
            <span className="count">{count}</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header
