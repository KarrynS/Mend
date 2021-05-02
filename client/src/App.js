import React, {useEffect, useState} from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
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

  useEffect(() => {
    API.currentUser()
        .then(res => {
           console.log("res.data", res.data)
           if(res.data.email) {
              setIsLoggedIn(true); 
           }
        })
        // .catch((err) => {
        //    window.location.href='/login'
        // })
   }, [])

   const redirect = ()  => {
     if (window.location.pathname.includes("/login") === false&isLoggedIn===false){
      // window.location.href="/login"
      setIsLoggedIn(false)

     }
 
   }
  return (
    <>
      <Router>
        <Switch>
          <Route exact path = {["/", "/signup"]} component={SignUp} />
          <Route path = "/login">
            <Login setIsLoggedIn={setIsLoggedIn}/>
            
          </Route>
          {console.log("isloggedin", isLoggedIn)}
         {/* {isLoggedIn ? ( */}
            <>
          <Route path = "/optomlogin" component={OptomLogin} />
          <Route path = "/optomsignup" component={OptomSignUp} />
          <Route path = "/optometrist" component={Optometrist} />
          <Route path = "/dashboard" component={Dashboard} />
          <Route path = "/symptoms" component={Symptoms} />
          <Route path = "/diagnosis" component={Diagnosis} />
          <Route path = "/chat" component={Chat} />
          <Route exact path = "/management" component={Management} />

            </>
         {/* ) : 
            redirect()
         } */}
         
        </Switch> 
      </Router>
    </>
  );
}

export default App;
