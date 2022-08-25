import React, {useContext} from 'react'
import { Button } from "react-bootstrap";
import appContext from '../Context/appContext';
import axios from 'axios';

export default function LogOut() {
    const {isLoggedIn,setIsLoggedIn, userId, setUserId} = useContext(appContext)
 
  
  async function logOut(){
    const res = await axios.get('http://localhost:8080/users/logout',{withCredentials:true})
    console.log(res.data)
    if(res.data.ok){
      localStorage.setItem('isLoggedIn',false)
      localStorage.setItem('userId',false)
      setUserId('')
      setIsLoggedIn(false)
    }
    
    setUserId('')
  }
  
  return (
    <Button onClick={logOut} className='sign-out-btn'>Sign Out</Button>
  )
}
