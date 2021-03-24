import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  container: {
    padding: theme.spacing(3),
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
  },
}));

export default function SignUpForm() {
  const classes = useStyles();
  const [signUpFormData, setSignUpFormData] = useState({
    email: "",
    password: "",
    password_confirmation: "",
    registrationErrors: "",
  });

  const handleChange = (e) => {
    const tempObj = {};
    tempObj[e.target.name] = e.target.value;
    setSignUpFormData((prev) => Object.assign(prev, tempObj));
    console.log(signUpFormData);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { email, password, password_confirmation } = signUpFormData;

    console.log(email, password, password_confirmation);

    axios
      .post(
        "https://frozen-tor-16945.herokuapp.com/registrations",
        {
          user: {
            email: email,
            password: password,
            password_confirmation: password_confirmation,
          },
        },
        { withCredentials: true }
      )
      .then((response) => {
        console.log("SignUpForm.js registrations -> " + JSON.stringify(response, null , 2));
      })
      .catch((error) => {
        console.log("registration error", error);
      });
  };
  return (
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
                  type="email"
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
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Confirm Password"
                  name="password_confirmation"
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
              Sign up
            </Button>
          </Grid>
        </Grid>
        <div style={{ marginTop: "1em" }}>
          Already have an account? <Link to="/login">Log in.</Link>
        </div>
      </form>
    </Container>
  );
}
