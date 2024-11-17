import { error } from 'console';
import { LoginData } from "@/interfaces/login";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

let initialState={
    token:localStorage.getItem('token'),
    isloading:false,
    error:'',
    isSuccess:false
}

export let login =createAsyncThunk('auth/login' , async(values:LoginData)=>{
    try{
        let {data}= await axios.post(`https://linked-posts.routemisr.com/users/signin`,values)

   
    return data
    }catch(err:any){
        
        return err.response.data.error
    }
})

 let authSlice = createSlice({
    name:'auth',
    initialState,
    reducers:{},
    extraReducers(builder){
        builder.addCase(login.pending,(state)=>{
            state.isloading=true
        })
        builder.addCase(login.fulfilled,(state,action)=>{
            state.isloading=false;
            state.isSuccess=true;
            state.token=action.payload.token;
            localStorage.setItem('token',action.payload.token);
            state.error = action.payload
            console.log(action);
            
        })
    }
 })


export let authReducer =  authSlice.reducer