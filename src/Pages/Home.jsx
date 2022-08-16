import React, { useContext, useEffect } from 'react'
import MainPageLoggedIn from '../Components/MainPageLoggedIn.jsx'
import appContext from '../Context/appContext.jsx'
import LoggedOut from './LoggedOut.jsx'

export default function Home() {
  const {isLoggedIn} = useContext(appContext)
  useEffect(()=>{
    console.log(isLoggedIn)
  },[isLoggedIn])
  
return isLoggedIn ? <MainPageLoggedIn/> : <LoggedOut/>

}
