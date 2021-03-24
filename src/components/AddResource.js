import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import { useState } from "react";
import axios from 'axios';
import { userContext } from "../util/userContext";
import  { useHistory } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  container: {
    padding: theme.spacing(3),
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
  },
}));

export default function AddResource() {
  let history = useHistory();
  const classes = useStyles();
  const [formData, setFormData] = useState({
      source: '',
      funding_name: '',
      description: '',
      amount: '',
      contact_person: '',
      web: '',
      eligible: '',
      deadline: '',
      is_approved: false
  }) 
  
  function handleChange(e) {
      e.preventDefault()
      setFormData({...formData, [e.target.id]: e.target.value})
  }

  function handleSubmit(e) {
    e.preventDefault()
    axios
    .post(
      "https://frozen-tor-16945.herokuapp.com/resource", 
      {
        resource: formData
      },{
        withCredentials: true
      },
    )
    .then(res => {
      console.log('AddResource.js resource -> ' + res);
      history.push("/");
    })
    .catch(err => {
      console.log(err)
    })
  }

  return (
    <userContext.Consumer>
      {(user) => (
        <Container className={classes.container} maxWidth="xs">
        <form>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    label="Source"
                    id="source"
                    size="small"
                    variant="outlined"
                    required={true}
                    onChange = {handleChange}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    label="Funding Name"
                    id="funding_name"
                    size="small"
                    variant="outlined"
                    required={true}
                    onChange = {handleChange}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    label="Description"
                    id="description"
                    size="medium"
                    variant="outlined"
                    required={true}
                    onChange = {handleChange}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    label="Amount"
                    id="amount"
                    size="small"
                    variant="outlined"
                    required={false}
                    onChange = {handleChange}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    label="Contact Person"
                    id="contact_person"
                    size="small"
                    variant="outlined"
                    required={true}
                    onChange = {handleChange}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    label="Website Address"
                    id="web"
                    size="small"
                    variant="outlined"
                    required={false}
                    onChange = {handleChange}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    label="Eligible"
                    id="eligible"
                    size="small"
                    variant="outlined"
                    required={false}
                    onChange = {handleChange}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    label="Deadline"
                    id="deadline"
                    size="small"
                    variant="outlined"
                    required={false}
                    onChange = {handleChange}
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
                value="Submit"
                onClick = {handleSubmit}
              >
                Submit
              </Button>
            </Grid>
          </Grid>
        </form>
      </Container>)} 
    </userContext.Consumer>
  );
}
