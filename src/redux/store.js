import { configureStore } from '@reduxjs/toolkit';
//import cartReducer from './cartSlice';
import modalReducer from './ModalSlice';
import cartReducer from './thunk';

const store = configureStore({
    reducer: {
        cart: cartReducer,
        modal: modalReducer
    }
});

export default store;