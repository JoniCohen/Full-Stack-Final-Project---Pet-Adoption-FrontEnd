import React from 'react'
import SavedPet from './SavedPet'

export default function SavedPetArray(props) {
    const {savedPet,getSavedPets} = props


  return (
    <ul className='pet-saved-list'>
        {savedPet.map((savedPets)=>(
            <SavedPet 
            key={savedPet.id_pet}
            savedPets = {savedPets}
            getSavedPets = {getSavedPets}
            />
        ))}
    </ul>
  )
}
