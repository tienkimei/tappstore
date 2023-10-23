import React, { useEffect } from 'react'
import ProductItem from './ProductItem'
import Carts from './Carts'
import { useSelector } from 'react-redux/es/hooks/useSelector'
import { getAllProductApi } from '../../redux/reducer/ShopReducer'
import { useDispatch } from 'react-redux'

export default function Products(props) {
  let {dataProduct} = useSelector(state=>state.ShopReducer)
  const dispatch = useDispatch()
  useEffect(() => { 
  const actionThunk = getAllProductApi(); 
  // dispatch action to thunk
  dispatch(actionThunk)

 },[])

  return (
    <div className='container'>
      <h3>hello 123</h3>
      <Carts/>
      <div className='row'>
      {dataProduct.map((item,index)=>(
          <div className='col-md-2' key={index}>
          <ProductItem item={item}/>
          </div>
        ))}
      </div>
        
      
      
    </div>
  )
}
