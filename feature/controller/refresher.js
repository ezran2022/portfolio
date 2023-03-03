import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: [],
}

export const refresher = createSlice({
  name:'refresh',  
  initialState,
  reducers: {
    getdata: (state,action) => {
      state.value = action.payload 
    },
    
  },
})

// Action creators are generated for each case reducer function
export const { getdata } = refresher.actions

export default refresher.reducer