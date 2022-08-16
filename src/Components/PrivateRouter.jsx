import React, {useContext} from 'react'
import appContext from '../Context/appContext'
import { useNavigate } from "react-router-dom";

export default function PrivateRouter() {
    const {isLoggedIn} = useContext(appContext)
    const navigate = useNavigate()

    if(!isLoggedIn){
        navigate('/')
    }
  
}
