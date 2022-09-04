import React, { useContext } from 'react'
import { Button } from "react-bootstrap";
import appContext from '../Context/appContext';
import axios from 'axios';

export default function SavedPet(props) {
    const {savedPets,getSavedPets} = props
    const {userId} = useContext(appContext)

    async function unsavePets() {
        try {
          const res = await axios.delete('http://localhost:8080/pets/savepets/'+userId+'/'+savedPets.id_pet,{ withCredentials: true })
          if(res){
            alert("Pet unsaved");
            getSavedPets()
          }
        } catch (err) {
          console.log(err);
        }
       
      }
  return (
    <div className="pet-card pt-3 ps-2 ms-3 mb-3 shadow">
        <div className="d-flex flex-row">
        <img src={savedPets.image_pet} className="img-pet-card" alt="imagePet" />
          <div className="ms-2">
            <h4>{savedPets.name_pet} </h4>
            <h6>{savedPets.status_pet}</h6>
            </div>
        </div>
          <div>
            <Button size="sm" className="ms-5 mt-5 mb-2" onClick={unsavePets}>
                Unsave
              </Button>
            </div>
            
          
        </div>
        
  )
}
