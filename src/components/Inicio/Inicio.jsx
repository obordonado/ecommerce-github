import React, { useEffect, useState} from 'react';
import { allProducts } from '../../functions/functions';
import Header from '../Header/Header';
import './inicio.scss';


const Inicio = () => {

  const [products, setProducts] = useState(null)

  useEffect(()=>{
    allProducts(setProducts)
  },[])

  return (
    <div className='body'>


      {products != null
        ? products.map((product) => (
            <div key={product.id} className="inicio">
              <div className="card">
                <img src={product.img_url} className="card-img-top" />

                <div className="card-body">
                  <a href={`/product/${product.id}`} className="btn btn-primary">{product.brand}</a>                  
                  <h5 className="card-title">Flavour : {product.name}</h5>
                  <h5 className="card-price">Price {product.price}0€</h5>
                </div>

              </div>
            </div>
          ))
        : <div className="d-flex justify-content-center">
        <div className="spinner-border" role="status">
        <span className="sr-only">Loading...</span>        
        </div>
      </div>}
    </div>
  );
  }

export default Inicio