import React, {useEffect, useState} from "react";
import { BrowserRouter as Router, Redirect, Route, Switch } from "react-router-dom";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Symptoms from "./pages/Symptoms";
import Diagnosis from "./pages/Diagnosis";
import OptomSignUp from "./pages/OptomSignUp";
import Optometrist from "./pages/Optometrist";
import OptomLogin from "./pages/OptomLogin";
import Management from "./pages/Management";
import Chat from "./pages/Chat";
import './App.css';
import API from "./utils/API";

function App() {

//User States
const [isLoggedIn, setIsLoggedIn] = useState(false);
const [userInfo, setUserInfo] = useState("");

//Optom States
const [optomLoggedIn, setOptomLoggedIn] = useState(false);
const [optom, setOptom] = useState({});

//Waiting to render page before showing routes
const [isLoading, setIsLoading] = useState(true);
const [optomIsLoading, setOptomIsLoading] = useState(true);

  useEffect(() => {
    API.currentUser()
        .then(res => {
           console.log("user auth res.data", res.data)
           if(res.data.email) {
              setIsLoggedIn(true); 
              setUserInfo(res.data)
           }
           setIsLoading(false);
        })
        .catch((err) => {
           window.location.href='/login'
        })
   }, [])

   useEffect(() => {
     API.currentOptomUser()
     .then(res => {
       console.log("optom auth res.data", res.data)
       if(res.data.email) {
          setOptomLoggedIn(true);
          setOptom(res.data)
       }
       setOptomIsLoading(false);
     })
     .catch((err) => {
       window.location.href="/optomlogin"
     })
   }, [])


   if (isLoading) {
     return (
      <div></div>
     )
     
   }

   if (optomIsLoading){
     return (
       <div></div>
     )
   }

  return (
    <>
      <Router>
        <Switch>
          <Route exact path = {["/", "/signup"]} component={SignUp} />
          <Route path = "/optomsignup" component={OptomSignUp} />
          <Route path = "/login" >
            <Login setIsLoggedIn={setIsLoggedIn} /></Route>

          {console.log("User is logged in", isLoggedIn)}
          {console.log("Optom is logged in ", optomLoggedIn)}
          <Route path = "/optomlogin">
            <OptomLogin setOptomLoggedIn={setOptomLoggedIn} setOptom={setOptom}/></Route>
          <Route path = "/optometrist" >
                          { optomLoggedIn ? <Optometrist optom={optom}/> : <Redirect to="/optomlogin"/>}</Route>
          <Route path = "/dashboard"  userInfo={userInfo}>
                          { isLoggedIn ? <Dashboard/> : <Redirect to="/login"/>}</Route>
          <Route path = "/symptoms">
                          { isLoggedIn ? <Symptoms/> : <Redirect to="/login"/>}</Route>
          <Route path = "/diagnosis" >
                          { isLoggedIn ? <Diagnosis/> : <Redirect to="/login"/>}</Route>
          <Route path = "/chat" >
                          { (isLoggedIn || optomLoggedIn) ? <Chat optom={optom} optomLoggedIn={optomLoggedIn}/> : <Redirect to="/login"/>}</Route>
          <Route path = "/management" >
                          { isLoggedIn ? <Management/> : <Redirect to="/login"/>}</Route>
        </Switch> 
      </Router>
    </>
  );
}

export default App;
