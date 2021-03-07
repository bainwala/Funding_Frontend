import FundingResourcesTable from "./components/FundingResourcesTable";
import Navbar from "./components/Navbar";
import LoginForm from "./components/LoginForm";
import Logout from "./components/Logout";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import SignUpForm from "./components/SignUpForm";
import "./styles/App.css";
import {useState, useEffect} from 'react';
import { userContext } from "./util/userContext";
import axios from "axios";

export default function App() {
  const [user, setUser] = useState({})
  
  const updateUserContext = (userData) => {
    setUser(userData)
  }

  useEffect(() => {
    console.log("Hello first");
    axios
      .get(
        "https://frozen-tor-16945.herokuapp.com/logged_in",
        { withCredentials: true,
          credentials: 'same-origin'
        }
      )
      .then((response) => {
        console.log("registration res", response);
        updateUserContext(response);
        console.log(user);
      })
      .catch((error) => {
        console.log("registration error", error);
      });
  },[]);
  
  return (
    <userContext.Provider value={user}>
      <BrowserRouter>
        <Navbar/>
        <Switch>
          <Route exact path="/" component={() => <FundingResourcesTable updateUserData = {updateUserContext}/>}></Route>
          <Route exact path="/login" component={() => <LoginForm updateUserData = {updateUserContext} />}></Route>
          <Route exact path="/logout" component={() => <Logout updateUserData = {updateUserContext} />}></Route>
          <Route exact path="/signup" component={() => <SignUpForm updateUserData = {updateUserContext}/>}></Route>
          <Route path="/" render={() => <div>404</div>} />
        </Switch>
      </BrowserRouter>
    </userContext.Provider>
  );
}
