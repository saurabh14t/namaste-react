import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {
    addItem: (state, action) => {
      // IN Valnilla Redux React says DON'T MUTATE STATE
      //   so to update state we used to do like
      //   const newState = [...state];
      //   newState.items.push(action.payload);
      //   return newState;

      // In Redux Toolkit we have to mutate the state
      // In the background Redux does the above at there end using Immer js behind the scenes.
      state.items.push(action.payload);
    },
    remoteItem: (state, action) => {
      //Wrie the logic to remove
      state.items.pop();
    },
    //originalState = {items: ["name of items"]}
    clearCart: (state, action) => {
      // RTK says we have to either mutate the state or return an new state.
      // When we pass new state it will replace the original array
      //   state.items.length = 0; // []
      // Above can be writter as below
      return { items: [] }; // This new Object will be replaced inside originalState = {items:[]}
    },
  },
});

export const { addItem, remoteItem, clearCart } = cartSlice.actions;

export default cartSlice.reducer;
