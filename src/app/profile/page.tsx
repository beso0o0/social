'use client'

import { Button, CircularProgress, Container, Paper, TextField } from '@mui/material'
import axios from 'axios'
import React from 'react'

export default function Profile() {
 
async function addPost(values){
let {data}=await axios.post(`https://linked-posts.routemisr.com/posts`,values,{
    headers:{
        token:localStorage.getItem('token')
    }
})

console.log(data);

}




 function handleSubmit(e:Event){
let formData = new FormData()
    e.preventDefault()

let body = e.target?.body.value

let image = e.target?.image.files[0]
formData.append('body',body)
formData.append('image',image)
addPost(formData)
 }
 
 
 return <>
 <Container maxWidth={'sm'} sx={{ }}>
        
        


        <Paper elevation={10} sx={{p:3,m:3,display:'flex',flexDirection:'column',gap:2}}>
        <h2>Login Now</h2>

         <form onSubmit={handleSubmit} style={{display:'flex',flexDirection:'column',gap:'20px'}}>
         
         <TextField  name='body' id="body" type="text" label="body" variant="standard" fullWidth />
          <TextField  name='image' id="image" type="file" label="image" variant="standard" fullWidth />
              <Button type="submit" variant="contained" color="primary">
                Login
            </Button>
          
            
       
              
         </form>
        </Paper>
        </Container>      </>
}
