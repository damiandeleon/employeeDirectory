import React from "react";

function Nav() {
    return (
        <nav className="navbar navbar-light bg-primary">
            <div className="container-fluid">
                <form className="d-flex">
                    <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"></input>
                    <button className="btn btn-outline-light " type="submit">Search</button>
                </form>
            </div>
        </nav>
    )
}

export default Nav;