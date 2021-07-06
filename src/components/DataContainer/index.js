import React, { Component } from 'react';
import API from '../../utils/API';
import EmployeeTable from '../EmployeeTable/index';
import './DataContainer.css';
import SearchFilter from '../SearchFilter';

class DataContainer extends Component {
   
    state = {
        search: "",
        employees: [],
        sortDirections: this.initialSortDirections,
        filteredEmployees: []
        // error: ""
    };

    get initialSortDirections() {
        return {
            name: "",
            phone: "",
            email: "",
            dob: "",
        };
    }

    componentDidMount() {
        API.getUsers()
            .then((res) =>
                this.setState({
                    employees: res.data.results,
                    filteredEmployees: res.data.results,
                }),
            )
            .catch((err) => console.log(err));
    }

    handleInputChange = (event) => {
        const value = event.target.value;
        this.setState({ search: value });
        this.filterEmployees(value.toLowerCase().trim());
    };


    handleFormSubmit = (event) => {
        console.log("You've hot the handleFormSubmit function")
        event.preventDefault();

    };


    sortBy = (key, primary, secondary) => {
        let sortedEmployees = this.state.employees;
         {
            sortedEmployees = this.state.employees.sort((a, b) => {
                a = a[key];
                b = b[key];


                if (primary) {
                    if (secondary && a[primary] === b[primary]) {
                        return a[secondary].localeCompare(b[secondary]);
                    }
                    return a[primary].localeCompare(b[primary]);
                } else {
                    return a.localeCompare(b);
                }
            });

            this.setState({
                employees: sortedEmployees,
                sortDirections: {
                    ...this.initialSortDirections,
                    [key]: "asc",
                },
            });
        }
    };

    filterEmployees = (input) => {
        if (input) {
            this.setState({
                employees: this.state.employees.filter((employee) => {
                    return (
                        employee.name.first
                            .toLowerCase()
                            .concat(" ", employee.name.last.toLowerCase())
                            .includes(input) ||
                        employee.phone.includes(input) ||
                        employee.phone.replace(/[^\w\s]/gi, "").includes(input) ||
                        employee.email.includes(input) ||
                        this.formatDate(employee.dob.date).includes(input)
                    );
                }),
            });
        } else {
            this.setState({ employees: this.state.employees });
        }
    };

    formatDate = (date) => {
        date = new Date(date);
        let dob = [];
        dob.push(("0" + (date.getMonth() + 1)).slice(-2));
        dob.push(("0" + date.getDate()).slice(-2));
        dob.push(date.getFullYear());

        // Join formatted date
        return dob.join("-");
    };

    render() {
        return (
            
            <SearchFilter 
            value={this.state.search}
            handleInputChange={this.handleInputChange}
            handleFormSubmit={this.handleFormSubmit}
            />,
            <div className=" containerBackground container mt-4">

            <EmployeeTable
                state={this.state}
                sortBy={this.sortBy}
                filterEmployees={this.filterEmployees}
                formatDate={this.formatDate}
            />
            </div >

        );
    }
}

export default DataContainer