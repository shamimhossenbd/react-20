import { createSlice } from '@reduxjs/toolkit'

  const initialState = {
    product: null,
    cart:localStorage.getItem("cart") ? JSON.parse(localStorage.getItem("cart")) : [],
   }

export const productSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    productReducer: (state,action) => {
      
      state.product = action.payload;
    },
    filterProductReducer: (state,action) => {
      
      state.product = action.payload;
     
    },
    removeProductReducer: (state,action) => {
      
      state.cart.splice(action.payload.id, 1);
      localStorage.setItem("cart", JSON.stringify([...state.cart]));
     
    },
    cartReducer: (state,action) => {
      let findIndex = state.cart.findIndex((item) => item.id === action.payload.id)
      if(findIndex === -1){
       
      state.cart = [...state.cart , action.payload];
      localStorage.setItem("cart", JSON.stringify([...state.cart]));
      }else{
        console.log("data ase")
      }
      
    },
    productQuantityUpdate: (state, action) => {
      if (action.payload.actionName == "increment") {
        
        state.cart[action.payload.id].qty++
        localStorage.setItem("cart", JSON.stringify([...state.cart]));
      } else if(state.cart[action.payload.id].qty === -0) {
        console.log(notification.message);
      } else {
         state.cart[action.payload.id].qty-- 
        localStorage.setItem("cart", JSON.stringify([...state.cart]));
      }
    }
   
  },
})


export const { productReducer ,filterProductReducer , cartReducer,removeProductReducer, productQuantityUpdate  } = productSlice.actions

export default productSlice.reducer