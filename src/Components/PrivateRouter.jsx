import React, {useContext} from 'react'
import appContext from '../Context/appContext'
import { Link, Navigate } from "react-router-dom";

export default function PrivateRouter({children}) {
    const {isLoggedIn} = useContext(appContext)
    

    if(!isLoggedIn){
        return <Navigate to='/'/>
    }else{
       return children
    }
  
}
