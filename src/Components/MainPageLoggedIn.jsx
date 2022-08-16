import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import appContext from '../Context/appContext'
import NavBarHome from './NavBarHome'


export default function MainPageLoggedIn() {
  const {userId,setuserid} = useContext(appContext)
  const [fullName, setFullName] = useState('')
  console.log(userId)
    //let fullName = {}
    async function getUserById(){
      try{
        const resName = await axios.get('http://localhost:8080/users/user/'+userId)
        return resName
      }catch(err){
        console.log(err)
      }
      
    }
    getUserById().then((resName)=>{
      setFullName(resName.data.firstName + " "+ resName.data.lastName)  
      
    })
   
   
    return (
    <>
    <div>
        <NavBarHome/>
        <h1 className='welcome'>Welcome {fullName} </h1>
    </div>
    </>
  )
}
