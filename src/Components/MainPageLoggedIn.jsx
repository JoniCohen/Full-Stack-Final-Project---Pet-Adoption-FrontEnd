import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import appContext from '../Context/appContext'
import NavBarHome from './NavBarHome'
import LogOut from './logOut'


export default function MainPageLoggedIn() {
  const {fullName, setFullName, isLoggedIn,setIsLoggedIn,userId, setUserId} = useContext(appContext)
  async function getUserById(){
    try{
      const resName = await axios.get('http://localhost:8080/users/user/'+userId)
      console.log(resName.data)
      return resName
    }catch(err){
      console.log(err)
    }
    
  }
  getUserById().then((resName)=>{
    resName.data.map(()=>{
      setFullName(resName.data[0].first_name + " "+ resName.data[0].last_name)
    })
  })
  
   
   
    return (
    <>
    <div>
        <NavBarHome/>
        <LogOut/>
        <h1 className='welcome'>Welcome {fullName} </h1>
    </div>
    </>
  )
}
