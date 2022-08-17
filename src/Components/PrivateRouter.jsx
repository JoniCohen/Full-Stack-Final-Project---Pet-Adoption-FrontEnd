import React, {useContext} from 'react'
import appContext from '../Context/appContext'
import { Link, Navigate } from "react-router-dom";

export default function PrivateRouter() {
    const {isLoggedIn} = useContext(appContext)
    

    if(!isLoggedIn){
        return <Navigate to='/'/>
    }
  
}
