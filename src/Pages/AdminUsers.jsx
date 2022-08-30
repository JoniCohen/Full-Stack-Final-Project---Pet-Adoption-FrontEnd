import React, { useEffect, useState } from "react";
import NavBarAdmin from "../Components/NavBarAdmin";
import LogOut from "../Components/logOut";
import axios from "axios";
import { Button } from "react-bootstrap";

export default function AdminUsers() {
  const [allUsers, setAllUsers] = useState([]);
 
  

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

  
  async function SettingAdmin(e){
    const idToMakeAdmin = e.target.value
    try{
      const makeAdmin={id_user:idToMakeAdmin,is_admin:1}
      const res = axios.put('http://localhost:8080/users/isadmin',makeAdmin)
      alert('The user is now an Admin')
      getAllUsers()
    }catch(err) {
      console.log(err);
    }
  }
  async function SettingUnadmin(e){
    const idToMakeUnadmin = e.target.value
    try{
    const makeUnadmin={id_user:idToMakeUnadmin,is_admin:0}
      const res = axios.put('http://localhost:8080/users/isadmin',makeUnadmin)
      alert('Now the user is not an Admin')
      getAllUsers()
    }catch(err) {
      console.log(err);
    }
  }
  
  function isAdmin(isAdmin){
    if(isAdmin){
      return 'Amin'
    }
    return 'Not Admin'
  }
  
  return (
    <>
      <NavBarAdmin />
      <LogOut />
      <table className="table">
        <tbody>
          {allUsers.map((user) => (
            <tr className="d-flex">
              <td>{user.first_name}</td>
              <td>{user.last_name}</td>
              <td>{user.email}</td>
              <td>{isAdmin(user.is_admin)} </td>
              <td>
              <Button onClick={SettingAdmin} value={user.id_user} hidden={user.is_admin===1 ? true : false} >Make Admin</Button>
                </td>
                <td>
              <Button onClick={SettingUnadmin} value={user.id_user} hidden={user.is_admin===0 ? true : false} >Unadmin</Button>
                </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  )
}

