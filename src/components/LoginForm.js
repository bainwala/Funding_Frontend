import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import {Redirect} from "react-router-dom";
import axios from "axios";
import { useState } from "react";
import {userContext} from '../util/userContext.js';

const useStyles = makeStyles((theme) => ({
  container: {
    padding: theme.spacing(3),
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
  },
}));

export default function LoginForm({updateUserData, user}) {
  const classes = useStyles();
  const [LoginFormData, setLoginFormData] = useState({
    email: "",
    password: ""
  });


  const handleChange = (e) => {
    const tempObj = {};
    tempObj[e.target.name] = e.target.value;
    setLoginFormData((prev) => Object.assign(prev, tempObj));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { email, password } = LoginFormData;

    axios
      .post(
        "https://frozen-tor-16945.herokuapp.com/sessions",
        {
          user: {
            email: email,
            password: password
          },
        },
        { 
          withCredentials: true, 
          credentials: 'same-origin'
        }
      )
      .then((response) => {
        console.log("LoginForm.js sessions -> " + JSON.stringify(response.data, null, 2));
        updateUserData(response.data)
      })
      .catch((error) => {
        console.log("login error", error);
      });
    }

  return (
    <userContext.Consumer>
      {(user) => (
        <Container className={classes.container} maxWidth="xs">
          <form onSubmit={handleSubmit}>
            <Grid container spacing={3}>
              <Grid item xs={12}>
                <Grid container spacing={2}>
                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      label="Email"
                      name="email"
                      size="small"
                      variant="outlined"
                      required={true}
                      onChange={handleChange}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      label="Password"
                      name="password"
                      size="small"
                      type="password"
                      variant="outlined"
                      required={true}
                      onChange={handleChange}
                    />
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={12}>
                <Button
                  color="secondary"
                  fullWidth
                  type="submit"
                  variant="contained"
                >
                  Log in
                </Button>
              </Grid>
            </Grid>
            <div style={{ marginTop: "1em" }}>
              Don't have an account? <Link to="/signup">Create one now.</Link>
            </div>
          </form>
          {user.logged_in ?  
            <Redirect to='/'/>:
            null
          }
        </Container>
      )}</userContext.Consumer>
  );
}
