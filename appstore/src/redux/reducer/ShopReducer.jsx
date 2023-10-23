//rxslice

import { createSlice } from '@reduxjs/toolkit'
import axios from 'axios'
//state default
const initialState = {
 cart:[{
  id: 1,
  title:'product',
  image:'https://i.pravatar.cc/150?img=2',
  price:1000,
  quantity:1
 }],
 dataProduct:[
  
 ]
}

const ShopReducer = createSlice({
  name: 'ShopReducer',
  initialState,
  reducers: {
    //xu ly
    getProductAPI: (state,action)=>{
      console.log(action)
      state.dataProduct = action.data;
      
      // không cần return, vì redux tookit đã setup sẵn
      // return {...state}
    }
  }
});

export const {} = ShopReducer.actions

export default ShopReducer.reducer

//action thunk cập nhật cho reducer
export const getAllProductApi= () => { 
  return async (dispatch,getstate) => { 
    //call api
    try {
      const result = await axios({
        url:'https://fakestoreapi.com/products',
        method:'GET'
      });
      //xử lý dispatch lên reducer
      //type:'name of reducer/object of reducer'
      dispatch({
        type:'ShopReducer/getProductAPI',
        data: result.data.content
      })
    } catch (error) {
      console.log(error)
    }
   }
 }
 