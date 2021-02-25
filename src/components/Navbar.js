import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { useHistory } from "react-router-dom";

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

export default function ButtonAppBar() {
  const classes = useStyles();
  let history = useHistory();

  return (
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
                history.push("/signup1");
              }}
              color="inherit"
            >
              Sign Up
            </Button>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}
