import React from 'react'
import {useSelector} from 'react-redux'

export default function Carts(props) {
    const {cart} = useSelector(state=>state.shopReducer)
  return (
    <div>
        <h3>Cart</h3>
        <table className='table'>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>name</th>
                    <th>image</th>
                    <th>price</th>
                    <th>quantity</th>
                    <th>total</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                {cart.map((item,index) => {
                    <tr>
                        <td>{item.id}</td>
                        <td>{item.name}</td>
                        <td><img src={item.image}/></td>
                        <td>{item.price}</td>
                        <td>{item.quantity}</td>
                        <td>{item.quantity*item.price}</td>
                        <td>
                            <button className='btn btn-danger'>delete</button>
                        </td>
                    </tr>
                     })}
                
            </tbody>
        </table>
    </div>
  )
}
