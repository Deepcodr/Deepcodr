import React from 'react';
import './projects.css';
import 'bootstrap/dist/css/bootstrap.css';
import { Link, useNavigate } from 'react-router-dom';

export default function Projects() {
    return (
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
            <div className='hero_texts_project'>
            <div className=''>
                <h1 className='hero_title'>
                    <div className='p-2'>
                        <span className='animated-gradient-text_background__tSv9a1'>
                            <span className='animated-gradient-text_foreground__PuOdy1 animated-gradient-text_foreground-1__s2FIH1'>Eat.</span>
                        </span>
                    </div>
                    <div className='p-2'>
                        <span className='animated-gradient-text_background__tSv9a2'>
                            <span className='animated-gradient-text_foreground__PuOdy2 animated-gradient-text_foreground-1__s2FIH2'>Code.</span>
                        </span>
                    </div>
                    <div className='p-2'>
                        <span className='animated-gradient-text_background__tSv9a3'>
                            <span className='animated-gradient-text_foreground__PuOdy3 animated-gradient-text_foreground-1__s2FIH3'>Repeat.</span>
                        </span>
                    </div>
                </h1>
            </div>
            </div>
            <p>Projects</p>
        </div>
    )
}