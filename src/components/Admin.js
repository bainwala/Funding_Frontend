import axios from "axios";
import React, { useEffect, useState } from "react";
import FileViewModal from "./FileViewModal"

export default function Admin() {
  const [unapprovedResources, setUnapprovedResources] = useState([]);
  const [modalShow, setModalShow] = useState(false);

  const getRequest = () => {
    axios
      .get("https://frozen-tor-16945.herokuapp.com/admin/resource", {
        withCredentials: true,
      })
      .then((response) => {
        // setAdminData(response);
        setUnapprovedResources(response.data);
        console.log(unapprovedResources);
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
        getRequest();
        console.log(response.data);
        console.log(unapprovedResources);
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
        getRequest();
        console.log(response.data);
        console.log(unapprovedResources);
      })
      .catch((err) => {
        console.error(err);
      });
  }


  useEffect(() => {
    getRequest();
  }, []);

  return (
    <>
      <h1>All Unapproved Resources</h1>
      <h4>Funding Name___Amount</h4>
      {unapprovedResources.map((row) => (
        <div>
          <p key={row.id}>
            {row.funding_name}___________________________{row.amount}
          </p>
          <button
            onClick={() => {
              toggleApprove(row.id);
            }}
            background-color="red"
          >
            Approve
          </button>
          <button onClick={() => {
            toggleDelete(row.id);
          }} background-color="red">
            Delete
          </button>
          <button
            onClick={() => {
              setModalShow(true)
            }}
            background-color="red"
          >
            View
          </button>
          <FileViewModal
            show={modalShow}
            onHide={() => setModalShow(false)}
            name={row.funding_name}
            info={row}
          />
        </div>
      ))}
    </>
  );
}
