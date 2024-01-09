import React from 'react';
import './projects.css';
import { Link, useNavigate } from 'react-router-dom';
import Footer from './Footer.js';

export default function Projects() {
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
                            <Link className='nav-link' to="/certifications">Certifications</Link>
                        </li>
                        <li className="nav-item active">
                            <Link className='nav-link' to="/contact">Contact</Link>
                        </li>
                    </ul>
                </div>
            </nav>
            {/* <p>Projects</p> */}
            <div className="project-wrapper">
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
                <div className="bgimg-1">
                    <div className="caption">
                        <span className="border" style={{ backgroundColor: "transparent", fontSize: "25px", color: "#f7f7f7" }}><a href=''>View Live</a></span>
                    </div>
                </div>

                <div style={{ color: "#777", backgroundColor: "black", textAlign: "center", padding: "50px 80px", textAlign: "justify" }}>
                    <h3 className="display-4" style={{ textAlign: "center" }}>Secret Translator</h3>
                    <p>Parallax scrolling is a web site trend where the background content is moved at a different speed than the foreground content while scrolling. Nascetur per nec posuere turpis, lectus nec libero turpis nunc at, sed posuere mollis ullamcorper libero ante lectus, blandit pellentesque a, magna turpis est sapien duis blandit dignissim. Viverra interdum mi magna mi, morbi sociis. Condimentum dui ipsum consequat morbi, curabitur aliquam pede, nullam vitae eu placerat eget et vehicula. Varius quisque non molestie dolor, nunc nisl dapibus vestibulum at, sodales tincidunt mauris ullamcorper, dapibus pulvinar, in in neque risus odio. Accumsan fringilla vulputate at quibusdam sociis eleifend, aenean maecenas vulputate, non id vehicula lorem mattis, ratione interdum sociis ornare. Suscipit proin magna cras vel, non sit platea sit, maecenas ante augue etiam maecenas, porta porttitor placerat leo.</p>
                </div>

                <div className="bgimg-2">
                    <div className="caption">
                        <span className="border" style={{ backgroundColor: "transparent", fontSize: "25px", color: "#f7f7f7" }}>LESS HEIGHT</span>
                    </div>
                </div>

                <div className='' style={{ color: "#777", backgroundColor: "black", textAlign: "center", padding: "50px 80px", textAlign: "justify" }}>
                    <h3 className="display-4" style={{ textAlign: "center" }}>Text Summarizer</h3>
                    <p>Parallax scrolling is a web site trend where the background content is moved at a different speed than the foreground content while scrolling. Nascetur per nec posuere turpis, lectus nec libero turpis nunc at, sed posuere mollis ullamcorper libero ante lectus, blandit pellentesque a, magna turpis est sapien duis blandit dignissim. Viverra interdum mi magna mi, morbi sociis. Condimentum dui ipsum consequat morbi, curabitur aliquam pede, nullam vitae eu placerat eget et vehicula. Varius quisque non molestie dolor, nunc nisl dapibus vestibulum at, sodales tincidunt mauris ullamcorper, dapibus pulvinar, in in neque risus odio. Accumsan fringilla vulputate at quibusdam sociis eleifend, aenean maecenas vulputate, non id vehicula lorem mattis, ratione interdum sociis ornare. Suscipit proin magna cras vel, non sit platea sit, maecenas ante augue etiam maecenas, porta porttitor placerat leo.</p>
                </div>

                <div className="bgimg-3">
                    <div className="caption">
                        <span className="border" style={{ backgroundColor: "transparent", fontSize: "25px", color: "#f7f7f7" }}>SCROLL UP</span>
                    </div>
                </div>

                <div style={{ position: "relative" }}>
                    <div style={{ color: "#ddd", backgroundColor: "#282E34", textAlign: "center", padding: "50px 80px", textAlign: "justify" }}>
                        <p>Scroll up and down to really get the feeling of how Parallax Scrolling works.</p>
                    </div>
                </div>

                <div className="bgimg-1">
                    <div className="caption">
                        <span className="border">COOL!</span>
                    </div>
                </div>
                <Footer />
            </div>
            {/* <main>
                    <ul id="cards">
                        <li className="project-card" id="card_1">
                            <div className="card__content">
                                <div>
                                    <h2>Portfolio Website</h2>
                                    <p>MERN stack web application for AI based story generation through Text based prompt</p>
                                    <p><a href="#top" className="btn btn--accent">Read more</a></p>
                                </div>
                                <figure>
                                </figure>
                            </div>
                        </li>
                        <li className="project-card" id="card_2">
                            <div className="card__content">
                                <div>
                                    <h2>Secret Translator : Speech To Text Application</h2>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                                    <p><a href="#top" className="btn btn--accent">Read more</a></p>
                                </div>
                                <figure>
                                    <img src="../shared/img-2.jpg" alt="Image description" />
                                </figure>
                            </div>
                        </li>
                        <li className="project-card" id="card_3">
                            <div className="card__content">
                                <div>
                                    <h2>Text Summarizer</h2>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                                    <p><a href="#top" className="btn btn--accent">Read more</a></p>
                                </div>
                                <figure>
                                    <img src="../shared/img-3.jpg" alt="Image description" />
                                </figure>
                            </div>
                        </li>
                        <li className="project-card" id="card_4">
                            <div className="card__content">
                                <div>
                                    <h2>AI Story Generator</h2>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                                    <p><a href="#top" className="btn btn--accent">Read more</a></p>
                                </div>
                                <figure>
                                    <img src="../shared/img-2.jpg" alt="Image description" />
                                </figure>
                            </div>
                        </li>
                        <li className="project-card" id="card_5">
                            <div className="card__content">
                                <div>
                                    <h2>Ubiquitous Face Attendance System</h2>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                                    <p><a href="#top" className="btn btn--accent">Read more</a></p>
                                </div>
                                <figure>
                                    <img src="../shared/img-2.jpg" alt="Image description" />
                                </figure>
                            </div>
                        </li>
                    </ul>
                </main> */}
        </div>
    )
}