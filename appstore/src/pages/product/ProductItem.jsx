import React from 'react'

export default function ProductItem(props) {
  const {item}=props
  return (
    <div className='card'>
      <img src={item.image}/>
        <div className='card-body'>
            <h2>{item.title}</h2>
            <button className='btn btn-secondary'><i className="fa fa-cart-arrow-down"></i>add to cart</button>     
        </div>
    </div>
  )
}

