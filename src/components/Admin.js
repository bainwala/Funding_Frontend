import {userContext} from '../util/userContext.js'
import AppBar from "@material-ui/core/AppBar";
import { makeStyles } from "@material-ui/core/styles";
import Toolbar from "@material-ui/core/Toolbar";
import React from "react";
import { useHistory } from "react-router-dom";
import PropTypes from "prop-types";
import {useEffect, useState} from 'react';
import Button from "@material-ui/core/Button";
import axios from "axios";

export default function Admin (){
    let history = useHistory();
    const [unapprovedResources, setUnapprovedResources] = useState([])
    let updateOccured = false;
    const updateUnapprovedResources = (adminData) => {
        setUnapprovedResources(adminData)
    }
    
    const putRequest = () => {
        axios
        .get("https://frozen-tor-16945.herokuapp.com/admin/resource", {
            withCredentials: true
        })
        .then((response) => {
            // setAdminData(response);
            updateUnapprovedResources(response.data)
            console.log(unapprovedResources);
        })
        .catch((err) => {
            console.error(err);
        });
    }

    const toggleApprove = (row_id) => {
        let arr;
        axios
        .put(`https://frozen-tor-16945.herokuapp.com/admin/resource/${row_id}`,{
            is_approved: true
        } ,{
            withCredentials: true
        })
        .then((response) => {
            putRequest();
            console.log(response.data);
            console.log(unapprovedResources);
        })
        .catch((err) => {
            console.error(err);
        });
    }

    

    useEffect(() => {
        putRequest();
    }, []);
    
    return (<>
    <h1>All Unapproved Resources</h1>
    <h4>Funding Name___Amount</h4>
        {unapprovedResources.map((row) => (
            <div>
            <p key={row.id}>{row.funding_name}___________________________{row.amount}</p>
            <button
                onClick={() => {
                      toggleApprove(row.id)
                  }}
                  background-color="red"
                >
                  Approve
            </button>
            <button
                  onClick={() => {
                  }}
                  background-color="red"
                >
                  Delete
            </button>
            
            </div>
        ))}
    </>)
}