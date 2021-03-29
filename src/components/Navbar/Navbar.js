import React from 'react';
import { Link, NavLink } from 'react-router-dom';


const Navbar = (props) => {

        const dogLinks = props.dogs.map(dog => {
            return (
                <li
                    className="nav-item"
                    key={dog.name}>
                        <NavLink exact to={`/dogs/${dog.name}`} className="nav-link">{dog.name}</NavLink>
                </li>
            )
        })

        return (
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <Link className="navbar-brand" to="/dogs">
                    Dog App
                </Link>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-toggle="collapse"
                    data-target="#navbarNav"
                    aria-controls="navbarNav"
                    aria-expanded="false"
                    aria-label="Toggle Navigation">
                    <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ml-auto">
                        {dogLinks}
                    </ul>
                </div>
            </nav>
        )
}


export default Navbar;