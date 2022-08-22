import React from "react";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";

export const Home = () => {
  const [users, setUser] = useState([]);

  useEffect(() => {
    loadUsers();
  }, []);

  const loadUsers = async () => {
    const result = await axios.get("http://localhost:8008/users");
    setUser(result.data);
  };

  return (
    <div className="container">
      <div className="py-4">
        <h1>Home Page</h1>
        <table class="table border shadow">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Name</th>
              <th scope="col">Username</th>
              <th scope="col">email</th>
            </tr>
          </thead>
          <tbody>
           
             {
              users.map((user,index)=> (
                <tr>
                <th scope="row">{index+1}</th>
                <td>{user.name}</td>
                <td>{user.username}</td>
                <td>{user.email}</td>
                <td>
                  {/* <Link class="btn btn-primary mr-2">View</Link>
                  <Link class="btn btn-primary mr-2">Edit</Link>
                  <Link class="btn btn-danger">Delete</Link> */}
                  <button type="button" class="btn btn-danger">Danger</button>
                </td>
                </tr>
              ))
             }
          </tbody>
        </table>
      </div>
    </div>
  );
};
