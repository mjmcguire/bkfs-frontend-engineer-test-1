import React from 'react';
import Table from 'react-bootstrap/Table';

//Calls to determine the proper values in the classifications csv files by customer would go here
//and populate the table below instead of the hard-coded dummy data.

//Populating cell data
//Step 1) Determine which customers were selected and note their classifications csv filepaths from the customers array
//Step 2) For each selected customer, for each selected document type, find the value of the match in the appropriate csv file
//Step 3) Build out the full table of values based on the selected customers, document types, and the located values
//Step 4) Planned on using react-pdf to allow for hovering over document types to show the sample pdf of that document type

//For more about editing the table data and saving as csv, please see continuation in classification.js

const CustomerDocsTable = () => {
    return(
        <Table striped bordered hover>
            <thead>
                <tr>
                    <th>Document Types</th>
                    <th>Customer 1</th>
                    <th>Customer 2</th>
                    <th>Customer 3</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Document A</td>
                    <td>Document 1-A</td>
                    <td>Document 2-A</td>
                    <td>Document 3-A</td>
                </tr>
                <tr>
                    <td>Document B</td>
                    <td>Document 1-B</td>
                    <td>Document 2-B</td>
                    <td>Document 3-B</td>
                </tr>
            </tbody>
        </Table>
    )
}

export default CustomerDocsTable;