import { Button } from "@material-ui/core";
import axios from "axios";
import MUIDataTable from "mui-datatables";
import { useState, useEffect } from "react";
import "../styles/FundingResourcesTable.css";
import LoadingOverlay from "./LoadingOverlay";
import { useHistory } from "react-router-dom";
import { userContext } from "../util/userContext";

export default function FundingResourcesTable() {
  
  const columns = [
    {
      label: "Source",
      name: "source",
    },
    {
      label: "Funding Name",
      name: "funding_name",
    },
    {
      label: "Purpose Of Funding",
      name: "description",
    },
    {
      label: "Funding Range",
      name: "amount",
    },
    {
      label: "Eligibility Requirements",
      name: "eligible",
    },
    {
      label: "Deadline",
      name: "deadline",
    },
    {
      label: "Contact Person",
      name: "contact_person",
    },
    {
      label: "Web Address",
      name: "web",
      options: {
        customBodyRender: (value, tableMeta, updateValue) => (//make div and add buttons to approve and delete for admin
          <a href={value}>Official website</a>
        ),
      },
    },
  ];

  const [fundingResourcesTableRows, setFundingResourcesTableRows] = useState([]);

  let history = useHistory();
  const options = {
    // filterType: "checkbox",
    selectableRows: "none",
    customToolbar: ({ displayData }) => 
    <userContext.Consumer>
      {(user) => (
      <Button 
        onClick = {() => user.logged_in ? history.push("/add") : history.push("/login")}>
        Add a resource
      </Button>
      )}
    </userContext.Consumer>,
  };

  useEffect(() => {
    axios
      .get("https://frozen-tor-16945.herokuapp.com/resource", {
        withCredentials: true
      })
      .then((response) => {
        console.log("FundingResourcesTable.js resource -> " + JSON.stringify(response.data, null, 2));
        setFundingResourcesTableRows(response.data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  if (fundingResourcesTableRows.length === 0)
    return <LoadingOverlay/>;
  else {
    return <MUIDataTable
      title={"Find a funding resource that works for you!"}
      data={fundingResourcesTableRows}
      columns={columns}
      options={options}
    />;
  }
}
