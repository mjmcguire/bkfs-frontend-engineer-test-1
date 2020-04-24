import React from 'react';
import Layout from '../components/MyLayout';
import CreateReportButton from '../components/CreateReportButton';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Customers from '../components/Customers';
import Documents from '../components/Documents';
import CustomerDocsTable from '../components/CustomerDocsTable';

//Editing and saving cell data (continued from CustomerDocsTable.js)
//5) If user changes value for a customer's document type value, save new value back to the appropriate csv location
//In order to limit the conflict of more than one user attempting to edit/save a new value, use of a
//transactional system (akin to reserving seats on a plane) with a user timeout would likely be necessary.
//6) Planned on using react-csv to allow users to save a generated report/table in csv format

export default function Classification() {
    return(
        <Layout>
            <title>Document Classifications by Customer</title>
            <Container>
                <Row>
                    <Col>Document Classifications by Customer</Col>
                </Row>

                <Row>
                    <Col>
                        Select Customer(s)
                        <Customers></Customers>
                    </Col>
                    <Col>
                        Select Document Type(s)
                        <Documents></Documents>
                    </Col>
                    <Col>
                        <CreateReportButton></CreateReportButton>
                    </Col>
                </Row>

                <Row>
                    <Col>
                        <CustomerDocsTable></CustomerDocsTable>
                    </Col>
                </Row>


            </Container>
        </Layout>
    );
};