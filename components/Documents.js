import React from 'react';
import DocumentTypesJson from '../documents-file-map.json';
import Select from 'react-select';

const documents_array = [];

//Right now the below code is only reading in the document type names from the JSON but
//this would be modified to also grab the corresponding sample pdf filenames.

Object.keys(DocumentTypesJson).map((document) =>
    documents_array.push({value: document, label: document})
)

const Documents = () => {
    return <Select options={documents_array} isMulti='true' />
}

export default Documents;