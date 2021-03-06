import FundingResourcesTable from "./components/FundingResourcesTable";
import Navbar from "./components/Navbar";
import LoginForm from "./components/LoginForm";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import SignUpForm from "./components/SignUpForm";
import "./styles/App.css";
<<<<<<< HEAD
import Registration from "./components/auth/Registration";
import AddResource from "./components/AddResource"
=======
import {useState, useEffect} from 'react';
import { userContext } from "./util/userContext";
import axios from "axios";
>>>>>>> 751f8befc4f840ab3781491ded2202d15d44f6d3

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
        updateUserContext(response.data);
        console.log(user);
      })
      .catch((error) => {
        console.log("registration error", error);
      });
  },[]);
  
  return (
<<<<<<< HEAD
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route exact path="/" component={FundingResourcesTable}></Route>
        <Route exact path="/login" component={LoginForm}></Route>
        <Route exact path="/signup" component={SignUpForm}></Route>
        <Route exact path="/signup1" component={Registration}></Route>
        <Route exact path="/add" component={AddResource}></Route>
        <Route path="/" render={() => <div>404</div>} />
      </Switch>
    </BrowserRouter>
=======
    <userContext.Provider value={user}>
      <BrowserRouter>
        <Navbar/>
        <Switch>
          <Route exact path="/" component={() => <FundingResourcesTable updateUserData = {updateUserContext}/>}></Route>
          <Route exact path="/login" component={() => <LoginForm updateUserData = {updateUserContext} />}></Route>
          <Route exact path="/signup" component={() => <SignUpForm updateUserData = {updateUserContext}/>}></Route>
          <Route path="/" render={() => <div>404</div>} />
        </Switch>
      </BrowserRouter>
    </userContext.Provider>
>>>>>>> 751f8befc4f840ab3781491ded2202d15d44f6d3
  );
}
