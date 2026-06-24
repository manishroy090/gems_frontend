import { createSlice } from "@reduxjs/toolkit";
import { counterSlice } from "./counterSlice";

export const AuthUserSlice = createSlice({
    name:'authuser',
    initialState:{authUser:null,token:null},
    reducers :{
        setAuthUser: (state ,action) =>{
            state.authUser =action.payload
        },
        setToken:(state,action)=>{
           state.token = action.payload;
        }
    }
})


export const {setAuthUser,setToken} = AuthUserSlice.actions

export default AuthUserSlice.reducer;