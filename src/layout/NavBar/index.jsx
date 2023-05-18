import React from 'react'
import { NavLink, Outlet } from "react-router-dom";
import "./style.css";

const NavBar = () => {
    const activeStyle = {
        fontWeight: "bold",
        color: "blue"
    }

    const active = ({ isActive }) => (isActive ? activeStyle : undefined)

    return (
        <>
            <nav>
                <h2>Colours</h2>
                <ul className="nav-links">
                    <li><NavLink style={active} to="/">Home</NavLink></li>
                    <li><NavLink style={active} to="/colours">Colours</NavLink></li>
                    <li><NavLink style={active} to="/new">New</NavLink></li>
                </ul>
            </nav>
            <Outlet />
        </>
    )
}

export default NavBar
