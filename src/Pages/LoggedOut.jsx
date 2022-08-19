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
      <h1 className="welcome-website text-danger">Welcome to Pet Adoption Site</h1>
      <div className="mt-5">
        <Button className="sign-in-btn" onClick={handleShowModalLogin}>Sign In</Button>
        <Button className="sign-up-btn" onClick={handleShowModalRegister}>Sign Up</Button>
        </div>
        <div className="mt-5 d-flex">
          <h2 className="text-danger">Do you want to adopt or foster a pet?</h2>
        <Button className="ms-4" onClick={NavigateToSearchPage} >Search our Pets</Button>
        </div>
        <div className="mt-5">
        <p>Text explaining about the website</p>
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
