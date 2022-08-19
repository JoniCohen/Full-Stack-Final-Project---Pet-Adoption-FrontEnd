import axios from 'axios'
import React, { useContext, useState } from 'react'
import { Form, FormGroup, Button } from 'react-bootstrap'
import NavBarHome from '../Components/NavBarHome'
import appContext from '../Context/appContext'

export default function Profile() {
  const {userId, setUserId} = useContext(appContext)
  const [firstNameToChange, setFirstNameToChange] = useState('')
  const [lastNameToChange, setLastNameToChange] = useState('')
  const [phoneNumberToChange, setPhoneNumberToChange] = useState('')
  const [emailToChange, setEmailToChange] = useState('')
  const [passwordToChange, setPasswordToChange] = useState('')
  const [confirmPasswordToChange, setConfirmPasswordToChange] = useState('')
  const [bioToChange, setBioToChange] = useState('')

  async function getUserToChange(){
    try{
      const res = await axios.get('http://localhost:8080/users/user/'+userId)
      return res
    }catch(err){
      console.log(err)
    }
  }
  getUserToChange().then((res)=>{
    setFirstNameToChange(res.data.firstName)
    setLastNameToChange(res.data.lastName)
    setPhoneNumberToChange(res.data.phoneNumber)
    setEmailToChange(res.data.email)
    setPasswordToChange(res.data.password)
    setConfirmPasswordToChange(res.data.confirmPassword)
    setBioToChange(res.data.bio)
  })

  return (
    <>
    <NavBarHome />
    <div>
      <Form className='form-profile'>
      <h1>Profile Settings</h1>
        <FormGroup className="mb-3" controlId="profileSettings">
        <Form.Label className='mt-1'>First Name</Form.Label>
        <Form.Control
                type="text"
                placeholder="First Name"
                autoFocus
                value={firstNameToChange}
                
              />
              <Form.Label className='mt-1'>Last Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Last Name"
                autoFocus
                value={lastNameToChange}
                
              />
              <Form.Label className='mt-1'>Phone Number</Form.Label>
              <Form.Control
                type="number"
                placeholder="Phone Number"
                autoFocus
                value={phoneNumberToChange}
               
              />
              <Form.Label className='mt-1'>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="name@example.com"
                autoFocus
                value={emailToChange}
                
              />
              <Form.Label className='mt-1'>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                autoFocus
                value={''}
               
              />
              <Form.Label className='mt-1'>Confirm Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Confirm Password"
                autoFocus
                value={''}
                
              />
              <Form.Label className='mt-1'>Bio</Form.Label>
              <Form.Control
              className='textarea-profile'
                as="textarea"
                placeholder="Write a short Bio"
                autoFocus
                value={bioToChange}
                
              />
        </FormGroup>
        <Button variant="primary" >
           Save Changes
          </Button>
      </Form>



    </div>
    </>
    
  )
}
