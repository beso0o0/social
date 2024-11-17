'use client'

import { getPosts } from "@/redux/slices/postsSlice"
import { storeDispatch, storeState } from "@/redux/store"
import { useRouter } from "next/navigation"
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import Loading from "./loading"
import { Container } from "@mui/material"
import PostDetails from "./_Components/postdetails/PostDetails"

export default function Home(){

let {push}= useRouter()

let dispatch=  useDispatch<storeDispatch>()
let {posts ,isLoading} =useSelector((state:storeState)=>state.postsReducer)
useEffect(()=>{
  if(!localStorage.getItem('token')){
    push('./login')
  }else{
    dispatch(getPosts())
  }
},[])



  return<>
  
  {isLoading? <Loading/>: 
  
  <Container maxWidth='sm'>

    {posts.map((post)=>      <PostDetails key={post._id} postD={post}  />)}
  </Container>
  
  }
 

  
  </>
}