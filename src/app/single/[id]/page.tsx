'use client'
import { useParams } from "next/navigation";
import PostDetails from '@/app/_Components/postdetails/PostDetails'
import Loading from '@/app/loading'
import { Post } from '@/interfaces/postInterface'
import { getSinglePost } from '@/redux/slices/postsSlice'
import { storeDispatch, storeState } from '@/redux/store'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

export default function SinglePost({params:{id}}:{params:{id:string}}) {
 let {post,isLoading}:{post:Post,isLoading:boolean} = useSelector((state:storeState)=>state.postsReducer)
 let dispatch= useDispatch<storeDispatch>()
 
useEffect(()=>{
  dispatch(getSinglePost(id))
},[])

  return <>
  
  {isLoading?<Loading/>: post?
  <PostDetails postD={post}allComments={true} />:""
  // <h2>hellooo</h2>
  }
  
  
  </>
}
