import React from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

export default function ModalPet({show,onHide,pets}) {
    
    function hypoallergenic(){
        if(pets.hypoallergenic_pet){
            return "Yes"
        }
        return "No"
    }

      return (
        <Modal show={show}
          size="xxl"
          aria-labelledby="contained-modal-title-vcenter"
          centered
        >
          <Modal.Header>
            <Modal.Title id="contained-modal-title-vcenter">
              {pets.name_pet}
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div className='d-flex flex-row'>
            <img src={pets.image_pet} className='img-pet-card' alt="imagePet" />
            <div className='d-flex ms-5'>
            <h6>{pets.type_pet} </h6>
        <h6 className='ms-2'>{pets.color_pet}</h6>
        <h6 className='ms-2'>{pets.breed_of_pet}</h6>
        <h6 className='ms-2'>{pets.height_pet} cm</h6>
        <h6 className='ms-2'>{pets.weight_pet} kg</h6>
        <h6 className='ms-2'>{pets.status_pet}</h6>
            </div>
        
            </div>
            <div className='d-flex mt-1'>
            <span className='ms-5'><b>Bio: </b>{pets.bio_pet}</span>
        <span className='ms-5'><b>Hypoallergenic: </b>{hypoallergenic()}</span>
        <span className='ms-5'><b>Dietary Restrictions: </b>{pets.dietary_restrictions_pet}</span>
            </div>
        

          </Modal.Body>
          <Modal.Footer>
            <Button onClick={onHide}>Close</Button>
          </Modal.Footer>
        </Modal>
      );
    }
    

      
    
      