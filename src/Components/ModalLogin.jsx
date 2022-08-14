import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import axios from "axios";

export default function ModalLogin({showModalLogin,handleCloseModalLogin,handleShowModalLogin}) {
    const [emailLogin, setEmailLogin] = useState('');
    const [passwordLogin, setPasswordLogin] = useState('');

    function handleChangeEmailLogin(e){
        setEmailLogin(e.target.value)
    }
    function handleChangePasswordLogin(e){
        setPasswordLogin(e.target.value)
    }
    const userLogIn = {email:emailLogin, password:passwordLogin}
    async function logInUser(){
        try{
          const res = await axios.post('http://localhost:8080/users/login',userLogIn)
          console.log(res)
          return res
        }catch(err){
          console.log(err.response.data)
        }
    }

  return (
    <>
    <Modal show={showModalLogin} onHide={handleCloseModalLogin}>
        <Modal.Header closeButton>
          <Modal.Title>Log In</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            
            <Form.Group className="mb-3" controlId="modalLogin">
            
              <Form.Label className='mt-1'>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="name@example.com"
                autoFocus
                onChange={handleChangeEmailLogin}
              />
              <Form.Label className='mt-1'>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                autoFocus
                onChange={handleChangePasswordLogin}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModalLogin}>
            Close
          </Button>
          <Button variant="primary" onClick={logInUser} >
            Log In
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}
