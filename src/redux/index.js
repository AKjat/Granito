import {configureStore, createSlice} from "@reduxjs/toolkit";

const counterSlice = createSlice({
    name: "counter",
    initialState : {count: 0},
    reducers: {
        increment(state, action){
            state.count++;
        },
        deccrement(state, action){
            state.count--
        },
        Addby(state, action){
            state.count+=action.payload
        },
    }
})
const cartSlice = createSlice({
    name: "cart",
    initialState : {
        itemList: [],
        totalQuantity: 0,
    },
    reducers: {
        addCart(state, action){
            const newItem = action.payload
            // check if already in list or not
            const existingItem = state.itemList.find(item=>item.id === newItem.id)
            if(existingItem){
                // alert("item already in cart")
                // existingItem.quantity=existingItem.quantity
                // existingItem.quantity++;
                existingItem.quantity += newItem.quantity;
                existingItem.totalPrice = existingItem.price*existingItem.quantity;
            }
            else{
                state.itemList.push({
                    id: newItem.id,
                    price: newItem.price,
                    quantity: newItem.quantity,
                    name: newItem.name,
                    image: newItem.img,
                    totalPrice: newItem.price*newItem.quantity
                })
                state.totalQuantity++
            }
        },
        removeCart(state, action){
            const id = action.payload;
            state.itemList = state.itemList.filter(item=>item.id !== id);
            state.totalQuantity--
            // const existingItem = state.itemList.find(item=> item.id===id);
            // if(existingItem.quantity === 1){
            //     state.itemList = state.itemList.filter(item=>item.id !== id);
            // }else{
            //     existingItem.quantity--
            //     existingItem.totalPrice -= existingItem.price
            // }
        },
        setQuantity(state, action){
            const id = action.payload.id
            const quantity = action.payload.qty1
            const existingItem = state.itemList.find(item=>item.id === id)
            if(existingItem){
                existingItem.quantity=quantity
                existingItem.totalPrice=quantity*existingItem.price

            }
            // const index = state.itemList.findIndex(item=>item.id==id)
            // state.itemList[index].quantity=quantity
            // state.itemList[index].totalPrice=quantity*state.itemList[index].price

            // state.itemList = state.itemList.map(item=>{
            //     if(item.id===id){
            //         item.quantity = quantity;

            //         // return{...item, quantity: quantity }
            //     }
            // })
        },
        Addby(state, action){
            state.count+=action.payload
        },
    }
})
export const actions = counterSlice.actions
export const cartActions = cartSlice.actions
const store = configureStore({
    reducer: {count: counterSlice.reducer, cart: cartSlice.reducer }
})
export default store;