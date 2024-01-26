import React from 'react';
import '../css/custom.css';
import { Link } from 'react-router-dom';
import Footer from './Footer.js';
// import './experience.css';
import '../css/experience_dark.css';

export default function Experience() {
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
                            <Link className='nav-link' to="/experience">Experience</Link>
                        </li>
                        <li className="nav-item active">
                            <Link className='nav-link' to="/projects">Projects</Link>
                        </li>
                        <li className="nav-item active">
                            <Link className='nav-link' to="/contact">Contact</Link>
                        </li>
                    </ul>
                </div>
            </nav>
            <div className="experience-hero-section d-flex">
                <h1 className='display-1 fw-bold mx-auto my-auto hero-experience-title text-center'>Experience The Amazing</h1>
            </div>
            <div className='experience-container'>
                <div class="movie_card" id="bright">
                    <div class="info_section">
                        <div class="movie_header">
                            <img class="locandina" src="https://media-exp3.licdn.com/dms/image/C4E0BAQFrYjS52BIjbA/company-logo_200_200/0/1610441152873?e=2159024400&v=beta&t=2NX1muG8HsCh8zxca6bSbxzO6wghCkX_Aic1DKxYE2I" alt='tcslogo'/>
                            <h1>System Engineer</h1>
                            <h4>Oct 2023-Present</h4>
                        </div>
                        <div class="movie_desc">
                            <span class="minutes">1.2 months</span>
                            <p class="type">AWS , Java , MERN</p>
                            <p class="text">
                                Presently working as a system engineer at TCS Pune.
                            </p>
                        </div>
                    </div>
                    <div class="blur_back bright_back"></div>
                </div>
                <div class="movie_card" id="tomb">
                    <div class="info_section">
                        <div class="movie_header">
                            <img class="locandina" src="https://s3-symbol-logo.tradingview.com/galaxy-surfactants--big.svg" alt='galaxylogo'/>
                            <h1>React Native Developer</h1>
                            <h4>Apr 2023-Oct 2023</h4>
                        </div>
                        <div class="movie_desc">
                            <span class="minutes">6 Months</span>
                            <p class="type">React Native , RNFS</p>
                            <p class="text">
                                Worked on developing android application with React Native framework.Developed application that exports various design , operational , installation qualification sheets to excel by taking input from engineers at plant.
                            </p>
                        </div>
                    </div>
                    <div class="blur_back tomb_back"></div>
                </div>

                <div class="movie_card" id="ave">
                    <div class="info_section">
                        <div class="movie_header">
                            <img class="locandina" src="https://yt3.googleusercontent.com/Bzhe4uYF3cjtm921DcgxZdkOCFa5sbtjVmI3--xx-_YS9co0mKZoXfyiGc7FWNZq3DIcpRdyCQ=s176-c-k-c0x00ffffff-no-rj" alt='ysuitelogo'/>
                            <h1>Web Developer</h1>
                            <h4>Nov 2022-Apr 2023</h4>
                        </div>
                        <div class="movie_desc">
                            <span class="minutes">6 Months</span>
                            <p class="type">HTML, CSS ,JS , MySQL , NodeJS , Google Maps API , Razorpay API</p>
                            <p class="text">
                                Developed food delivery web application. Built backend using NodeJS along with frontend in HTML, CSS , JS , Bootstrap.Learnt about Razorpay API and Google Maps API.
                            </p>
                        </div>
                    </div>
                    <div class="blur_back ave_back"></div>
                </div>
            </div>
            <Footer />
        </div>
    )
}
