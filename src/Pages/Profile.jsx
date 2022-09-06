import axios from 'axios'
import React, { useContext, useState } from 'react'
import { Form, FormGroup, Button } from 'react-bootstrap'
import NavBarHome from '../Components/NavBarHome'
import appContext from '../Context/appContext'
import LogOut from '../Components/logOut'

export default function Profile() {
  const {userId, setUserId,fullName, setFullName,firstNameToChange, setFirstNameToChange,lastNameToChange, setLastNameToChange,phoneNumberToChange, setPhoneNumberToChange,emailToChange, setEmailToChange,passwordToChange, setPasswordToChange,bioToChange, setBioToChange} = useContext(appContext)
  const [firstNameChanged,setFirstNameChanged] = useState(firstNameToChange)
  const [lastNameChanged, setLastNameChanged] = useState(lastNameToChange)
  const [phoneNumberChanged, setPhoneNumberChanged] = useState(phoneNumberToChange)
  const [bioChanged, setBioChanged] = useState(bioToChange)
  
  function changeFirstName(e){
    setFirstNameChanged(e.target.value)
  }
  function changeLastName(e){
    setLastNameChanged(e.target.value)
  }
  function changePhoneNumber(e){
    setPhoneNumberChanged(e.target.value)
  }
  function changeBio(e){
    setBioChanged(e.target.value)
  }
  function saveChanges(e){
    setFirstNameToChange(firstNameChanged)
    setLastNameToChange(lastNameChanged)
    setPhoneNumberToChange(phoneNumberChanged)
    setBioToChange(bioChanged)
    if(window.confirm('Are you sure that you want to change your profile?')){
      changeProfile()
      
    }
    
  }

  const profileChanged = {firstName:firstNameChanged,lastName:lastNameChanged,phoneNumber:phoneNumberChanged,bio:bioChanged}
  async function changeProfile(){
    try{
      const res = await axios.put(`http://localhost:8080/users/user/${userId}`,profileChanged,{withCredentials:true})
      if(res){
        alert('Profile Changed')
      }
    }catch(err){
      if(err){
        alert(err.response.statusText)
      }
    }
     }

  return (
    <>
    <NavBarHome />
    <LogOut/>
    <div>
      <Form className='form-profile'>
      <h1>Profile Settings</h1>
        <FormGroup className="mb-3" controlId="profileSettings">
        <Form.Label className='mt-1'>First Name</Form.Label>
        <Form.Control
                type="text"
                placeholder="First Name"
                autoFocus
                value={firstNameChanged}
                onChange={changeFirstName}
              />
              <Form.Label className='mt-1'>Last Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Last Name"
                autoFocus
                value={lastNameChanged}
                onChange={changeLastName}
              />
              <Form.Label className='mt-1'>Phone Number</Form.Label>
              <Form.Control
                type="number"
                placeholder="Phone Number"
                autoFocus
                value={phoneNumberChanged}
                onChange={changePhoneNumber}
              />
              <Form.Label className='mt-1'>Email address</Form.Label>
              <Form.Control
                type="email"
                readOnly={true}
                autoFocus
                value={emailToChange}
                className='email-profile-settings'
              />
              <Form.Label className='mt-1'>Password</Form.Label>
              <Form.Control
                type="password"
                readOnly={true}
                autoFocus
                value={passwordToChange}
                className='password-profile-settings'
              />
              <Form.Label className='mt-1'>Bio</Form.Label>
              <Form.Control
              className='textarea-profile'
                as="textarea"
                placeholder="Write a short Bio"
                autoFocus
                value={bioChanged}
                onChange={changeBio}
              />
        </FormGroup>
        <Button variant="primary" onClick={saveChanges} >
           Save Changes
          </Button>
      </Form>



    </div>
    </>
    
  )
}
