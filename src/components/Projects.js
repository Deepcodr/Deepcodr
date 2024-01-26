import React from 'react';
import '../css/projects.css';
import Footer from './Footer.js';
import Navbar from './Navbar.js';

export default function Projects() {
    return (
        <div className="container-fluid p-0 min-vh-100">
            < Navbar />
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
            <div className='contair'>
                <div className="project-wrapper">
                    <div className="bgimg-1">
                        <div className="caption">
                            <span className="bordern" style={{ backgroundColor: "transparent", fontSize: "25px", color: "rgb(255, 115, 0)" }}><i class="fa-solid fa-cloud-arrow-down"></i><i class="fa-solid fa-display"></i></span>
                        </div>
                    </div>

                    <div style={{ color: "#777", backgroundColor: "black", textAlign: "center", padding: "50px 80px" }}>
                        <h3 className="display-4" style={{ textAlign: "center" }}>Secret Translator</h3>
                        <p>A Speech To Text application designed and developed for Smart India Hackathon 2022. Provides an interactive web app for police to translate criminals speech into over 206 languages across the world. Supports audio file as well as microphone input translation allowing police to deal with multilingular criminals.</p>
                    </div>

                    <div className="bgimg-2">
                        <div className="caption">
                            <span className="bordern" style={{ backgroundColor: "transparent", fontSize: "25px", color: "rgb(255, 115, 0)" }}><i class="fa-solid fa-cloud-arrow-down"></i><i class="fa-solid fa-display"></i></span>
                        </div>
                    </div>

                    <div className='' style={{ color: "#777", backgroundColor: "black", textAlign: "center", padding: "50px 80px"}}>
                        <h3 className="display-4" style={{ textAlign: "center" }}>Ubiquitous Face Attendance System</h3>
                        <p>A flawless solution designed to revolutionize traditional attendance tracking methods. Project brings the power of facial recognition technology enabling seamless attendance marking on any device. With a focus on accessibility and convenience, System offers a user-friendly interface for participants to register attendance effortlessly. Additionally, administrators can take advantage of advanced features such as real-time monitoring and comprehensive attendance report analysis. </p>

                    </div>

                    <div className="bgimg-3">
                        <div className="caption">
                            <span className="bordern" style={{ backgroundColor: "transparent", fontSize: "25px", color: "rgb(255, 115, 0)" }}><i class="fa-solid fa-cloud-arrow-down"></i><i class="fa-solid fa-display"></i></span>
                        </div>
                    </div>

                    <div className='' style={{ color: "#777", backgroundColor: "black", textAlign: "center", padding: "50px 80px" }}>
                        <h3 className="display-4" style={{ textAlign: "center" }}>PortFolio Website</h3>
                        <p>Welcome to my portfolio website, Gateway to a curated collection of my professional journey and accomplishments. This application serves as a digital showcase of my skills, experiences, and projects. Explore the pages to gain insight into my capabilities, work philosophy, and the diverse range of projects I've undertaken. This portfolio is designed to provide a concise and compelling overview of who I am and what I bring to the table.</p>

                    </div>

                    <div className="bgimg-4">
                        <div className="caption">
                            <span className="bordern" style={{ backgroundColor: "transparent", fontSize: "25px", color: "rgb(255, 115, 0)" }}><i class="fa-solid fa-cloud-arrow-down"></i><i class="fa-solid fa-display"></i></span>
                        </div>
                    </div>

                    <div className='' style={{ color: "#777", backgroundColor: "black", textAlign: "center", padding: "50px 80px" }}>
                        <h3 className="display-4" style={{ textAlign: "center" }}>AI Story Generator</h3>
                        <p>AI Story Generator, a captivating project that transforms text prompts into imaginative narratives. Seamless MERN application that not only sparks your creativity but also invites you to explore a community of storytellers. Craft your own stories from prompts or dive into a vibrant feed showcasing stories from fellow users. Engage with the community by liking stories and witness the creativity unfold. The leaderboard highlights the most liked stories, adding a competitive edge to the storytelling experience.</p>
                    </div>
                    <Footer />
                </div>
            </div>
        </div>
    )
}