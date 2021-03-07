import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import {Redirect} from "react-router-dom";
import axios from "axios";
import { useState , useEffect } from "react";
import ButtonAppBar from "./Navbar";
import PropTypes from 'prop-types'
import {userContext} from '../util/userContext.js'
import { useHistory } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  container: {
    padding: theme.spacing(3),
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
  },
}));


export default function Logout({updateUserData}){
  const classes = useStyles();
  let history = useHistory();

  useEffect(() => {
    axios
        .delete(
          "https://frozen-tor-16945.herokuapp.com/logout",
          { withCredentials: true }
        )
        .then((response) => {
          console.log("logout res", response);
          updateUserData({
            logged_in: false
          });
        })
        .catch((error) => {
          console.log("logout error", error);
        });
      },[]);

  return (
    <container>
      <div>
        <h1>You have successfully logged out</h1>
        <Button onClick={() => {
            history.push("/login");
          }
        }
          color="secondary"
          fullWidth
          type="submit"
          variant="contained">
          Log in
        </Button>
        <Button onClick={() => {
            history.push("/");
          }
        }
          color="secondary"
          fullWidth
          type="submit"
          variant="contained">
          Return to Home
        </Button>
      </div>
    </container>
  )
}