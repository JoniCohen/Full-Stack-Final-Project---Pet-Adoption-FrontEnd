import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import appContext from '../Context/appContext'
import NavBarHome from './NavBarHome'


export default function MainPageLoggedIn() {
  const {userId,setuserid,fullName, setFullName,firstNameToChange, setFirstNameToChange,lastNameToChange, setLastNameToChange,phoneNumberToChange, setPhoneNumberToChange,emailToChange, setEmailToChange,passwordToChange, setPasswordToChange,bioToChange, setBioToChange} = useContext(appContext)

  /*const [fullName, setFullName] = useState('')
  const [firstNameToChange, setFirstNameToChange] = useState('')
  const [lastNameToChange, setLastNameToChange] = useState('')
  const [phoneNumberToChange, setPhoneNumberToChange] = useState('')
  const [emailToChange, setEmailToChange] = useState('')
  const [passwordToChange, setPasswordToChange] = useState('')
  const [bioToChange, setBioToChange] = useState('')*/
  //console.log(userId)
  
    /*async function getUserById(){
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
        setFirstNameToChange(resName.data[0].first_name)
      setLastNameToChange(resName.data[0].last_name)
    setPhoneNumberToChange(resName.data[0].phone_number)
    setEmailToChange(resName.data[0].email)
    setPasswordToChange(resName.data[0].password)
    setBioToChange(resName.data[0].bio)
      })
        
      
    })*/
   
   
    return (
    <>
    <div>
        <NavBarHome/>
        <h1 className='welcome'>Welcome {fullName} </h1>
    </div>
    </>
  )
}
