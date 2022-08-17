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
import { useState } from 'react';
import PrivateRouter from './Components/PrivateRouter';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [userId, setUserId] = useState('')


  return (
    <>
    <div className="App">
    <appContext.Provider value={{isLoggedIn,setIsLoggedIn,userId,setUserId}}>
    <ModalLogin/>
    <ModalRegister/>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/profile' element={<PrivateRouter isLoggedIn={isLoggedIn}><Profile/></PrivateRouter> }/>
        <Route path='/mypets' element={<PrivateRouter isLoggedIn={isLoggedIn} ><MyPets/></PrivateRouter>}/>
        
        <Route path='/search' element={<Search/>}/>
      </Routes>
      </BrowserRouter>
      </appContext.Provider>
      
      </div>
    </>
    
  );
}

export default App;
