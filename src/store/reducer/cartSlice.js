import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isCartOpen: false,
    isDetailsOpen: false,
    cartItems: [],
    openedItemId: true,
    totalQuantity: 0,
}

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addItem(state, action) {
            const newCartItems = action.payload; 
            const existingItem = state.cartItems.find((elem) => elem.ISBN === newCartItems.ISBN); 
            state.totalQuantity++;
            if(!existingItem){
                state.cartItems.push({
                    id: newCartItems.id,
                    ISBN: newCartItems.ISBN,
                    quantity: 1,
                    title: newCartItems.title,
                    author: newCartItems.author,
                    summary: newCartItems.summary,
                    price: newCartItems.price,
                    image: newCartItems.image, 
                })
              }
              else {
                existingItem.quantity++;
              }
              
              
        },
        toggleCart(state, action){
            state.isCartOpen = action.payload;
        }, 
        incrementalItem(state, action){ 
            const id = action.payload;
            state.cartItems = state.cartItems.map(elem=>{
                if(id === elem.ISBN){
                    elem.quantity++;
                }
                return elem;
            })
        },
        decrementalItem(state, action) {
            const id = action.payload;
            state.cartItems = state.cartItems.map((elem) => {
              if (id === elem.ISBN) {
                if (elem.quantity > 1) {
                  elem.quantity--;
                }
              }
              return elem;
            });
          },
        deleteItem(state, action){
            const id = action.payload;
            state.cartItems = state.cartItems.filter(elem=>elem.ISBN !== id); 
        },
        deleteAllItems(state, action){
            state.cartItems = [];
        },
    },
});

export const {addItem, toggleCart, incrementalItem, decrementalItem, deleteItem, deleteAllItems, toggleDetails} = cartSlice.actions;
export default cartSlice.reducer;