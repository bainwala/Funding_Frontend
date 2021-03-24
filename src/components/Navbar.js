import AppBar from "@material-ui/core/AppBar";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import Toolbar from "@material-ui/core/Toolbar";
import React from "react";
import { useHistory } from "react-router-dom";
import { userContext } from "../util/userContext.js";
import axios from "axios";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  appBar: {
    backgroundColor: "#121212",
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  logo: {
    cursor: "pointer",
    height: "3em",
  },
  menuItems: {
    position: "fixed",
    right: 0,
  },
}));

export default function ButtonAppBar({updateUserData}) {
  const classes = useStyles();
  let history = useHistory();

  const deleteSession = () => {
    axios
          .delete(
            "https://frozen-tor-16945.herokuapp.com/logout",
            { withCredentials: true }
          )
          .then((response) => {
            console.log("Navbar.js logout -> " + JSON.stringify(response, null, 2));
            updateUserData({
              logged_in: false,
              user:{}
            });
          })
          .catch((error) => {
            console.log("logout error", error);
          });
  }

  return (
    <userContext.Consumer>
      {(user) => (
        <div className={classes.root}>
          <AppBar className={classes.appBar} position="static">
            <Toolbar>
              <img
                alt="logo"
                src="CFR_Logo.png"
                className={classes.logo}
                onClick={() => {
                  history.push("/");
                }}
              ></img>
              <div className={classes.menuItems}>
              {user.logged_in && user.user.is_admin ? (
                <Button
                  onClick={() => {
                    history.push("/admin");
                  }}
                  color="inherit"
                >
                  Admin
                </Button>
              ):(null)}
              {user.logged_in ? (
                <Button
                  onClick={() => {
                    deleteSession();
                    history.push("/");
                  }}
                  color="inherit"
                >
                  Logout
                </Button>
              ) : (
                <div>
                  <Button
                    onClick={() => {
                      history.push("/login");
                    }}
                    color="inherit"
                  >
                    Login
                  </Button>
                  <Button
                    onClick={() => {
                      history.push("/signup");
                    }}
                    color="inherit"
                  >
                    Sign Up
                  </Button>
                  </div>
              )}
              </div>
            </Toolbar>
          </AppBar>
        </div>
      )}
    </userContext.Consumer>
  );
}

ButtonAppBar.defaultProps = {
  logged_in: false,
};
