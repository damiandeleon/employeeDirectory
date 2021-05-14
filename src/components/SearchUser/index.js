import React from "react";

const SearchUser = (props) => {
    return (
        // <div>
        //     <form className="searchBackground d-flex">
        //         <input 
        //         className="form-control me-2" 
        //         value={props.value}
        //         name={props.name}
        //         type="search" 
        //         placeholder="Search" 
        //         onChange={props.handleInputChange}>
        //         </input>
        //         <button className="btn btn-outline-dark " type="submit" onClick={props.handleFormSubmit}>Search</button>
        //     </form>
        // </div>
        <form className="search">
            <div className="form-group">
                <label htmlFor="employee">Name Search:</label>
                <input
                    value={props.search}
                    onChange={props.handleInputChange}
                    name="employee"
                    list="employees"
                    type="text"
                    placeholder="Type name here"
                    id="employees"
                />
                <button type="submit" onClick={props.handleFormSubmit} className="btn btn-success">
                    Search
        </button>
            </div>
        </form>
    )
};

export default SearchUser
