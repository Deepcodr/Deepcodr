import React, { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './404.css';

export default function NotFound() {
    return (
        <div className="container-fluid p-0 min-vh-100">
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
                            <Link className='nav-link' to="/">Experience</Link>
                        </li>
                        <li className="nav-item active">
                            <Link className='nav-link' to="/">Projects</Link>
                        </li>
                        <li className="nav-item active">
                            <Link className='nav-link' to="/">Certifications</Link>
                        </li>
                        <li className="nav-item active">
                            <Link className='nav-link' to="/">Contact</Link>
                        </li>
                    </ul>
                </div>
            </nav>
            <div className='container-fluid text-center'>
                <div id='errortitle' title="404">404</div>
            </div>
        </div>
    )
}
