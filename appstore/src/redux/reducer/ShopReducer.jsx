//rxslice

import { createSlice } from '@reduxjs/toolkit'

//state default
const initialState = {
 cart:[{
  id: 1,
  name:'product',
  image:'https://i.pravatar.cc/150?img=3',
  price:1000,
  quantity:1
 }],
 dataProduct:[]
}

const ShopReducer = createSlice({
  name: 'ShopReducer',
  initialState,
  reducers: {}
});

export const {} = ShopReducer.actions

export default ShopReducer.reducer