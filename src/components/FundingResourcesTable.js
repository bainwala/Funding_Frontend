import { Button } from "@material-ui/core";
import axios from "axios";
import MUIDataTable from "mui-datatables";
import { useState, useEffect } from "react";
import "../styles/FundingResourcesTable.css";
import LoadingOverlay from "./LoadingOverlay";

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
      label: "Max Grant Amount",
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
        customBodyRender: (value, tableMeta, updateValue) => (
          <a href={value}>Official website</a>
        ),
      },
    },
  ];

  const [fundingResourcesTableRows, setFundingResourcesTableRows] = useState([]);

  const options = {
    // filterType: "checkbox",
    selectableRows: "none",
    customToolbar: ({ displayData }) => <Button>Add a resource</Button>,
  };

  useEffect(() => {
    
    axios
      .get("https://frozen-tor-16945.herokuapp.com/resource", {
        withCredentials: true
      })
      .then((response) => {
        setFundingResourcesTableRows(response.data);
        console.log(response.data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  if (fundingResourcesTableRows.length === 0)
    return <LoadingOverlay width="50" fill="black" className="animate-spin" />;
  else {
    return <MUIDataTable
      title={"Find a funding resource that works for you!"}
      data={fundingResourcesTableRows}
      columns={columns}
      options={options}
    />;
  }
}
