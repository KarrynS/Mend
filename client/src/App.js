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
const [isLoggedIn, setIsLoggedIn] = useState(false);

// const [optomLoggedIn, setOptomLoggedIn] = useState(false);

const [userInfo, setUserInfo] = useState("");

const [isLoading, setIsLoading] = useState(true);

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
        // .catch((err) => {
        //    window.location.href='/login'
        // })
   }, [])

  //  useEffect(() => {
  //    API.currentOptomUser()
  //    .then(res => {
  //      console.log("optom auth res.data", res.data)
  //    })
  //  })

   const redirect = ()  => {
     if (window.location.pathname.includes("/login") === false & isLoggedIn === false){
      // window.location.href="/login"
      // setIsLoggedIn(false)
     }
 
   }
   if (isLoading) {
     return (
      <div></div>
     )
     
   }
  return (
    <>
      <Router>
        <Switch>
          <Route exact path = {["/", "/signup"]} component={SignUp} />
          <Route path = "/login" >
            <Login setIsLoggedIn={setIsLoggedIn} />
            
          </Route>
          {console.log("isloggedin", isLoggedIn)}
            <>
          <Route path = "/optomlogin" component={OptomLogin} />
          <Route path = "/optomsignup" component={OptomSignUp} />
          <Route path = "/optometrist" component={Optometrist}>
                          { isLoggedIn ? <Optometrist/> : <Redirect to="/optomlogin"/>}</Route>
          <Route path = "/dashboard"  userInfo={userInfo}>
                          { isLoggedIn ? <Dashboard/> : <Redirect to="/login"/>}</Route>
          <Route path = "/symptoms" component={Symptoms}></Route>
          <Route path = "/diagnosis" component={Diagnosis} />
          <Route path = "/chat" component={Chat} />
          <Route exact path = "/management" component={Management} />

            </>
        
    
     
         
        </Switch> 
      </Router>
    </>
  );
}

export default App;
