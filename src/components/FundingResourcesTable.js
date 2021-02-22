import { Button } from "@material-ui/core";
import MUIDataTable from "mui-datatables";
import { useState } from "react";
import "../styles/FundingResourcesTable.css";

export default function FundingResourcesTable() {
  const [fundingResourcesTableData, setFundingResourcesTableData] = useState({
    columns: [
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
        name: "purpose",
      },
      {
        label: "Max Grant Amount",
        name: "max",
      },
      {
        label: "Eligibility Requirements",
        name: "E_R",
      },
      {
        label: "Deadline",
        name: "deadline",
      },
      {
        label: "Contact Person",
        name: "contact",
      },
      {
        label: "Physical Location",
        name: "location",
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
    ],
    rows: [
      {
        id: 1,
        source: "Wilson Center",
        funding_name: "Wilson Funding",
        purpose:
          "The Wilson Center is open to sponsoring events, conferences, and other relevant off-campus opportunities that you believe strengthen your innovation and leadership skills, knowledge, and critical thinking ability. We offer funding for some experiences that make an impact and align with our mission.",
        max: "-",
        E_R: "-",
        deadline: "-",
        contact: "Monty Roper & Robert Ludwig",
        location: "Macy House",
        web:
          "https://www.grinnell.edu/academics/centers-programs/wilson/funding",
      },
      {
        id: 2,
        source: "Student Government Association (SGA)",
        funding_name: "-",
        purpose: "-",
        max: "-",
        E_R: "-",
        deadline: "-",
        contact: "Amanda Weber & Oscar Buchanan",
        location: "-",
        web: "https://sga.grinnell.edu/money/",
      },
      {
        id: 3,
        source: "Center for Careers, Life & Service (CLS)",
        funding_name: "Service & Social Innovation Grant",
        purpose:
          "The Ragnar Thorisson 11 Service and Social Innovation Grant is designed to support collaborative service and social justice projects in our local Grinnell or Iowa community. ​​​​​​​First, second, third, and fourth year students may apply for funding to offset expenses associated with projects that address locally identified service or social justice challenges.",
        max: "$3,000",
        E_R: "1-4th Year Students",
        deadline: "Rolling",
        contact: "Keira Wilson",
        location: "1103 Park (Chrystal Center)",
        web:
          "https://grinco.sharepoint.com/sites/ServiceAndSocialInnovation/SitePages/Funding.aspx",
      },
    ],
  });

  const options = {
    // filterType: "checkbox",
    selectableRows: "none",
    customToolbar: ({ displayData }) => <Button>Add a resource</Button>,
  };

  return (
    <MUIDataTable
      title={"Find a funding resource that works for you!"}
      data={fundingResourcesTableData.rows}
      columns={fundingResourcesTableData.columns}
      options={options}
    />
  );
}
