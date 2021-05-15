import React from "react";
import EmployeeTable from "../EmployeeTable";



const Navbar = (props) => {
    return (
        <nav className="navbar navbar-light bg-light justify-content-center">
            <form className="search" onSubmit={props.handleFormSubmit}>
                <div >
                    <label htmlFor="employee">Name Search:</label>
                    <input
                        className="form-group"
                        value={props.value}
                        onChange={props.handleInputChange}
                        name="search"
                        list="employees"
                        type="search"
                        placeholder="Type name here"
                        
                    />
                    <button type="submit" onClick={props.handleFormSubmit} className="btn btn-success">Search</button>
                </div>
            </form>
        </nav>
    )
}

export default Navbar;