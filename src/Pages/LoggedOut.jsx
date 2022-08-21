import React from "react";
import { useState } from "react";
import { Button } from "react-bootstrap";
import ModalLogin from "../Components/ModalLogin.jsx";
import ModalRegister from "../Components/ModalRegister.jsx";
import { useNavigate } from "react-router-dom";


export default function LoggedOut() {
  const [showModalRegister, setShowModalRegister] = useState(false);
  const [showModalLogin, setShowModalLogin] = useState(false);

  const handleCloseModalRegister = () => setShowModalRegister(false);
  const handleShowModalRegister = () => setShowModalRegister(true);
  const handleCloseModalLogin = () => setShowModalLogin(false);
  const handleShowModalLogin = () => setShowModalLogin(true);
  const navigate = useNavigate()
  function NavigateToSearchPage(){
   navigate('/search')
  }


  return (
    <>
    <div className="bg-dark mt-5 p-1">
    <h1 className="welcome-website text-light">Welcome to Pet Adoption Site</h1>
    </div>
       <div className="mt-5">
        <Button className="sign-in-btn" onClick={handleShowModalLogin}>Sign In</Button>
        <Button className="sign-up-btn" onClick={handleShowModalRegister}>Sign Up</Button>
        </div>
        <div className="mt-5 d-flex" >
        <p>Text explaining about the website</p>
        <img src='Images/picture_home.jpg' alt="" />
      </div>
        <div className="card-to-search mt-5 d-flex flex-column shadow p-2">
          <h5 className="text-danger ms-4">Are you looking for pets?</h5>
        <Button className="btn-search-pets ms-4" onClick={NavigateToSearchPage} >Search our Pets</Button>
        </div>
      <ModalRegister
        showModalRegister={showModalRegister}
        handleCloseModalRegister={handleCloseModalRegister}
        handleShowModalRegister={handleShowModalRegister}
        handleShowModalLogin = {handleShowModalLogin}
      />
      <ModalLogin
        showModalLogin={showModalLogin}
        handleCloseModalLogin={handleCloseModalLogin}
        handleShowModalLogin={handleShowModalLogin}
      />
    </>
  );
}
