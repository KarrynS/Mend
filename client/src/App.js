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
          <Route path = "/login" component={Login} />
          <Route path = "/optomlogin" component={OptomLogin} />
          <Route path = "/optomsignup" component={OptomSignUp} />
          <Route path = "/optometrist" component={Optometrist} />
          <Route path = "/dashboard" component={Dashboard} />
          <Route path = "/symptoms" component={Symptoms} />
          <Route path = "/diagnosis" component={Diagnosis} />
          {/* <Route exact path = "/treatment" component={Treatment} /> */}
        </Switch> 
      </Router>
    </>
  );
}

export default App;
