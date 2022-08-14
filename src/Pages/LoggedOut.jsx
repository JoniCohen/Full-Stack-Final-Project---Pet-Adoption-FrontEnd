import React from "react";
import { useState } from "react";
import { Button } from "react-bootstrap";
import ModalLogin from "../Components/ModalLogin.jsx";
import ModalRegister from "../Components/ModalRegister.jsx";

export default function LoggedOut() {
  const [showModalRegister, setShowModalRegister] = useState(false);
  const [showModalLogin, setShowModalLogin] = useState(false);

  const handleCloseModalRegister = () => setShowModalRegister(false);
  const handleShowModalRegister = () => setShowModalRegister(true);
  const handleCloseModalLogin = () => setShowModalLogin(false);
  const handleShowModalLogin = () => setShowModalLogin(true);


  return (
    <>
      <div>
        <Button onClick={handleShowModalLogin}>Sign In</Button>
        <Button onClick={handleShowModalRegister}>Sign Up</Button>
        <Button>Search Pets</Button>
        <h1>Welcome to Pet Adoption Site</h1>
        <p>Text explaining about the website</p>
      </div>
      <ModalRegister
        showModalRegister={showModalRegister}
        handleCloseModalRegister={handleCloseModalRegister}
        handleShowModalRegister={handleShowModalRegister}
      />
      <ModalLogin
        showModalLogin={showModalLogin}
        handleCloseModalLogin={handleCloseModalLogin}
        handleShowModalLogin={handleShowModalLogin}
      />
    </>
  );
}
