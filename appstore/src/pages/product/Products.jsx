import React from 'react'
import ProductItem from './ProductItem'
import Carts from './Carts'

export default function Products(props) {
  return (
    <div className='container'>
      <h3>hello</h3>
      <Carts/>
      <div className='row'>
        <div className='col-3'>
        <ProductItem/>
        </div>
        <div className='col-3'>
        <ProductItem/>
        </div>
        <div className='col-3'>
        <ProductItem/>
        </div>
        <div className='col-3'>
        <ProductItem/>
        </div>
      </div>
    </div>
  )
}
