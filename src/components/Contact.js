import React from 'react';
import './contact.css';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import 'bootstrap/dist/css/bootstrap.css';
import { Link, useNavigate } from 'react-router-dom';

export default function Contact() {
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
                <div className="blur-container"
                    style={{ '--blur': "12vw" }}>

                    <svg className='svg1' xmlns="http://www.w3.org/2000/svg" Height="100vh" viewBox="0 0 272 140" style={{
                        '--offset': '180deg',
                        '--speed': '6000ms',
                        '--background': "linear-gradient( cyan, blue, black, purple, cyan)"
                    }}>
                        <g fill="none" fill-rule="evenodd" transform="translate(12 13)">
                            <path stroke="#979797" d="M7 53 2 23C1 11 10-1 22 0c14 1 29 20 35 31l22 57 7 10c3 3 33 27 39 10 10-24 5-57 6-81 1-7-2-18 4-20l3-4c42-11 52 40 63 67 10 23 31 26 45 5l1-6" />
                            <circle r="25.4" fill="#979797">
                                <animateMotion dur="10s" repeatCount="indefinite" fill="freeze" path="M7 53 2 23C1 11 10-1 22 0c14 1 29 20 35 31l22 57 7 10c3 3 33 27 39 10 10-24 5-57 6-81 1-7-2-18 4-20l3-4c42-11 52 40 63 67 10 23 31 26 45 5l1-6" />
                            </circle>
                        </g>
                    </svg>
                    <svg className='svg2' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 272 140" version="1.1" transform="matrix(-1,0,0,1,0,0)">
                        <g fill="none" fill-rule="evenodd" transform="translate(12 13)">
                            <path stroke="#979797" d="M7 53 2 23C1 11 10-1 22 0c14 1 29 20 35 31l22 57 7 10c3 3 33 27 39 10 10-24 5-57 6-81 1-7-2-18 4-20l3-4c42-11 52 40 63 67 10 23 31 26 45 5l1-6"></path>
                            <circle r="25.4" fill="#979797" >
                                <animateMotion dur="10s" repeatCount="indefinite" fill="freeze" path="M7 53 2 23C1 11 10-1 22 0c14 1 29 20 35 31l22 57 7 10c3 3 33 27 39 10 10-24 5-57 6-81 1-7-2-18 4-20l3-4c42-11 52 40 63 67 10 23 31 26 45 5l1-6"></animateMotion>
                            </circle>
                        </g>
                    </svg>
                    <svg className='svg1' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 272 140" transform="rotate(90)"><g fill="none" fill-rule="evenodd" transform="translate(12 13)"><path stroke="#979797" d="M7 53 2 23C1 11 10-1 22 0c14 1 29 20 35 31l22 57 7 10c3 3 33 27 39 10 10-24 5-57 6-81 1-7-2-18 4-20l3-4c42-11 52 40 63 67 10 23 31 26 45 5l1-6" /><circle r="25.4" fill="#979797"><animateMotion dur="10s" repeatCount="indefinite" fill="freeze" path="M7 53 2 23C1 11 10-1 22 0c14 1 29 20 35 31l22 57 7 10c3 3 33 27 39 10 10-24 5-57 6-81 1-7-2-18 4-20l3-4c42-11 52 40 63 67 10 23 31 26 45 5l1-6" /></circle></g></svg>
                    <svg className='svg2' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 272 140" transform="matrix(-6.123233995736766e-17,-1,-1,6.123233995736766e-17,0,0)" version="1.1" ><g fill="none" fill-rule="evenodd" transform="translate(12 13)"><path stroke="#979797" d="M7 53 2 23C1 11 10-1 22 0c14 1 29 20 35 31l22 57 7 10c3 3 33 27 39 10 10-24 5-57 6-81 1-7-2-18 4-20l3-4c42-11 52 40 63 67 10 23 31 26 45 5l1-6"></path><circle r="25.4" fill="#979797"><animateMotion dur="10s" repeatCount="indefinite" fill="freeze" path="M7 53 2 23C1 11 10-1 22 0c14 1 29 20 35 31l22 57 7 10c3 3 33 27 39 10 10-24 5-57 6-81 1-7-2-18 4-20l3-4c42-11 52 40 63 67 10 23 31 26 45 5l1-6"></animateMotion></circle></g></svg>
                </div>
                <p>Contact</p>
            </div>
        </HelmetProvider>
    )
}
