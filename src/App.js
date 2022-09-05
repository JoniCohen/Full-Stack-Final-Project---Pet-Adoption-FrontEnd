import './App.css';
import Home from './Pages/Home.jsx';
import Profile from './Pages/Profile.jsx';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoggedOut from './Pages/LoggedOut.jsx';
import Search from './Pages/Search';
import MyPets from './Pages/MyPets';
import appContext from './Context/appContext';
import ModalLogin from './Components/ModalLogin';
import ModalRegister from './Components/ModalRegister';
import { useState, useEffect } from 'react';
import PrivateRouter from './Components/PrivateRouter';
import PrivateRouterAdmin from './Components/PrivateRouterAdmin';
import axios from 'axios'
import AdminUsers from './Pages/AdminUsers';
import AddPets from './Pages/AddPets';
import PetDashboard from './Pages/PetDashboard';
import HistoricalOperations from './Pages/HistoricalOperations';
import EditPets from './Pages/EditPets';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [userId, setUserId] = useState('')
  const [fullName, setFullName] = useState('')
  const [firstNameToChange, setFirstNameToChange] = useState('')
  const [lastNameToChange, setLastNameToChange] = useState('')
  const [phoneNumberToChange, setPhoneNumberToChange] = useState('')
  const [emailToChange, setEmailToChange] = useState('')
  const [passwordToChange, setPasswordToChange] = useState('')
  const [bioToChange, setBioToChange] = useState('')
  const [isAdmin, setIsAdmin] = useState(false)
  const [namePet, setNamePet] = useState('')
  const [imagePet, setImagePet] = useState('')
  const [heightPet, setHeightPet] = useState('')
  const [weightPet, setWeightPet] = useState('')
  const [bioPet, setBioPet] = useState('')
  const [dietaryPet, setDietaryPet] = useState('')
  const [hypoallergenicPet, setHypoallergenicPet] = useState('')
  const [colorsPet, setColorsPet] = useState('')
  const [typesPet, setTypesPet] = useState('')
  const [breedsPet, setBreedsPet] = useState('')
  let colorPet = []
  let typePet = []
  let breedPet = []

  async function getUserById(){
    try{
      const resName = await axios.get('http://localhost:8080/users/user/'+userId,{withCredentials:true})
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
  })
  useEffect(()=>{
    getUserById()
  },[])
  useEffect(()=>{
    const loggedIn = JSON.parse(localStorage.getItem('isLoggedIn'))
    const uId = JSON.parse(localStorage.getItem('userId'))
    const admin = JSON.parse(localStorage.getItem('isAdmin'))
    if(loggedIn){
      setIsLoggedIn(loggedIn)
      setUserId(uId)
      setIsAdmin(admin)
    }
  },[])  
  
  async function getColorsOfPets(){
    const resColors = await axios.get('http://localhost:8080/pets/color',{withCredentials:true})
    return resColors
  }
  getColorsOfPets().then((resColors)=>{
    resColors.data.map((color)=>{
      colorPet.push({label:color.color_pet,value:color.id_color_pet})
    })
  })
  async function getTypeOfPets(){
    const resType = await axios.get('http://localhost:8080/pets/type',{withCredentials:true})
    return resType
  }
  getTypeOfPets().then((resType)=>{
    resType.data.map((type)=>{
      typePet.push({label:type.type_pet,value:type.id_type_pet})
    })
  })
  async function getBreedOfPets(){
    const resBreed = await axios.get('http://localhost:8080/pets/breed',{withCredentials:true})
    return resBreed
  }
  getBreedOfPets().then((resBreed)=>{
    resBreed.data.map((breed)=>{
      breedPet.push({label:breed.breed_of_pet,value:breed.id_breed_of_pet})
    })
  })

  return (
    <>
    <div className="App">
    <appContext.Provider value={{isLoggedIn,setIsLoggedIn,userId,setUserId,fullName, setFullName,firstNameToChange, setFirstNameToChange,lastNameToChange, setLastNameToChange,phoneNumberToChange, setPhoneNumberToChange,emailToChange, setEmailToChange,passwordToChange, setPasswordToChange,bioToChange, setBioToChange,isAdmin,setIsAdmin,namePet, setNamePet,imagePet, setImagePet,heightPet, setHeightPet,weightPet, setWeightPet,bioPet, setBioPet,dietaryPet, setDietaryPet,hypoallergenicPet, setHypoallergenicPet,colorsPet, setColorsPet,typesPet, setTypesPet,breedsPet, setBreedsPet, colorPet, typePet, breedPet}}>
    <ModalLogin/>
    <ModalRegister/>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/profile' element={<PrivateRouter isLoggedIn={isLoggedIn} userId={userId} ><Profile/></PrivateRouter> }/>
        <Route path='/mypets' element={<PrivateRouter isLoggedIn={isLoggedIn} userId={userId} ><MyPets/></PrivateRouter>}/>
        
        <Route path='/search' element={<Search/>}/>
        <Route path='/admin' element={<PrivateRouterAdmin isLoggedIn={isLoggedIn} userId={userId} ><AdminUsers/></PrivateRouterAdmin>}/>
        <Route path='/addpets' element={<PrivateRouterAdmin isLoggedIn={isLoggedIn} userId={userId} ><AddPets/></PrivateRouterAdmin>}/>
        <Route path='/petsdashboard' element={<PrivateRouterAdmin isLoggedIn={isLoggedIn} userId={userId} ><PetDashboard/></PrivateRouterAdmin>}/>
        <Route path='/historicaloperations' element={<PrivateRouterAdmin isLoggedIn={isLoggedIn} userId={userId} ><HistoricalOperations/></PrivateRouterAdmin>}/>
      </Routes>
      </BrowserRouter>
      </appContext.Provider>
      
      </div>
    </>
    
  );
}

export default App;
