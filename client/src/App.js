import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Wrapper from "./components/Wrapper/index";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Symptoms from "./pages/Symptoms";
import Diagnosis from "./pages/Diagnosis";

import './App.css';

function App() {
  return (
    <>
      <Router>
        <Wrapper>
          <Route exact path = {["/", "/signup"]} component={SignUp} />
          <Route exact path = "/login" component={Login} />
          <Route exact path = "/dashboard" component={Dashboard} />
          <Route exact path = "/symptoms" component={Symptoms} />
          <Route exact path = "/diagnosis" component={Diagnosis} />
          {/* <Route exact path = "/treatment" component={Treatment} /> */}
        </Wrapper> 
      </Router>
    </>
  );
}

export default App;
