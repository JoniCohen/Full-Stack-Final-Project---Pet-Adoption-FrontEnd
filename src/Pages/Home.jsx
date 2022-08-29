import React, { useContext, useEffect } from 'react'
import MainPageLoggedIn from '../Components/MainPageLoggedIn.jsx'
import appContext from '../Context/appContext.jsx'
import LoggedOut from './LoggedOut.jsx'
import { Link, Navigate } from "react-router-dom";


export default function Home() {
  const {isLoggedIn,userId,isAdmin} = useContext(appContext)
  useEffect(()=>{
    console.log(isLoggedIn)
  },[isLoggedIn])
  
  if(!isLoggedIn){
    return <LoggedOut/>
  }else if(isLoggedIn && !isAdmin){
    return <MainPageLoggedIn/>
  }else if(isLoggedIn && isAdmin){
    return <Navigate to='/admin'/>
  }


}
