import "./App.css";
import React, { useState } from 'react'
import Navbar from "./content/Navbar";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import Home from "./content/Home";
import ListUsers from "./content/user/ListUsers";
import Admin from "./content/admin/Admin";
import User from "./content/user/User";
import PrivatRoute from "./content/admin/PrivatRoute";

function App() {
  const [isAuth, setIsAuth] = useState(false);


  return (
    <Router>
      <div className="App">
        <Navbar isAuth={isAuth} setIsAuth={setIsAuth} />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/ListUsers" component={ListUsers} />
          <Route exact path="/ListUsers/:id" component={User} />
          <PrivatRoute exact path="/Admin" component={Admin} isAuth={isAuth} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
