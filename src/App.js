import FundingResourcesTable from "./components/FundingResourcesTable";
import Navbar from "./components/Navbar";
import LoginForm from "./components/LoginForm";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import SignUpForm from "./components/SignUpForm";
import "./styles/App.css";
import Registration from "./components/auth/Registration";
import AddResource from "./components/AddResource"

export default function App() {
  return (
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
  );
}
