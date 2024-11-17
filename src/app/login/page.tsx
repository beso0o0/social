'use client'
import { LoginData } from "@/interfaces/login";
import { login } from "@/redux/slices/loginslice";
import { storeDispatch, storeState } from "@/redux/store";
import { Button, CircularProgress, Container, Paper, TextField } from "@mui/material";
import axios from "axios";
import { useFormik } from "formik";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";

export default function Login(){

  

    let initialValues:LoginData ={
           email:'',
            password:''
    }


 
 const dispatch =  useDispatch<storeDispatch>()
    let {isloading ,error,isSuccess,token } = useSelector((state:storeState)=> state.authReducer)
    let {push}  = useRouter()
   
    let {handleSubmit,handleChange,values} = useFormik({
        initialValues
        ,onSubmit:async (values)=>{
           await dispatch(login(values))
           if(localStorage.getItem('token')){
                push('/')
           }else{
            toast.error(error)
           }
            
        }
    })

    useEffect(()=>{
        if(localStorage.getItem('token')){
            push('./')
        }
    },[])
    return<>
    
    <Container maxWidth={'sm'} sx={{ }}>
        
        


        <Paper elevation={10} sx={{p:3,m:3,display:'flex',flexDirection:'column',gap:2}}>
        <h2>Login Now</h2>

         <form onSubmit={handleSubmit} style={{display:'flex',flexDirection:'column',gap:'20px'}}>
         <TextField value={values.email} onChange={handleChange} id="email" type="email" label="Email" variant="standard" fullWidth />
          <TextField value={values.password} onChange={handleChange} id="password" type="password" label="Password" variant="standard" fullWidth />
            {isloading?  <Button type="button" variant="contained" color="primary">
                <CircularProgress color="success"/>
            </Button>:     <Button type="submit" variant="contained" color="primary">
                Login
            </Button>}
          
            
       
              
         </form>
        </Paper>
        </Container>    
    </>
  }