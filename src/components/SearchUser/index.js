import React from "react";

const SearchUser = () => {
    return (
        <div>
            <form className="d-flex">
                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"></input>
                <button className="btn btn-outline-dark " type="submit">Search</button>
            </form>
        </div>
    )
};

export default SearchUser
