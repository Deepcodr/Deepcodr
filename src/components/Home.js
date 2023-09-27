import React, { useEffect } from 'react';
import './custom.css';
import 'bootstrap/dist/css/bootstrap.css';
import { Link, useNavigate } from 'react-router-dom';
import { TypeAnimation } from 'react-type-animation';

export default function Home() {
    return (
        <div className="home container-fluid p-0 min-vh-100">
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
            <div className='home_hero_section'>
                <div className='home_wrapper home_section_wrapper_grid'>
                    <div id='home_hero_image_h12' className='home_hero_image_box' style={{ "transform": "translate3d(0%, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)", "transformStyle": "preserve-3d", "opacity": "1" }}></div>
                    <div id='home_hero_section_name' className='home_hero_section_title_block'>
                        <p className='display-1 home_heading_title text-center' style={{ "transform": "translate3d(0%, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)", "transformStyle": "preserve-3d", "opacity": "1" }}>I'm Deepak Patil<br></br>
                            <TypeAnimation
                                sequence={[
                                    "Passionate",
                                    5000,
                                    "Aspiring",
                                    5000,
                                    "Curious",
                                    5000,
                                    "Ambitious",
                                    5000
                                ]}
                                speed={300}
                                repeat={Infinity}
                                style={{ color: '#dd7732' }}
                            /><br></br>
                            Computer Engineer</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
