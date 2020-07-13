import React from 'react';
import { NavLink } from "react-router-dom";

class NavBar extends React.Component {
    render() {
        return (
            <div className="App">
                <header>
                    <nav id="navbar">
                        <div className="nav-container">
                            <h1>TechCrunch</h1>
                            <ul>
                                <NavLink to="/">Home</NavLink>
                                <NavLink to="/articles">Articles</NavLink>
                                <NavLink to="/events">Events and Advertise</NavLink>
                                <NavLink to="/contact">Contact</NavLink>
                            </ul>
                        </div>
                    </nav>
                </header>
            </div>
        )
    }
}


export default NavBar;