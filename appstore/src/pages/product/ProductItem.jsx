import React from 'react'
import { useSelector } from 'react-redux'

export default function productItem(props) {
  let {dataProduct} = useSelector(state=>state.shopReducer)
  return (
    <div className='card'>
      <img src='https://i.pravatar.cc/150?img=3'/>
        <div className='card-body'>
            <h2>Product</h2>
            <p>1000</p>
            <button className='btn btn-secondary'><i className="fa fa-cart-arrow-down"></i>add to cart</button>
            
        </div>
    </div>
  )
}

