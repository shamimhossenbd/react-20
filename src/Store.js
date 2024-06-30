import { configureStore } from '@reduxjs/toolkit'
import productSlice from './Slices/productSlice'
import userSlice from './Slices/userSlice'


export const store = configureStore({
  reducer: {
    allProduct: productSlice,
    userLoginIn: userSlice,
  },
})


