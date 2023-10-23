import React from 'react'
import {useSelector} from 'react-redux'

export default function Carts(props) {
    const {cart} = useSelector(state=>state.ShopReducer)
  return (
    <div>
        <h3>Cart</h3>
        <table className='table'>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>title</th>
                    <th>image</th>
                    <th>quantity</th>
                    <th>total</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                {cart.map((item,index) => {    
                   return(
                    <tr>
                    <td>{item.id}</td>
                    <td>{item.title}</td>
                    <td><img src={item.image}/></td>
                    <td>
                        <button className='btn btn-danger'>delete</button>
                    </td>
                    </tr> 
                   )               
                     })}
                
            </tbody>
        </table>
    </div>
  )
}

//00:24:38