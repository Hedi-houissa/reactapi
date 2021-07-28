import React, { useState } from "react";
import avatar from "../../assets/avatar.png";
import { Button } from "react-bootstrap";

import "./style.css";

const User = ({ location, history }) => {
  const [state, setstate] = useState(location.state);

  return (
    <div className="user">
      <img src={avatar} alt="not exist" />
      <h1>Name : {state.name} </h1>
      <h3>Username: {state.username}</h3>
      <h3>Email : {state.email}</h3>
      <h3>
        Adresse : {state.address.city} , {state.address.zipcode}
      </h3>
      <h3>Phone number : {state.phone}</h3>
      <Button variant="info" onClick={() => history.goBack()}>
        Go Back
      </Button>
    </div>
  );
};

export default User;
