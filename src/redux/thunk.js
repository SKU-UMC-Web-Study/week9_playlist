import {createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';
import {createSlice} from '@reduxjs/toolkit';


export const fetchMusic = createAsyncThunk(
    'get/MusicStatus',
    async(_,thunkAPI) =>{
        try{
            const response = await axios.get(`http://localhost:8080/musics`)
            return response.data;
        } catch (error){
            return thunkAPI.rejectWithValue(error.response.data);
        }
        
    }
);
const cartSlice = createSlice({
    name: 'cart',
    initialState:{
        items:[],
        totalAmount:0,
        totalQuantity:0,
        loading:true,
        error: null

    },
    reducers:{
        increase: (state, action) => {
            const existingItem = state.items.find(item => item.id === action.payload.id);
            if (existingItem) {
              existingItem.amount += 1;
            }
          },
          decrease: (state, action) => {
            const existingItem = state.items.find(item => item.id === action.payload.id);
            if (existingItem) {
              if (existingItem.amount === 1) {
                state.items = state.items.filter(item => item.id !== action.payload.id);
              } else {
                existingItem.amount -= 1;
              }
            }
          },
          removeItem: (state, action) => {
            state.items = state.items.filter(item => item.id !== action.payload.id);
          },
          clearCart: (state) => {
            state.items = [];
            state.totalQuantity = 0;
            state.totalAmount = 0;
          },
          calculateTotals: (state) => {
            let totalQuantity = 0;
            let totalAmount = 0;
            state.items.forEach(item => {
              totalAmount += item.price * item.amount;
              totalQuantity += item.amount;
            });
            state.totalAmount = totalAmount;
            state.totalQuantity = totalQuantity;
          }
    },
    extraReducers:(builder)=>{
        builder
        .addCase(fetchMusic.pending,(state)=>{
            state.loading=true;
        })
        .addCase(fetchMusic.fulfilled, (state,action)=>{
            state.loading =false;
            state.items= action.payload;
            let totalQuantity = 0;
            let totalAmount = 0;
            state.items.forEach(item => {
            totalAmount += item.price * item.amount;
            totalQuantity += item.amount;
            });
            state.totalAmount = totalAmount;
            state.totalQuantity = totalQuantity;
        })
        .addCase(fetchMusic.rejected,(state,action)=>{
            state.status= false;
            state.error = action.payload;
            alert(`에러 발생~`);
        })
    }
})
export const { increase, decrease, removeItem, clearCart, calculateTotals } = cartSlice.actions;
export default cartSlice.reducer;