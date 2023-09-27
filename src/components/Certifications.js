import React from 'react';
import './custom.css';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import 'bootstrap/dist/css/bootstrap.css';
import {Link , useNavigate} from 'react-router-dom';

export default function Certifications() {
    return (
        <HelmetProvider>
            <div className="container-fluid p-0 min-vh-100">
                <nav className="navbar navbar-expand-lg navbar-dark">
                    <Link to="/" className='navbar-brand p-3'>Deepcodr</Link>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
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
                                <Link className='nav-link' to="/certifications">Certifications</Link>
                            </li>
                            <li className="nav-item active">
                                <Link className='nav-link' to="/contact">Contact</Link>
                            </li>
                        </ul>
                    </div>
                </nav>
                <p>Certifications</p>
            </div>
        </HelmetProvider>
    )
}
