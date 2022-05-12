import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";


const loginSlice = createSlice({
    name: "auth",
    initialState : null,
    reducers: {
        setUser(state,{payload}){
            state = payload
            return state
        },
        logOut(state, {payload}){
            state=null
            return state
        }
    }
})
export default loginSlice;

export const getUser = () => {
    return function (dispatch, getState) {
        axios
        .get(`products`)
        .then((res)=>{
            // dispatch(filterActions.setFilter(res.data.results))
            // dispatch(filterActions.setLoading(false))
            // console.log("elol",res.data.results)
        })
        .catch((error)=>{
            console.log("Errorr", error)
        })
    }
}

