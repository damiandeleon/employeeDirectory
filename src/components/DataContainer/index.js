import React from 'react';
import API from '../../utils/API'
import EmployeeTable from '../EmployeeTable/index'
import './DataContainer.css'

function DataContainer () {
    return(
        <div className="container border">
            <p>Hey!  I'm the DataContainer!</p>
            <EmployeeTable />
        </div>
    )
}


export default DataContainer