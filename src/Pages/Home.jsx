import React, { useContext, useEffect } from 'react'
import MainPageLoggedIn from '../Components/MainPageLoggedIn.jsx'
import appContext from '../Context/appContext.jsx'
import LoggedOut from './LoggedOut.jsx'
import { Link, Navigate } from "react-router-dom";


export default function Home() {
  const {isLoggedIn,userId} = useContext(appContext)
  useEffect(()=>{
    console.log(isLoggedIn)
  },[isLoggedIn])
  
  if(!isLoggedIn){
    return <LoggedOut/>
  }else if(isLoggedIn && userId != 14){
    return <MainPageLoggedIn/>
  }else if(isLoggedIn && userId == 14){
    return <Navigate to='/admin'/>
  }


}
