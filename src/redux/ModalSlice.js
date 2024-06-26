import { createSlice } from '@reduxjs/toolkit';


const initialState = {
  isOpen:false
};

export const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    modalOpen: (state) => {
        state.isOpen = true;
      },
      modalClose: (state) => {
        state.isOpen = false;
      },

    

    
  }
});

export const {modalOpen, modalClose } = modalSlice.actions;
export default modalSlice.reducer;