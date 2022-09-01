import React, { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import axios from 'axios';

export default function ModalPetByUser({show,onHide,userDetails}) {
    
    
      

      return (
        <Modal show={show}
          size="xxl"
          aria-labelledby="contained-modal-title-vcenter"
          centered
        >
          <Modal.Header>
            <Modal.Title id="contained-modal-title-vcenter">
            {userDetails && userDetails.length>0 && <h1>{userDetails[0].first_name+' '+userDetails[0].last_name} </h1>  }
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
          <div>
          {userDetails && userDetails.length>0 &&  <p> Email: {userDetails[0].email} </p>}
          {userDetails && userDetails.length>0 && <p> Phone Number: {userDetails[0].phone_number} </p>}
          </div>
          <div>
          {userDetails && userDetails.length>0 && userDetails[0].name_pet!=null && userDetails.map((user)=>(
                    <div>
                    <li>Pet: {user.name_pet}</li>  
                    </div>
                     ))}
            </div>	
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={onHide}>Close</Button>
          </Modal.Footer>
        </Modal>
      );
    }
    