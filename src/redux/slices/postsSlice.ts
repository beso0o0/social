import { Post } from "@/interfaces/postInterface";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

let initialState:{posts:Post[],isLoading:boolean,post:Post}={post:null,posts:[],isLoading:false}
let headers ={token : localStorage.getItem('token')?? ""}
export let getPosts = createAsyncThunk('posts/getPosts', async ()=>{

    let {data} = await axios.get(`https://linked-posts.routemisr.com/posts?limit=50`, {
        headers
    })
    console.log(data.posts);
    return data.posts
    
})
export let getSinglePost = createAsyncThunk('posts/getSinglePost', async (postId:string)=>{

    let {data} = await axios.get(`https://linked-posts.routemisr.com/posts/${postId}`, {
        headers
    })
    return data.post
    
})
let postsSlices = createSlice({
    name:'posts',
    initialState,
    reducers:{},
    extraReducers(builder){
        builder.addCase(getPosts.pending,(state)=>{
            state.isLoading=true
        }) 
             builder.addCase(getPosts.fulfilled,(state ,action)=>{
            state.isLoading=false;
            state.posts =action.payload
        })
        builder.addCase(getSinglePost.pending,(state)=>{
            state.isLoading=true
        }) 
             builder.addCase(getSinglePost.fulfilled,(state ,action)=>{
            state.isLoading=false;
            state.post =action.payload
        })
    },
})

export let postsReducer = postsSlices.reducer