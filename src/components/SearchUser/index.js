import React from "react";

const SearchUser = (props) => {
    return (
        <div>
            <form className="d-flex">
                <input 
                className="form-control me-2" 
                value={props.value}
                name="search"
                type="search" 
                placeholder="Search" 
                onChange={props.handleInputChange}>
                </input>
                <button className="btn btn-outline-dark " type="submit" onClick={props.handleFormSubmit}>Search</button>
            </form>
        </div>
    )
};

export default SearchUser
