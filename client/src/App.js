import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Symptoms from "./pages/Symptoms";
import Diagnosis from "./pages/Diagnosis";
import OptomSignUp from "./pages/OptomSignUp";
import Optometrist from "./pages/Optometrist";

import './App.css';
import OptomLogin from "./pages/OptomLogin";

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path = {["/", "/signup"]} component={SignUp} />
          <Route exact path = "/login" component={Login} />
          <Route exact path = "/optomlogin" component={OptomLogin} />
          <Route exact path = "/optomsignup" component={OptomSignUp} />
          <Route exact path = "/optometrist" component={Optometrist} />
          <Route exact path = "/dashboard" component={Dashboard} />
          <Route exact path = "/symptoms" component={Symptoms} />
          <Route exact path = "/diagnosis" component={Diagnosis} />
          {/* <Route exact path = "/treatment" component={Treatment} /> */}
        </Switch> 
      </Router>
    </>
  );
}

export default App;
