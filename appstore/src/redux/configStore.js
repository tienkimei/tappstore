import {configureStore} from '@reduxjs/toolkit'
import ShopReducer from './reducer/ShopReducer'

export const store= configureStore({
    reducer:{
        // stateNumber: ((state=1) => { return state })
        ShopReducer:ShopReducer
    }
})

