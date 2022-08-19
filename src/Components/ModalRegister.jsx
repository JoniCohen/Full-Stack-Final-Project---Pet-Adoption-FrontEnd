import React, { useContext, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import axios from "axios";
import appContext from '../Context/appContext';

export default function ModalRegister({showModalRegister,handleCloseModalRegister,handleShowModalRegister,handleShowModalLogin}) {
  const {isLoggedIn,setIsLoggedIn,userId,setUserId} = useContext(appContext)
    const [firstName,setFirstName] = useState('')
    const [lastName,setLastName] = useState('')
    const [phoneNumber,setPhoneNumber] = useState('')
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    const [confirmPassword,setConfirmPassword] = useState('')
   

    const newUser = {
        firstName : firstName,
        lastName : lastName,
        phoneNumber : phoneNumber,
        email : email,
        password : password,
        confirmPassword : confirmPassword
    }
    async function registerUser(){
        try{
            const res =  await axios.post('http://localhost:8080/users/signup', newUser)
            console.log(res)
          handleCloseModalRegister()
          handleShowModalLogin()
            return res
        }catch(err){
            console.log(err.message,err.response.data)
        }finally{
          
        }
        
    }    
    function isValidEmail(email) {
        return /\S+@\S+\.\S+/.test(email);
      }

    function handleChangeFirstName(e){
        setFirstName(e.target.value)
        }
    function handleChangeLastName(e){
        setLastName(e.target.value)
    }
    function handleChangePhoneNumber(e){
        setPhoneNumber(e.target.value)
    }
    function handleChangeEmail(e){
        setEmail(e.target.value)
    }
    function handleChangePassword(e){
        setPassword(e.target.value)
    }
    function handleChangeConfirmPassword(e){
        setConfirmPassword(e.target.value)
    }
    function createUser(){
        if((firstName !== ''&& lastName !== '' && email !== '' & phoneNumber !==''&& password !== ''&& confirmPassword!=='')&&isValidEmail(email)){
            registerUser()
            
            
        }else if((firstName !== ''&& lastName !== '' && email !== '' & phoneNumber !==''&& password !== ''&& confirmPassword!=='')&&!isValidEmail(email)){
            alert('Email format is invalid')
        }else{
            alert('All the field are required')
        }
        
       }
    
  return (
    <>
    <Modal show={showModalRegister} onHide={handleCloseModalRegister}>
        <Modal.Header closeButton>
          <Modal.Title>Sign Up</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            
            <Form.Group className="mb-3" controlId="modalRegister">
            
            <Form.Label className='mt-1'>First Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="First Name"
                autoFocus
                onChange={handleChangeFirstName}
              />
              <Form.Label className='mt-1'>Last Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Last Name"
                autoFocus
                onChange={handleChangeLastName}
              />
              <Form.Label className='mt-1'>Phone Number</Form.Label>
              <Form.Control
                type="number"
                placeholder="Phone Number"
                autoFocus
                onChange={handleChangePhoneNumber}
              />
              <Form.Label className='mt-1'>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="name@example.com"
                autoFocus
                onChange={handleChangeEmail}
              />
              <Form.Label className='mt-1'>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                autoFocus
                onChange={handleChangePassword}
              />
              <span className='text-success'>Must be between 3-10 characters</span><br/>
              <Form.Label className='mt-1'>Confirm Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Confirm your password"
                autoFocus
                onChange={handleChangeConfirmPassword}
              />
              <span className='text-danger' hidden={password!==confirmPassword && confirmPassword!=='' ? false : true} >The passwords don't match</span>
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModalRegister}>
            Close
          </Button>
          <Button variant="primary" onClick={createUser} >
            Create User
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  
  )
}
