import React, { useEffect } from 'react';
import "../css/navbar.css";
import { Link } from 'react-router-dom';


export default function Navbar() {
    
    useEffect(() => {
        document.querySelector(".day-night input").addEventListener("change", () => {
            document.querySelector("body").classList.add("toggle");
            setTimeout(() => {
                document.querySelector("body").classList.toggle("light");

                setTimeout(
                    () => document.querySelector("body").classList.remove("toggle"),
                    10
                );
            }, 5);
        });
    }, []);

    return (
        <nav className="navbar navbar-expand-lg navbar-dark">
            <Link to="/" className='navbar-brand p-3'>Deepcodr</Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item active">
                        <Link className='nav-link' to="/">Home</Link>
                    </li>
                    <li className="nav-item active">
                        <Link className='nav-link' to="/experience">Experience</Link>
                    </li>
                    <li className="nav-item active">
                        <Link className='nav-link' to="/projects">Projects</Link>
                    </li>
                    <li className="nav-item active">
                        <Link className='nav-link' to="/contact">Contact</Link>
                    </li>
                </ul>
                <label className="day-night">
                    <input type="checkbox" defaultChecked />
                    <div></div>
                </label>
            </div>
        </nav>)
}