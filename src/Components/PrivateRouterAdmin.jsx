import React, {useContext} from 'react'
import appContext from '../Context/appContext'
import { Link, Navigate } from "react-router-dom";

export default function PrivateRouterAdmin({children}) {
    const {isLoggedIn,userId} = useContext(appContext)
    
    if(!isLoggedIn){
        return <Navigate to='/'/>
    }else if(isLoggedIn && userId===14){
        return children
    } 
}
