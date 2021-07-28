import React, { useState, useEffect } from "react";
import axios from "axios";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import './style.css'
import avatar from '../../assets/avatar.png'

const ListUsers = () => {
  const [Users, setUsers] = useState([]);

  useEffect(() => {
    getUsers();
  }, []);

  const getUsers = () => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((Response) => setUsers(Response.data))
      .catch(console.error());
  };

  return (
    <div>
      <br />
      <h1>Users List Page</h1>
      <div className="global">
        {Users.map((user) => (
          <Link
            to={{
              pathname: `/ListUsers/${user.id}`,
              state: user,
            }}
            className="cardToLink"
          >
            <Card className="card">
              <Card.Header><img src={avatar} alt=" not found"    /></Card.Header>
              <Card.Body>
                <Card.Title>{user.name}</Card.Title>
                <Card.Text>
                  <span>{user.usermane}</span>
                  <span>{user.email}</span>
                  <span>{user.phone}</span>
                </Card.Text>
              </Card.Body>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ListUsers;
