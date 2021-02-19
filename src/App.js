import React from 'react';
import { MDBDataTableV5 } from 'mdbreact';

export default function App() {
  const [datatable, setDatatable] = React.useState({
    columns: [
      {
        label: 'Source',
        field: 'source',
        width: 150,
        attributes: {
          'aria-controls': 'DataTable',
          'aria-label': 'Source',
        },
      },
      {
        label: 'Funding Name',
        field: 'funding_name',
        width: 100,
      },
      {
        label: 'Purpose Of Funding',
        field: 'purpose',
        width: 300,
      },
      {
        label: 'Max Grant Amount',
        field: 'max',
        width: 50,
      },
      {
        label: 'Eligibility Requirements',
        field: 'E_R',
        width: 150,
      },
      {
        label: 'Deadline',
        field: 'deadline',
        width: 100,
      },
      {
        label: 'Contact Person',
        field: 'contact',
        width: 100
      }, 
      {
        label: 'Physical Location',
        field: 'location',
        width: 100
      },
      {
        label: 'Web Address',
        field: 'web',
        width: 100
      }
    ],
    rows: [
      {
        source: 'Wilson Center',
        funding_name: 'Wilson Funding',
        purpose: 'The Wilson Center is open to sponsoring events, conferences, and other relevant off-campus opportunities that you believe strengthen your innovation and leadership skills, knowledge, and critical thinking ability. We offer funding for some experiences that make an impact and align with our mission.',
        max: '-',
        E_R: '-',
        deadline: '-',
        contact: 'Monty Roper & Robert Ludwig',
        location: 'Macy House',
        web: 'https://www.grinnell.edu/academics/centers-programs/wilson/funding'
      }, 
      {
        source: 'Student Government Association (SGA)',
        funding_name: '-',
        purpose: '-',
        max: '-',
        E_R: '-',
        deadline: '-',
        contact: 'Amanda Weber & Oscar Buchanan',
        location: '-',
        web: 'https://sga.grinnell.edu/money/'
      },
      {
        source: 'Center for Careers, Life & Service (CLS)',
        funding_name: 'Service & Social Innovation Grant',
        purpose: 'The Ragnar Thorisson 11 Service and Social Innovation Grant is designed to support collaborative service and social justice projects in our local Grinnell or Iowa community. ​​​​​​​First, second, third, and fourth year students may apply for funding to offset expenses associated with projects that address locally identified service or social justice challenges.',
        max: '$3,000',
        E_R: '1-4th Year Students',
        deadline: 'Rolling',
        contact: 'Keira Wilson',
        location: '1103 Park (Chrystal Center)',
        web: 'https://grinco.sharepoint.com/sites/ServiceAndSocialInnovation/SitePages/Funding.aspx'
      }
    ],
  });

  return (
    <MDBDataTableV5
      hover
      entriesOptions={[5, 20, 25]}
      entries={5}
      pagesAmount={4}
      data={datatable}
      pagingTop
      searchTop
      searchBottom={false}
    />
  );
}