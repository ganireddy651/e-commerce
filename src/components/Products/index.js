import {useContext} from 'react'
import CartContext from '../../context/CartContext'
import './index.css'

const Products = props => {
  const {isAdded, increament, decreament} = useContext(CartContext)
  const {item} = props
  const {id, image, name, price, weight} = item

  const onIncrease = () => {
    increament(id)
  }
  const onDecrease = () => {
    decreament(id)
  }

  return (
    <div className="list-item">
      <div className="image-container">
        <img src={image} alt="product" className="product-image" />
        <div className="icon">
          {isAdded ? (
            <span onClick={onDecrease}>-</span>
          ) : (
            <span onClick={onIncrease}>+</span>
          )}
        </div>
      </div>
      <p className="price">{price}</p>
      <p>{name}</p>
      <span>{weight}</span>
    </div>
  )
}

export default Products
