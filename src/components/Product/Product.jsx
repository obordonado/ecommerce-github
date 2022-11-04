import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { productById } from '../../functions/functions'
import Header from '../Header/Header'
import './Product.scss'

const Product = () => {
  const [product, setProduct] = useState(null)

  const params = useParams()

  useEffect(()=>{

    productById(params.id, setProduct)

  },[])


  return (
    <>
      <div className="individual">
        {product != null ? (
          <div >
            <div className="card">
              <img src={product.img_url} className="card-img-top" />

              <div className="card-body">
                <a href={`/product/${product.id}`} className="btn btn-primary">
                  {product.brand}
                </a>
                <h5 className="card-title">Flavour : {product.name}</h5>
                <h5 className="card-price">Price {product.price}0€</h5>
              </div>
            </div>

            {/* <img src={product.img_url}/> */}
            {/* <h4>Product id {params.id}</h4> */}
            {/* <div>Brand : {product.brand}</div>
          <div>Flavour : {product.name}</div>
          <div>Price : {product.price} €</div> */}
          </div>
        ) : (
          "Product does not exist."
        )}
      </div>
    </>
  );
}

export default Product