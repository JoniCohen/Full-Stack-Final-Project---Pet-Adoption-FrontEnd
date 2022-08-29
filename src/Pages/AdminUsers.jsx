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
      console.log(res.data)
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
    }catch(err) {
      console.log(err);
    }
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
              <td>
              <Button onClick={SettingAdmin} value={user.id_user} >Make Admin</Button>
                </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  )
}

