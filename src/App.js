import FundingResourcesTable from "./components/FundingResourcesTable";
import Navbar from "./components/Navbar";
import LoginForm from "./components/LoginForm";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import SignUpForm from "./components/SignUpForm";
import "./styles/App.css";
import {useState, useEffect} from 'react';
import { userContext } from "./util/userContext";
import axios from "axios";
import AddResource from "./components/AddResource";
import Admin from "./components/Admin";

export default function App() {
  const [user, setUser] = useState({})
  

  const updateUserContext = (userData) => {
    setUser(userData)
  }


  useEffect(() => {
    axios
      .get(
        "https://frozen-tor-16945.herokuapp.com/logged_in",
        { withCredentials: true,
          credentials: 'same-origin'
        }
      )
      .then((response) => {
        console.log("App.js logged_in -> " + JSON.stringify(response.data, null ,2));
        updateUserContext(response.data);
      })
      .catch((error) => {
        console.log("app error", error);
      }); 
  },[]);
  
  return (
    <userContext.Provider value={user}>
      <BrowserRouter>
        <Navbar updateUserData = {updateUserContext} />
        <Switch>
          <Route exact path="/admin" component={Admin }></Route>
          <Route exact path="/add" component={AddResource}></Route>
          <Route exact path="/" component={() => <FundingResourcesTable updateUserData = {updateUserContext}/>}></Route>
          <Route exact path="/login" component={() => <LoginForm updateUserData = {updateUserContext} />}></Route>
          <Route exact path="/signup" component={() => <SignUpForm updateUserData = {updateUserContext}/>}></Route>
          <Route path="/" render={() => <div>404</div>} />
        </Switch>
      </BrowserRouter>
    </userContext.Provider>
  );
}
