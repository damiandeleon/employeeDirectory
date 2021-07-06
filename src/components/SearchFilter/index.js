import React from "react";
import EmployeeTable from "../EmployeeTable";



const SearchFilter = (props) => {
    return (
        <nav className="navbar navbar-light bg-light justify-content-center">
            <form className="search" onSubmit={props.handleFormSubmit}>

                <label >Name Filter:</label>
                <input
                    className="form-control"
                    value={props.value}
                    onChange={props.handleInputChange}
                    name="search"
                    // list="employees"
                    type="search"
                    placeholder="Search"
                />
            </form>
        </nav>
    )
}

export default SearchFilter;