import React from "react";

const SearchUser = () => {
    return (
        <div className="container-fluid">
            <form className="d-flex">
                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"></input>
                <button className="btn btn-outline-light " type="submit">Search</button>
            </form>
        </div>
    )
};

export default SearchUser