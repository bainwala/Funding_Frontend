import axios from "axios";
import React, { useEffect, useState } from "react";
import FileViewModal from "./FileViewModal"
import Button from '@material-ui/core/Button';
import DeleteIcon from '@material-ui/icons/Delete';
import { makeStyles } from '@material-ui/core/styles';
import SendIcon from '@material-ui/icons/Send';
import ViewAgendaIcon from '@material-ui/icons/ViewAgenda';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(1),
  },

  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: "white",
    backgroundColor: "#f50057"
  },

  approve: {
    margin: theme.spacing(1),
    backgroundColor: "green",
    color: "white",
    '&:hover': {backgroundColor: "darkgreen"}
  }
}));

export default function Admin() {
  const [unapprovedResources, setUnapprovedResources] = useState([]);
  const [modalShow, setModalShow] = useState(false);
  const [modalInfo, setModalInfo] = useState({});

  const classes = useStyles();

  const getRequest = () => {
    axios
      .get("https://frozen-tor-16945.herokuapp.com/admin/resource", {
        withCredentials: true,
      })
      .then((response) => {
        console.log('Admin.js admin/resource -> ' + JSON.stringify(response.data, null , 2));
        setUnapprovedResources(response.data);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  const toggleApprove = (row_id) => {
    axios
      .put(
        `https://frozen-tor-16945.herokuapp.com/admin/resource/${row_id}`,
        {
          is_approved: true,
        },
        {
          withCredentials: true,
        }
      )
      .then((response) => {
        console.log('Admin.js toggleApprove -> ' + JSON.stringify(response, null, 2));
        getRequest();
      })
      .catch((err) => {
        console.error(err);
      });
  };

  const toggleDelete = (row_id) => {
    axios
      .delete(
        `https://frozen-tor-16945.herokuapp.com/admin/resource/${row_id}`,
        {
          withCredentials: true,
        }
      )
      .then((response) => {
        console.log('Admin.js delete -> ' + JSON.stringify(response, null , 2));
        getRequest();
      })
      .catch((err) => {
        console.error(err);
      });
  }

  

  useEffect(() => {
    getRequest();
  }, []);

  return (
    <div className="container pb-3 mt-4">
      <div className="container text-center mt-5">
        <h1>All Unapproved Resources</h1>
      </div>
      {unapprovedResources.length>0 ? 
        (unapprovedResources.map((row) => (
            <div className="container mt-5">
              <Grid container spacing={3}>
                <Grid item xs={12}>
                  <Paper className={classes.paper}>
                    <div key={row.id}>
                      <h5><b>Name: </b>{row.funding_name}</h5>
                      <h5><b>Amount: </b>{row.amount}</h5>
                    </div>
                  </Paper>
                </Grid>
              </Grid>

              <Button
                variant="contained" 
                color="primary" 
                className={classes.button} 
                startIcon={<ViewAgendaIcon/>}
                onClick={() => {
                  setModalShow(true)
                  setModalInfo(row)
                }}
              >
                View
              </Button>
              <FileViewModal
                show={modalShow}
                onHide={() => setModalShow(false)}
                info={modalInfo}
              />
              <Button
                variant="contained"
                className={classes.approve}
                endIcon={<SendIcon/>}
                onClick={() => {
                  toggleApprove(row.id);
                }}>
                Approve
              </Button>
              
              <Button 
                variant="contained" 
                color="secondary" 
                className={classes.button} 
                startIcon={<DeleteIcon/>} 
                onClick={() => {
                  toggleDelete(row.id);
                }}>
                Delete
              </Button>
            </div>
        ))
      ):(
          <div className="container mt-5">
            <Grid container spacing={3}>
              <Grid item xs={12}>
                <Paper className={classes.paper}>
                  <div>
                    <h5>You do not have any unapproved resources yet!</h5>
                  </div>
                </Paper>
              </Grid>
            </Grid>
          </div>
      )}
    </div>
  );
}
