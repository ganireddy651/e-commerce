import React, {useState, useEffect, useContext} from 'react'
import Header from '../Header'
import Products from '../Products'
import CartContext from '../../context/CartContext'
import './index.css'

const Ecommerce = () => {
  const [data, setData] = useState([])
  const [isloading, setIsLoading] = useState(false)
  const {title} = data
  console.log(data.title, data.categories)

  const {isAdded} = useContext(CartContext)

  useEffect(() => {
    const getData = async () => {
      setIsLoading(true)
      const response = await fetch(
        'https://run.mocky.io/v3/12531624-c691-4a5b-9625-4490a7cff00d',
      )
      const fetchedData = await response.json()
      setIsLoading(false)
      setData(fetchedData)
    }
    getData()
  }, [])

  return (
    <>
      <Header title={title} isloading={isloading} />
      <div className="home-container">
        {data.length === 0 ? (
          <p>Loading...</p>
        ) : (
          <div className="sidebar-container">
            {data.categories.map(each => (
              <p key={each.name}>{each.name}</p>
            ))}
          </div>
        )}
        <div className="products">
          {data.length === 0 ? (
            <p>Loading...</p>
          ) : (
            <div className="products-container">
              {data.categories.map(each => (
                <>
                  <h3 key={each.name}>{each.name}</h3>
                  <div className="products-list">
                    {each.products.map(eachProduct => (
                      <Products item={eachProduct} key={eachProduct.id} />
                    ))}
                  </div>
                </>
              ))}
            </div>
          )}
        </div>
      </div>
    </>
  )
}

export default Ecommerce
