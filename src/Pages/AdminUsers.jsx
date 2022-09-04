import React, { useEffect, useState } from "react";
import NavBarAdmin from "../Components/NavBarAdmin";
import LogOut from "../Components/logOut";
import axios from "axios";
import { Button } from "react-bootstrap";
import ModalPetByUser from "../Components/ModalPetByUser";

export default function AdminUsers() {
  const [allUsers, setAllUsers] = useState([]);
  const [modalPetByUserShow, setModalPetByUserShow] = useState(false);
  const [userDetails, setUserDetails] = useState([])

  async function getAllUsers() {
    try {
      const res = await axios.get("http://localhost:8080/users");
      setAllUsers(res.data);
      
      
    } catch (err) {
      console.log(err);
    }
  }
  useEffect(() => {
    getAllUsers();
    
  },[]);

  async function getPetsByUser(e){
    const userId = e.target.value
    try{
      const res = await axios.get('http://localhost:8080/pets/petsbyuser/'+userId,{withCredentials:true})
      setModalPetByUserShow(true)
        setUserDetails(res.data)
    }catch (err) {
      console.log(err);
    }
  }
  useEffect(() => {
    getPetsByUser();
    
  },[]);
  
  async function SettingAdmin(e){
    const idToMakeAdmin = e.target.value
    try{
      const makeAdmin={id_user:idToMakeAdmin,is_admin:1}
      const res = await axios.put('http://localhost:8080/users/isadmin',makeAdmin,{withCredentials:true})
      if(res){
        alert('The user is now an Admin')
        getAllUsers()
      }
       }catch(err) {
      console.log(err);
    }
  }
  async function SettingUnadmin(e){
    const idToMakeUnadmin = e.target.value
    try{
    const makeUnadmin={id_user:idToMakeUnadmin,is_admin:0}
      const res = await axios.put('http://localhost:8080/users/isadmin',makeUnadmin,{withCredentials:true})
      if(res){
        alert('Now the user is not an Admin')
        getAllUsers()
      }
      
    }catch(err) {
      console.log(err);
    }
  }
  
  function isAdmin(isAdmin){
    if(isAdmin){
      return 'Admin'
    }
    return 'Not Admin'
  }
  
  return (
    <>
    <ModalPetByUser
        show={modalPetByUserShow}
        onHide={() => setModalPetByUserShow(false)}
        userDetails={userDetails}
      />
      <NavBarAdmin />
      <LogOut />
      <table className="table">
      <thead>
      <tr>
      <th className='petsDashboard-name'>User Details</th>
        <th className='petsDashboard-name'>First Name</th>
        <th className='petsDashboard-status'>Last Name</th>
        <th className='petsDashboard-color'>Email</th>
        <th className='petsDashboard-breed'>Phone Number</th>
        <th className='petsDashboard-type'>Is Admin</th>
      </tr>
      </thead>
        <tbody>
          {allUsers.map((user) => (
            <tr key={user.id_user}>
              <td><Button value={user.id_user} onClick={getPetsByUser}>Details</Button></td>
              <td>{user.first_name}</td>
              <td>{user.last_name}</td>
              <td>{user.email}</td>
              <td>{user.phone_number}</td>
              <td>{isAdmin(user.is_admin)} </td>
              <td>
              <Button onClick={SettingAdmin} value={user.id_user} hidden={user.is_admin===1 ? true : false} >Make Admin</Button>
                </td>
                <td>
              <Button className="btn-unadmin" onClick={SettingUnadmin} value={user.id_user} hidden={user.is_admin===0 ? true : false} >Unadmin</Button>
                </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  )
}

