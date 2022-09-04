import React, { useContext, useState } from "react";
import Button from "react-bootstrap/Button";
import ModalPet from "./ModalPet";
import axios from "axios";
import appContext from "../Context/appContext";

export default function Pet(props) {
  const { pets, search, getPetsById } = props;
  const { userId, isLoggedIn } = useContext(appContext);
  const [modalPetShow, setModalPetShow] = useState(false);
  const idPet = pets.id_pet;

  
  async function getDetails() {
    const res = await axios.get("http://localhost:8080/pets/pet/" + idPet,{withCredentials:true});
    setModalPetShow(true);
  }

  function showPetsForFostering(){
    if(pets.status_pet==='Available'){
      return search()
    }else if(pets.status_pet==='Fostered'){
      return getPetsById()
    }
  }
  async function adoptPet() {
    try {
      const adoptObject = { newStatus: 2, newUser: userId, petId: pets.id_pet };
      const res = await axios.put(
        "http://localhost:8080/pets/adopt",
        adoptObject,
        { withCredentials: true })
        if(res){
          const adoptObject = { newStatus: 2, newUser: userId, petId: pets.id_pet };
          const resOperation = await axios.post(
            "http://localhost:8080/pets/operations",
            adoptObject,
            { withCredentials: true }
          )
          if(resOperation){
            alert("Pet adopted");
            showPetsForFostering()
          }
        }
    } catch (err) {
      console.log(err);
    }

    
  }

  async function returnPet() {
    try {
      const returnObject = { newStatus: 1, newUser: 14, petId: pets.id_pet };
      const res = await axios.put(
        "http://localhost:8080/pets/return",
        returnObject,
        { withCredentials: true }
      )
      if(res){
        const adoptObject = { newStatus: 1, newUser: userId, petId: pets.id_pet };
        const resOperation = await axios.post(
          "http://localhost:8080/pets/operations",
          adoptObject,
          { withCredentials: true }
        )
      
      if(resOperation){
        alert("Pet returned");
        getPetsById();
      }
    }} catch (err) {
      console.log(err);
    }
   
  }
  async function fosterPet() {
    try {
      const fosterObject = {
        newStatus: 3,
        newUser: userId,
        petId: pets.id_pet,
      };
      const res = await axios.put(
        "http://localhost:8080/pets/foster",
        fosterObject,
        { withCredentials: true }
      )
      if(res){
        const fosterObject = {
          newStatus: 3,
          newUser: userId,
          petId: pets.id_pet,
        };
        const resOperation = await axios.post(
          "http://localhost:8080/pets/operations",
          fosterObject,
          { withCredentials: true }
        )
        if(resOperation){
          alert("Pet fostered");
          search()
        }
      }
    } catch (err) {
      console.log(err);
    }
    
  }
  async function savePets() {
    try {
      const savePetObject = { idUser: userId, idPet: pets.id_pet };
      const res = await axios.post(
        "http://localhost:8080/pets/savepets",
        savePetObject,
        { withCredentials: true }
      )
      if(res){
        alert("Pet saved");
      }
    } catch (err) {
      console.log(err);
    }
    
  }

  return (
    <>
      <ModalPet
        show={modalPetShow}
        onHide={() => setModalPetShow(false)}
        pets={pets}
      />
      <div className="pet-card pt-3 ps-2 ms-3 mb-3 shadow">
        <div className="d-flex flex-row">
          <img src={pets.image_pet} className="img-pet-card" alt="imagePet" />
          <div className="ms-2">
            <Button onClick={getDetails}>Details</Button>
            <h4>{pets.name_pet} </h4>
            <div className="d-flex flex-row">
              <h6>{pets.type_pet} </h6>
              <Button size="sm" className="ms-5" onClick={savePets} hidden={!isLoggedIn ? true : false} >
                Save
              </Button>
            </div>
          </div>
        </div>
        <div className="mt-2">
          <span className="ms-2">Color: {pets.color_pet}</span>
          <span className="ms-2">Breed: {pets.breed_of_pet}</span>
        </div>
        <div className="mt-2">
          <span className="ms-2">Height: {pets.height_pet} cm</span>
          <span className="ms-2">Weight: {pets.weight_pet} kg</span>
        </div>
        <div>
          <Button
            className="mt-4 ms-1"
            hidden={
              !isLoggedIn || (isLoggedIn && pets.status_pet == "Adopted" ) 
                ? true
                : false
            }
            onClick={adoptPet}
          >
            Adopt
          </Button>
          <Button
            className="mt-4 ms-1"
            hidden={!isLoggedIn || (isLoggedIn && pets.status_pet != "Available" ) ? true : false}
            onClick={fosterPet}
          >
            Foster
          </Button>
          <Button
            className="mt-4 ms-1"
            hidden={!isLoggedIn || (isLoggedIn && pets.status_pet == "Available") ? true : false}
            onClick={returnPet}
          >
            Return
          </Button>
        </div>
      </div>
    </>
  );
}
