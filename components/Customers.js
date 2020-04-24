import React from 'react';
import CustomerJsonData from '../customers-file-map.json';
import Select from 'react-select';

const customers_array = [];

//Right now the below code is only reading in the customer names from the JSON but
//this would be modified to also grab the corresponding classifications csv filenames.

Object.keys(CustomerJsonData).map((customer) =>
    customers_array.push({value: customer, label: customer})
)

const Customers = () => {
    return <Select options={customers_array} isMulti='true' />
}

export default Customers;