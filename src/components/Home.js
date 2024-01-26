import React from 'react';
import '../css/custom.css';
import '../css/homesectionskills.css';
import '../css/homesectionexp.css';
import { Link } from 'react-router-dom';
import { TypeAnimation } from 'react-type-animation';
import { motion, useScroll, useSpring } from 'framer-motion';
import Footer from './Footer.js';
import Navbar from './Navbar.js';

export default function Home() {
    const { scrollYProgress } = useScroll()
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    return (
        <>
            <div className="home container-fluid p-0 min-vh-100">
            <motion.path
                className='progress-bar'
                d="M 0, 20 a 20, 20 0 1,0 40,0 a 20, 20 0 1,0 -40,0"
                style={{ scaleX }}
            />
                < Navbar />
                <div className='home_hero_section'>
                    {/* <div className='home_wrapper home_section_wrapper_grid'> */}
                    {/* <div id='home_hero_image_h12' className='home_hero_image_box' style={{ "transform": "translate3d(0%, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)", "transformStyle": "preserve-3d", "opacity": "1" }}></div> */}
                    <motion.div
                        animate={{
                            translate: ['500px', '0px'],
                        }}
                        transition={{
                            duration: 1
                        }}
                        className='home_heading_div h-100 d-flex'>
                        {/* <div id='home_hero_section_name' className='home_hero_section_title_block my-auto'> */}
                        <h1 className='my-auto mx-auto display-1 p-4 m-2 home_heading_title text-center' style={{ opacity: 1, transformStyle: 'preserve-3d' }}>I'm Deepak Patil<br></br>
                            <TypeAnimation
                                className="heading-span"
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
                                style={{ color: 'rgb(0 225 255)' }}
                            /><br></br>Computer Engineer</h1>
                        {/* </div> */}
                    </motion.div>
                    {/* </div> */}
                </div>
                <div className='home_experience'>
                    <h4 className='mx-5 text-muted home_experience_head'>Work Experience</h4>
                    <h1 className='mx-5 home_experience_sub'>Companies I have worked with</h1>
                    <div className="container container-fluid experience_container">
                        <motion.div
                            whileInView={{
                                translateX: ['300px', '0px']
                            }}

                            transition={{
                                duration: 1
                            }}
                            className="exp_card">
                            <div className="content">
                                <div className="img"><img src="/tcs_logo.webp" alt='tcslogo'></img></div>
                                <div className="cardContent">
                                    <h3>Tata Consultancy Services*<br></br><span>Systems Engineer</span></h3>
                                </div>
                            </div>
                        </motion.div>
                        <motion.div
                            whileInView={{
                                translate: ['200px', '0px']
                            }}

                            transition={{
                                duration: 1
                            }}
                            className="exp_card">
                            <div className="content">
                                <div className="img"><img src="/galaxy_logo.svg" alt='galaxylogo'></img></div>
                                <div className="cardContent">
                                    <h3>Galaxy Surfactants Ltd.<br></br><span>React Native Developer</span></h3>
                                </div>
                            </div>
                        </motion.div>
                        <motion.div
                            whileInView={{
                                translate: ['100px', '0px']
                            }}

                            transition={{
                                duration: 1
                            }}
                            className="exp_card">
                            <div className="content">
                                <div className="cardContent">
                                    <h3><Link className='nav-link text-light' to="/experience">View More</Link></h3>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
                <div className='mx-4 my-5'>
                    <div class="container-fluid m-2">
                        <div class="row">
                            <div class="col-sm-4 d-flex"><div className='my-auto'><h1 className='home_experience_sub'>SkillSet</h1><p className='text-muted'>With skills in over 4 different areas of development, I am the perfect person to be selected when it comes to a full fledged project. Whatever your needs are, I can take up responsibility as a challenge and thrive for growth.</p></div></div>
                            <div class="col-sm-8">
                                <div class="col">
                                    <div class="row">
                                        <motion.div
                                            initial={{
                                                opacity: 0
                                            }}
                                            whileInView={{
                                                scale: [0.9, 0.9, 1],
                                                opacity: 1
                                            }}
                                            transition={{ ease: "easeIn", duration: 1 }}
                                            viewport={{ once: false }}
                                            class="col-sm m-2"
                                        >
                                            <div><svg width="64px" height="64px" viewBox="-1.2 -1.2 26.40 26.40" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#ff0000" transform="matrix(-1, 0, 0, 1, 0, 0)"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M3 6C3 3.79086 4.79086 2 7 2H17C19.2091 2 21 3.79086 21 6C21 8.20914 19.2091 10 17 10H7C4.79086 10 3 8.20914 3 6Z" stroke="#ff7300" stroke-width="1.6799999999999997"></path> <path d="M3 16C3 14.8954 3.89543 14 5 14H8C9.10457 14 10 14.8954 10 16V19C10 20.1046 9.10457 21 8 21H5C3.89543 21 3 20.1046 3 19V16Z" stroke="#ff7300" stroke-width="1.6799999999999997"></path> <path d="M14 17.5C14 15.567 15.567 14 17.5 14C19.433 14 21 15.567 21 17.5C21 19.433 19.433 21 17.5 21C15.567 21 14 19.433 14 17.5Z" stroke="#ff7300" stroke-width="1.6799999999999997"></path> </g></svg></div><div><h3 className='home_experience_sub'>Web</h3></div><p className='text-muted'>Started with my web journey from college. Web has made me curious to learn various frameworks, languages and technologies.</p>
                                        </motion.div>
                                        <motion.div
                                            initial={{
                                                opacity: 0
                                            }}
                                            whileInView={{
                                                scale: [0.9, 0.9, 1],
                                                opacity: 1
                                            }}
                                            transition={{ ease: "easeIn", duration: 1 }}
                                            viewport={{ once: false }}
                                            class="col-sm m-2"
                                        >
                                            <div><svg width="64px" height="64px" viewBox="0 0 32 32" enable-background="new 0 0 32 32" id="Editable-line" version="1.1" xmlns="http://www.w3.org/2000/svg" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d=" M23.995,13.089C23.996,13.059,24,13.03,24,13c0-4.418-3.582-8-8-8c-3.814,0-6.998,2.671-7.8,6.242C5.208,12.038,3,14.757,3,18 c0,3.866,3.134,7,7,7h13c3.314,0,6-2.686,6-6C29,16.026,26.834,13.564,23.995,13.089z" fill="none" id="XMLID_57_" stroke="#ff6600" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2"></path></g></svg></div><h3 className='home_experience_sub'>Cloud Computing</h3><p className='text-muted'>Cloud computing is something that always fascinates me. While being web developer, I have been using cloud for deploying my applications.</p>
                                        </motion.div>
                                    </div>
                                    <div class="row">
                                        <motion.div
                                            initial={{
                                                opacity: 0
                                            }}
                                            whileInView={{
                                                scale: [0.9, 0.9, 1],
                                                opacity: 1
                                            }}
                                            transition={{ ease: "easeIn", duration: 1 }}
                                            viewport={{ once: false }}
                                            class="col-sm m-2"
                                        >
                                            <div><svg width="64px" height="64px" viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>Android_2_line</title> <g id="页面-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"> <g id="Logo" transform="translate(0.000000, -96.000000)" fill-rule="nonzero"> <g id="Android_2_line" transform="translate(0.000000, 96.000000)"> <path d="M24,0 L24,24 L0,24 L0,0 L24,0 Z M12.5934901,23.257841 L12.5819402,23.2595131 L12.5108777,23.2950439 L12.4918791,23.2987469 L12.4918791,23.2987469 L12.4767152,23.2950439 L12.4056548,23.2595131 C12.3958229,23.2563662 12.3870493,23.2590235 12.3821421,23.2649074 L12.3780323,23.275831 L12.360941,23.7031097 L12.3658947,23.7234994 L12.3769048,23.7357139 L12.4804777,23.8096931 L12.4953491,23.8136134 L12.4953491,23.8136134 L12.5071152,23.8096931 L12.6106902,23.7357139 L12.6232938,23.7196733 L12.6232938,23.7196733 L12.6266527,23.7031097 L12.609561,23.275831 C12.6075724,23.2657013 12.6010112,23.2592993 12.5934901,23.257841 L12.5934901,23.257841 Z M12.8583906,23.1452862 L12.8445485,23.1473072 L12.6598443,23.2396597 L12.6498822,23.2499052 L12.6498822,23.2499052 L12.6471943,23.2611114 L12.6650943,23.6906389 L12.6699349,23.7034178 L12.6699349,23.7034178 L12.678386,23.7104931 L12.8793402,23.8032389 C12.8914285,23.8068999 12.9022333,23.8029875 12.9078286,23.7952264 L12.9118235,23.7811639 L12.8776777,23.1665331 C12.8752882,23.1545897 12.8674102,23.1470016 12.8583906,23.1452862 L12.8583906,23.1452862 Z M12.1430473,23.1473072 C12.1332178,23.1423925 12.1221763,23.1452606 12.1156365,23.1525954 L12.1099173,23.1665331 L12.0757714,23.7811639 C12.0751323,23.7926639 12.0828099,23.8018602 12.0926481,23.8045676 L12.108256,23.8032389 L12.3092106,23.7104931 L12.3186497,23.7024347 L12.3186497,23.7024347 L12.3225043,23.6906389 L12.340401,23.2611114 L12.337245,23.2485176 L12.337245,23.2485176 L12.3277531,23.2396597 L12.1430473,23.1473072 Z" id="MingCute" fill-rule="nonzero"> </path> <path d="M18.4472,4.10555 C18.9412,4.35254 19.1414,4.95321 18.8944,5.44719 L17.7199,7.79629 C20.3074,9.60378 22,12.6042 22,16 L22,17 C22,18.1045 21.1046,19 20,19 L4,19 C2.89543,19 2,18.1045 2,17 L2,16 C2,12.6042 3.69258,9.60377 6.28012,7.79629 L5.10557,5.44719 C4.85858,4.95321 5.05881,4.35254 5.55279,4.10555 C6.04676,3.85856 6.64744,4.05878 6.89443,4.55276 L8.02799,6.81988 C9.24552,6.29237 10.5886,5.99997 12,5.99997 C13.4114,5.99997 14.7545,6.29237 15.972,6.81988 L17.1056,4.55276 C17.3526,4.05878 17.9532,3.85856 18.4472,4.10555 Z M12,7.99998 C7.58172,7.99998 4,11.5817 4,16 L4,17 L20,17 L20,16 C20,11.5817 16.4183,7.99998 12,7.99998 Z M8.5,12 C9.32843,12 10,12.6715 10,13.5 C10,14.3284 9.32843,15 8.5,15 C7.67157,15 7,14.3284 7,13.5 C7,12.6715 7.67157,12 8.5,12 Z M15.5,12 C16.3284,12 17,12.6715 17,13.5 C17,14.3284 16.3284,15 15.5,15 C14.6716,15 14,14.3284 14,13.5 C14,12.6715 14.6716,12 15.5,12 Z" id="形状" fill="#ff7300"> </path> </g> </g> </g> </g></svg></div><div><h3 className='home_experience_sub'>Android</h3></div><p className='text-muted'>Working at Galaxy helped me to learn and gain advanced knowledge of android development with React Native.</p>
                                        </motion.div>
                                        <motion.div
                                            initial={{
                                                opacity: 0
                                            }}
                                            whileInView={{
                                                scale: [0.9, 0.9, 1],
                                                opacity: 1
                                            }}
                                            transition={{ ease: "easeIn", duration: 1 }}
                                            viewport={{ once: false }}
                                            class="col-sm m-2"
                                        >
                                            <div><svg width="64px" height="64px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M19 22C20.6569 22 22 20.6569 22 19C22 17.3431 20.6569 16 19 16C17.3431 16 16 17.3431 16 19C16 20.6569 17.3431 22 19 22Z" stroke="#ff7b00" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> <g opacity="0.4"> <path d="M19 16V6.5C19 5.4 18.1 4.5 17 4.5H11.5" stroke="#ff7b00" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M14 2L11 4.5L14 7" stroke="#ff7b00" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M5 8V17.5C5 18.6 5.9 19.5 7 19.5H12.5" stroke="#ff7b00" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M10 22L13 19.5L10 17" stroke="#ff7b00" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> </g> <path d="M5 8C6.65685 8 8 6.65685 8 5C8 3.34315 6.65685 2 5 2C3.34315 2 2 3.34315 2 5C2 6.65685 3.34315 8 5 8Z" stroke="#ff7b00" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg></div><h3 className='home_experience_sub'>Data Structures</h3><p className='text-muted'>After all these years the one thing that made every bit of code possible is DSA and it is the only thing that has made my brain think about complex programming.</p>
                                        </motion.div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <h1 className='text-center home_experience_sub'>Technologies</h1>
                    <div className="">
                        <div className='home_skills text-center'>
                            <div className="skill_grid">
                                <div className="skill_card m-2">
                                    <span className="skill_icon">

                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" fill="currentColor"><title>AWS</title><path d="M180.41 203.01c-.72 22.65 10.6 32.68 10.88 39.05a8.164 8.164 0 0 1-4.1 6.27l-12.8 8.96a10.66 10.66 0 0 1-5.63 1.92c-.43-.02-8.19 1.83-20.48-25.61a78.608 78.608 0 0 1-62.61 29.45c-16.28.89-60.4-9.24-58.13-56.21-1.59-38.28 34.06-62.06 70.93-60.05 7.1.02 21.6.37 46.99 6.27v-15.62c2.69-26.46-14.7-46.99-44.81-43.91-2.4.01-19.4-.5-45.84 10.11-7.36 3.38-8.3 2.82-10.75 2.82-7.41 0-4.36-21.48-2.94-24.2 5.21-6.4 35.86-18.35 65.94-18.18a76.857 76.857 0 0 1 55.69 17.28 70.285 70.285 0 0 1 17.67 52.36l-.01 69.29zM93.99 235.4c32.43-.47 46.16-19.97 49.29-30.47 2.46-10.05 2.05-16.41 2.05-27.4-9.67-2.32-23.59-4.85-39.56-4.87-15.15-1.14-42.82 5.63-41.74 32.26-1.24 16.79 11.12 31.4 29.96 30.48zm170.92 23.05c-7.86.72-11.52-4.86-12.68-10.37l-49.8-164.65c-.97-2.78-1.61-5.65-1.92-8.58a4.61 4.61 0 0 1 3.86-5.25c.24-.04-2.13 0 22.25 0 8.78-.88 11.64 6.03 12.55 10.37l35.72 140.83 33.16-140.83c.53-3.22 2.94-11.07 12.8-10.24h17.16c2.17-.18 11.11-.5 12.68 10.37l33.42 142.63L420.98 80.1c.48-2.18 2.72-11.37 12.68-10.37h19.72c.85-.13 6.15-.81 5.25 8.58-.43 1.85 3.41-10.66-52.75 169.9-1.15 5.51-4.82 11.09-12.68 10.37h-18.69c-10.94 1.15-12.51-9.66-12.68-10.75L328.67 110.7l-32.78 136.99c-.16 1.09-1.73 11.9-12.68 10.75h-18.3zm273.48 5.63c-5.88.01-33.92-.3-57.36-12.29a12.802 12.802 0 0 1-7.81-11.91v-10.75c0-8.45 6.2-6.9 8.83-5.89 10.04 4.06 16.48 7.14 28.81 9.6 36.65 7.53 52.77-2.3 56.72-4.48 13.15-7.81 14.19-25.68 5.25-34.95-10.48-8.79-15.48-9.12-53.13-21-4.64-1.29-43.7-13.61-43.79-52.36-.61-28.24 25.05-56.18 69.52-55.95 12.67-.01 46.43 4.13 55.57 15.62 1.35 2.09 2.02 4.55 1.92 7.04v10.11c0 4.44-1.62 6.66-4.87 6.66-7.71-.86-21.39-11.17-49.16-10.75-6.89-.36-39.89.91-38.41 24.97-.43 18.96 26.61 26.07 29.7 26.89 36.46 10.97 48.65 12.79 63.12 29.58 17.14 22.25 7.9 48.3 4.35 55.44-19.08 37.49-68.42 34.44-69.26 34.42zm40.2 104.86c-70.03 51.72-171.69 79.25-258.49 79.25A469.127 469.127 0 0 1 2.83 327.46c-6.53-5.89-.77-13.96 7.17-9.47a637.37 637.37 0 0 0 316.88 84.12 630.22 630.22 0 0 0 241.59-49.55c11.78-5 21.77 7.8 10.12 16.38zm29.19-33.29c-8.96-11.52-59.28-5.38-81.81-2.69-6.79.77-7.94-5.12-1.79-9.47 40.07-28.17 105.88-20.1 113.44-10.63 7.55 9.47-2.05 75.41-39.56 106.91-5.76 4.87-11.27 2.3-8.71-4.1 8.44-21.25 27.39-68.49 18.43-80.02z" /></svg>
                                    </span>
                                    <div className="skill_shine"></div>
                                    <div className="skill_background">
                                        <div className="skill_tiles">
                                            <div className="skill_tile skill_tile-1"></div>
                                            <div className="skill_tile skill_tile-2"></div>
                                            <div className="skill_tile skill_tile-3"></div>
                                            <div className="skill_tile skill_tile-4"></div>

                                            <div className="skill_tile skill_tile-5"></div>
                                            <div className="skill_tile skill_tile-6"></div>
                                            <div className="skill_tile skill_tile-7"></div>
                                            <div className="skill_tile skill_tile-8"></div>

                                            <div className="skill_tile skill_tile-9"></div>
                                            <div className="skill_tile skill_tile-10"></div>
                                        </div>

                                        <div className="line line-1"></div>
                                        <div className="line line-2"></div>
                                        <div className="line line-3"></div>
                                    </div>
                                </div>
                                <div className="skill_card m-2">
                                    <span className="skill_icon">

                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" fill="currentColor"><title>NodeJs</title><path d="M224 508c-6.7 0-13.5-1.8-19.4-5.2l-61.7-36.5c-9.2-5.2-4.7-7-1.7-8 12.3-4.3 14.8-5.2 27.9-12.7 1.4-.8 3.2-.5 4.6.4l47.4 28.1c1.7 1 4.1 1 5.7 0l184.7-106.6c1.7-1 2.8-3 2.8-5V149.3c0-2.1-1.1-4-2.9-5.1L226.8 37.7c-1.7-1-4-1-5.7 0L36.6 144.3c-1.8 1-2.9 3-2.9 5.1v213.1c0 2 1.1 4 2.9 4.9l50.6 29.2c27.5 13.7 44.3-2.4 44.3-18.7V167.5c0-3 2.4-5.3 5.4-5.3h23.4c2.9 0 5.4 2.3 5.4 5.3V378c0 36.6-20 57.6-54.7 57.6-10.7 0-19.1 0-42.5-11.6l-48.4-27.9C8.1 389.2.7 376.3.7 362.4V149.3c0-13.8 7.4-26.8 19.4-33.7L204.6 9c11.7-6.6 27.2-6.6 38.8 0l184.7 106.7c12 6.9 19.4 19.8 19.4 33.7v213.1c0 13.8-7.4 26.7-19.4 33.7L243.4 502.8c-5.9 3.4-12.6 5.2-19.4 5.2zm149.1-210.1c0-39.9-27-50.5-83.7-58-57.4-7.6-63.2-11.5-63.2-24.9 0-11.1 4.9-25.9 47.4-25.9 37.9 0 51.9 8.2 57.7 33.8.5 2.4 2.7 4.2 5.2 4.2h24c1.5 0 2.9-.6 3.9-1.7s1.5-2.6 1.4-4.1c-3.7-44.1-33-64.6-92.2-64.6-52.7 0-84.1 22.2-84.1 59.5 0 40.4 31.3 51.6 81.8 56.6 60.5 5.9 65.2 14.8 65.2 26.7 0 20.6-16.6 29.4-55.5 29.4-48.9 0-59.6-12.3-63.2-36.6-.4-2.6-2.6-4.5-5.3-4.5h-23.9c-3 0-5.3 2.4-5.3 5.3 0 31.1 16.9 68.2 97.8 68.2 58.4-.1 92-23.2 92-63.4z" /></svg>
                                    </span>
                                    <div className="skill_shine"></div>
                                    <div className="skill_background">
                                        <div className="skill_tiles">
                                            <div className="skill_tile skill_tile-1"></div>
                                            <div className="skill_tile skill_tile-2"></div>
                                            <div className="skill_tile skill_tile-3"></div>
                                            <div className="skill_tile skill_tile-4"></div>

                                            <div className="skill_tile skill_tile-5"></div>
                                            <div className="skill_tile skill_tile-6"></div>
                                            <div className="skill_tile skill_tile-7"></div>
                                            <div className="skill_tile skill_tile-8"></div>

                                            <div className="skill_tile skill_tile-9"></div>
                                            <div className="skill_tile skill_tile-10"></div>
                                        </div>

                                        <div className="line line-1"></div>
                                        <div className="line line-2"></div>
                                        <div className="line line-3"></div>
                                    </div>
                                </div>
                                <div className="skill_card m-2">
                                    <span className="skill_icon">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor"><title>React</title><path d="M418.2 177.2c-5.4-1.8-10.8-3.5-16.2-5.1.9-3.7 1.7-7.4 2.5-11.1 12.3-59.6 4.2-107.5-23.1-123.3-26.3-15.1-69.2.6-112.6 38.4-4.3 3.7-8.5 7.6-12.5 11.5-2.7-2.6-5.5-5.2-8.3-7.7-45.5-40.4-91.1-57.4-118.4-41.5-26.2 15.2-34 60.3-23 116.7 1.1 5.6 2.3 11.1 3.7 16.7-6.4 1.8-12.7 3.8-18.6 5.9C38.3 196.2 0 225.4 0 255.6c0 31.2 40.8 62.5 96.3 81.5 4.5 1.5 9 3 13.6 4.3-1.5 6-2.8 11.9-4 18-10.5 55.5-2.3 99.5 23.9 114.6 27 15.6 72.4-.4 116.6-39.1 3.5-3.1 7-6.3 10.5-9.7 4.4 4.3 9 8.4 13.6 12.4 42.8 36.8 85.1 51.7 111.2 36.6 27-15.6 35.8-62.9 24.4-120.5-.9-4.4-1.9-8.9-3-13.5 3.2-.9 6.3-1.9 9.4-2.9 57.7-19.1 99.5-50 99.5-81.7 0-30.3-39.4-59.7-93.8-78.4zM282.9 92.3c37.2-32.4 71.9-45.1 87.7-36 16.9 9.7 23.4 48.9 12.8 100.4-.7 3.4-1.4 6.7-2.3 10-22.2-5-44.7-8.6-67.3-10.6-13-18.6-27.2-36.4-42.6-53.1 3.9-3.7 7.7-7.2 11.7-10.7zM167.2 307.5c5.1 8.7 10.3 17.4 15.8 25.9-15.6-1.7-31.1-4.2-46.4-7.5 4.4-14.4 9.9-29.3 16.3-44.5 4.6 8.8 9.3 17.5 14.3 26.1zm-30.3-120.3c14.4-3.2 29.7-5.8 45.6-7.8-5.3 8.3-10.5 16.8-15.4 25.4-4.9 8.5-9.7 17.2-14.2 26-6.3-14.9-11.6-29.5-16-43.6zm27.4 68.9c6.6-13.8 13.8-27.3 21.4-40.6s15.8-26.2 24.4-38.9c15-1.1 30.3-1.7 45.9-1.7s31 .6 45.9 1.7c8.5 12.6 16.6 25.5 24.3 38.7s14.9 26.7 21.7 40.4c-6.7 13.8-13.9 27.4-21.6 40.8-7.6 13.3-15.7 26.2-24.2 39-14.9 1.1-30.4 1.6-46.1 1.6s-30.9-.5-45.6-1.4c-8.7-12.7-16.9-25.7-24.6-39s-14.8-26.8-21.5-40.6zm180.6 51.2c5.1-8.8 9.9-17.7 14.6-26.7 6.4 14.5 12 29.2 16.9 44.3-15.5 3.5-31.2 6.2-47 8 5.4-8.4 10.5-17 15.5-25.6zm14.4-76.5c-4.7-8.8-9.5-17.6-14.5-26.2-4.9-8.5-10-16.9-15.3-25.2 16.1 2 31.5 4.7 45.9 8-4.6 14.8-10 29.2-16.1 43.4zM256.2 118.3c10.5 11.4 20.4 23.4 29.6 35.8-19.8-.9-39.7-.9-59.5 0 9.8-12.9 19.9-24.9 29.9-35.8zM140.2 57c16.8-9.8 54.1 4.2 93.4 39 2.5 2.2 5 4.6 7.6 7-15.5 16.7-29.8 34.5-42.9 53.1-22.6 2-45 5.5-67.2 10.4-1.3-5.1-2.4-10.3-3.5-15.5-9.4-48.4-3.2-84.9 12.6-94zm-24.5 263.6c-4.2-1.2-8.3-2.5-12.4-3.9-21.3-6.7-45.5-17.3-63-31.2-10.1-7-16.9-17.8-18.8-29.9 0-18.3 31.6-41.7 77.2-57.6 5.7-2 11.5-3.8 17.3-5.5 6.8 21.7 15 43 24.5 63.6-9.6 20.9-17.9 42.5-24.8 64.5zm116.6 98c-16.5 15.1-35.6 27.1-56.4 35.3-11.1 5.3-23.9 5.8-35.3 1.3-15.9-9.2-22.5-44.5-13.5-92 1.1-5.6 2.3-11.2 3.7-16.7 22.4 4.8 45 8.1 67.9 9.8 13.2 18.7 27.7 36.6 43.2 53.4-3.2 3.1-6.4 6.1-9.6 8.9zm24.5-24.3c-10.2-11-20.4-23.2-30.3-36.3 9.6.4 19.5.6 29.5.6 10.3 0 20.4-.2 30.4-.7-9.2 12.7-19.1 24.8-29.6 36.4zm130.7 30c-.9 12.2-6.9 23.6-16.5 31.3-15.9 9.2-49.8-2.8-86.4-34.2-4.2-3.6-8.4-7.5-12.7-11.5 15.3-16.9 29.4-34.8 42.2-53.6 22.9-1.9 45.7-5.4 68.2-10.5 1 4.1 1.9 8.2 2.7 12.2 4.9 21.6 5.7 44.1 2.5 66.3zm18.2-107.5c-2.8.9-5.6 1.8-8.5 2.6-7-21.8-15.6-43.1-25.5-63.8 9.6-20.4 17.7-41.4 24.5-62.9 5.2 1.5 10.2 3.1 15 4.7 46.6 16 79.3 39.8 79.3 58 0 19.6-34.9 44.9-84.8 61.4zm-149.7-15c25.3 0 45.8-20.5 45.8-45.8s-20.5-45.8-45.8-45.8c-25.3 0-45.8 20.5-45.8 45.8s20.5 45.8 45.8 45.8z" /></svg>
                                    </span>
                                    <div className="skill_shine"></div>
                                    <div className="skill_background">
                                        <div className="skill_tiles">
                                            <div className="skill_tile skill_tile-1"></div>
                                            <div className="skill_tile skill_tile-2"></div>
                                            <div className="skill_tile skill_tile-3"></div>
                                            <div className="skill_tile skill_tile-4"></div>

                                            <div className="skill_tile skill_tile-5"></div>
                                            <div className="skill_tile skill_tile-6"></div>
                                            <div className="skill_tile skill_tile-7"></div>
                                            <div className="skill_tile skill_tile-8"></div>

                                            <div className="skill_tile skill_tile-9"></div>
                                            <div className="skill_tile skill_tile-10"></div>
                                        </div>

                                        <div className="line line-1"></div>
                                        <div className="line line-2"></div>
                                        <div className="line line-3"></div>
                                    </div>
                                </div>
                                <div className="skill_card m-2">
                                    <span className="skill_icon">
                                        <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="currentColor"><title>MongoDB</title><path d="M17.193 9.555c-1.264-5.58-4.252-7.414-4.573-8.115-.28-.394-.53-.954-.735-1.44-.036.495-.055.685-.523 1.184-.723.566-4.438 3.682-4.74 10.02-.282 5.912 4.27 9.435 4.888 9.884l.07.05A73.49 73.49 0 0111.91 24h.481c.114-1.032.284-2.056.51-3.07.417-.296.604-.463.85-.693a11.342 11.342 0 003.639-8.464c.01-.814-.103-1.662-.197-2.218zm-5.336 8.195s0-8.291.275-8.29c.213 0 .49 10.695.49 10.695-.381-.045-.765-1.76-.765-2.405z" /></svg>
                                    </span>

                                    <div className="skill_shine"></div>
                                    <div className="skill_background">
                                        <div className="skill_tiles">
                                            <div className="skill_tile skill_tile-1"></div>
                                            <div className="skill_tile skill_tile-2"></div>
                                            <div className="skill_tile skill_tile-3"></div>
                                            <div className="skill_tile skill_tile-4"></div>

                                            <div className="skill_tile skill_tile-5"></div>
                                            <div className="skill_tile skill_tile-6"></div>
                                            <div className="skill_tile skill_tile-7"></div>
                                            <div className="skill_tile skill_tile-8"></div>

                                            <div className="skill_tile skill_tile-9"></div>
                                            <div className="skill_tile skill_tile-10"></div>
                                        </div>

                                        <div className="line line-1"></div>
                                        <div className="line line-2"></div>
                                        <div className="line line-3"></div>
                                    </div>
                                </div>
                                <div className="skill_card m-2">
                                    <span className="skill_icon">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-github" viewBox="0 0 16 16"><title>GitHub</title> <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" /> </svg>
                                    </span>

                                    <div className="skill_shine"></div>
                                    <div className="skill_background">
                                        <div className="skill_tiles">
                                            <div className="skill_tile skill_tile-1"></div>
                                            <div className="skill_tile skill_tile-2"></div>
                                            <div className="skill_tile skill_tile-3"></div>
                                            <div className="skill_tile skill_tile-4"></div>

                                            <div className="skill_tile skill_tile-5"></div>
                                            <div className="skill_tile skill_tile-6"></div>
                                            <div className="skill_tile skill_tile-7"></div>
                                            <div className="skill_tile skill_tile-8"></div>

                                            <div className="skill_tile skill_tile-9"></div>
                                            <div className="skill_tile skill_tile-10"></div>
                                        </div>

                                        <div className="line line-1"></div>
                                        <div className="line line-2"></div>
                                        <div className="line line-3"></div>
                                    </div>
                                </div>
                                <div className="skill_card m-2">
                                    <span className="skill_icon">
                                        <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill='currentColor'><title>Django</title><path d="M11.146 0h3.924v18.166c-2.013.382-3.491.535-5.096.535-4.791 0-7.288-2.166-7.288-6.32 0-4.002 2.65-6.6 6.753-6.6.637 0 1.121.05 1.707.203zm0 9.143a3.894 3.894 0 00-1.325-.204c-1.988 0-3.134 1.223-3.134 3.365 0 2.09 1.096 3.236 3.109 3.236.433 0 .79-.025 1.35-.102V9.142zM21.314 6.06v9.098c0 3.134-.229 4.638-.917 5.937-.637 1.249-1.478 2.039-3.211 2.905l-3.644-1.733c1.733-.815 2.574-1.53 3.109-2.625.561-1.121.739-2.421.739-5.835V6.059h3.924zM17.39.021h3.924v4.026H17.39z" /></svg>
                                    </span>

                                    <div className="skill_shine"></div>
                                    <div className="skill_background">
                                        <div className="skill_tiles">
                                            <div className="skill_tile skill_tile-1"></div>
                                            <div className="skill_tile skill_tile-2"></div>
                                            <div className="skill_tile skill_tile-3"></div>
                                            <div className="skill_tile skill_tile-4"></div>

                                            <div className="skill_tile skill_tile-5"></div>
                                            <div className="skill_tile skill_tile-6"></div>
                                            <div className="skill_tile skill_tile-7"></div>
                                            <div className="skill_tile skill_tile-8"></div>

                                            <div className="skill_tile skill_tile-9"></div>
                                            <div className="skill_tile skill_tile-10"></div>
                                        </div>

                                        <div className="line line-1"></div>
                                        <div className="line line-2"></div>
                                        <div className="line line-3"></div>
                                    </div>
                                </div>
                                <div className="skill_card m-2">
                                    <span className="skill_icon">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" fill="currentColor"><title>Java</title><path d="M277.74 312.9c9.8-6.7 23.4-12.5 23.4-12.5s-38.7 7-77.2 10.2c-47.1 3.9-97.7 4.7-123.1 1.3-60.1-8 33-30.1 33-30.1s-36.1-2.4-80.6 19c-52.5 25.4 130 37 224.5 12.1zm-85.4-32.1c-19-42.7-83.1-80.2 0-145.8C296 53.2 242.84 0 242.84 0c21.5 84.5-75.6 110.1-110.7 162.6-23.9 35.9 11.7 74.4 60.2 118.2zm114.6-176.2c.1 0-175.2 43.8-91.5 140.2 24.7 28.4-6.5 54-6.5 54s62.7-32.4 33.9-72.9c-26.9-37.8-47.5-56.6 64.1-121.3zm-6.1 270.5a12.19 12.19 0 0 1-2 2.6c128.3-33.7 81.1-118.9 19.8-97.3a17.33 17.33 0 0 0-8.2 6.3 70.45 70.45 0 0 1 11-3c31-6.5 75.5 41.5-20.6 91.4zM348 437.4s14.5 11.9-15.9 21.2c-57.9 17.5-240.8 22.8-291.6.7-18.3-7.9 16-19 26.8-21.3 11.2-2.4 17.7-2 17.7-2-20.3-14.3-131.3 28.1-56.4 40.2C232.84 509.4 401 461.3 348 437.4zM124.44 396c-78.7 22 47.9 67.4 148.1 24.5a185.89 185.89 0 0 1-28.2-13.8c-44.7 8.5-65.4 9.1-106 4.5-33.5-3.8-13.9-15.2-13.9-15.2zm179.8 97.2c-78.7 14.8-175.8 13.1-233.3 3.6 0-.1 11.8 9.7 72.4 13.6 92.2 5.9 233.8-3.3 237.1-46.9 0 0-6.4 16.5-76.2 29.7zM260.64 353c-59.2 11.4-93.5 11.1-136.8 6.6-33.5-3.5-11.6-19.7-11.6-19.7-86.8 28.8 48.2 61.4 169.5 25.9a60.37 60.37 0 0 1-21.1-12.8z" /></svg>
                                    </span>
                                    <div className="skill_shine"></div>
                                    <div className="skill_background">
                                        <div className="skill_tiles">
                                            <div className="skill_tile skill_tile-1"></div>
                                            <div className="skill_tile skill_tile-2"></div>
                                            <div className="skill_tile skill_tile-3"></div>
                                            <div className="skill_tile skill_tile-4"></div>

                                            <div className="skill_tile skill_tile-5"></div>
                                            <div className="skill_tile skill_tile-6"></div>
                                            <div className="skill_tile skill_tile-7"></div>
                                            <div className="skill_tile skill_tile-8"></div>

                                            <div className="skill_tile skill_tile-9"></div>
                                            <div className="skill_tile skill_tile-10"></div>
                                        </div>

                                        <div className="line line-1"></div>
                                        <div className="line line-2"></div>
                                        <div className="line line-3"></div>
                                    </div>
                                </div>
                                <div className="skill_card m-2">
                                    <span className="skill_icon">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><title>C++</title><path fill="currentColor" d="M20.66 7a1.51 1.51 0 0 0-.55-.57l-7.34-4.24a1.67 1.67 0 0 0-1.54 0L3.89 6.43a1.68 1.68 0 0 0-.77 1.33v8.48a1.57 1.57 0 0 0 .22.76a1.51 1.51 0 0 0 .55.57l7.34 4.24a1.67 1.67 0 0 0 1.54 0l7.34-4.24a1.51 1.51 0 0 0 .55-.57a1.57 1.57 0 0 0 .22-.76V7.76a1.57 1.57 0 0 0-.22-.76zM12 17.92A5.92 5.92 0 1 1 17.13 9L16 9.71l-.36.2l-1 .61A3 3 0 0 0 9 12a2.88 2.88 0 0 0 .4 1.48a3 3 0 0 0 5.13 0l2.6 1.52A5.94 5.94 0 0 1 12 17.92zm5.92-5.59h-.66V13h-.65v-.66H16v-.66h.66V11h.65v.66h.66zm2.47 0h-.66V13h-.66v-.66h-.65v-.66h.65V11h.66v.66h.66z" /></svg>
                                    </span>
                                    <div className="skill_shine"></div>
                                    <div className="skill_background">
                                        <div className="skill_tiles">
                                            <div className="skill_tile skill_tile-1"></div>
                                            <div className="skill_tile skill_tile-2"></div>
                                            <div className="skill_tile skill_tile-3"></div>
                                            <div className="skill_tile skill_tile-4"></div>

                                            <div className="skill_tile skill_tile-5"></div>
                                            <div className="skill_tile skill_tile-6"></div>
                                            <div className="skill_tile skill_tile-7"></div>
                                            <div className="skill_tile skill_tile-8"></div>

                                            <div className="skill_tile skill_tile-9"></div>
                                            <div className="skill_tile skill_tile-10"></div>
                                        </div>

                                        <div className="line line-1"></div>
                                        <div className="line line-2"></div>
                                        <div className="line line-3"></div>
                                    </div>
                                </div>
                                <div className="skill_card m-2">
                                    <span className="skill_icon">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" fill="currentColor"><title>Python</title><path d="M439.8 200.5c-7.7-30.9-22.3-54.2-53.4-54.2h-40.1v47.4c0 36.8-31.2 67.8-66.8 67.8H172.7c-29.2 0-53.4 25-53.4 54.3v101.8c0 29 25.2 46 53.4 54.3 33.8 9.9 66.3 11.7 106.8 0 26.9-7.8 53.4-23.5 53.4-54.3v-40.7H226.2v-13.6h160.2c31.1 0 42.6-21.7 53.4-54.2 11.2-33.5 10.7-65.7 0-108.6zM286.2 404c11.1 0 20.1 9.1 20.1 20.3 0 11.3-9 20.4-20.1 20.4-11 0-20.1-9.2-20.1-20.4.1-11.3 9.1-20.3 20.1-20.3zM167.8 248.1h106.8c29.7 0 53.4-24.5 53.4-54.3V91.9c0-29-24.4-50.7-53.4-55.6-35.8-5.9-74.7-5.6-106.8.1-45.2 8-53.4 24.7-53.4 55.6v40.7h106.9v13.6h-147c-31.1 0-58.3 18.7-66.8 54.2-9.8 40.7-10.2 66.1 0 108.6 7.6 31.6 25.7 54.2 56.8 54.2H101v-48.8c0-35.3 30.5-66.4 66.8-66.4zm-6.7-142.6c-11.1 0-20.1-9.1-20.1-20.3.1-11.3 9-20.4 20.1-20.4 11 0 20.1 9.2 20.1 20.4s-9 20.3-20.1 20.3z" /></svg>
                                    </span>
                                    <div className="skill_shine"></div>
                                    <div className="skill_background">
                                        <div className="skill_tiles">
                                            <div className="skill_tile skill_tile-1"></div>
                                            <div className="skill_tile skill_tile-2"></div>
                                            <div className="skill_tile skill_tile-3"></div>
                                            <div className="skill_tile skill_tile-4"></div>

                                            <div className="skill_tile skill_tile-5"></div>
                                            <div className="skill_tile skill_tile-6"></div>
                                            <div className="skill_tile skill_tile-7"></div>
                                            <div className="skill_tile skill_tile-8"></div>

                                            <div className="skill_tile skill_tile-9"></div>
                                            <div className="skill_tile skill_tile-10"></div>
                                        </div>

                                        <div className="line line-1"></div>
                                        <div className="line line-2"></div>
                                        <div className="line line-3"></div>
                                    </div>
                                </div>
                                <div className="skill_card m-2">
                                    <span className="skill_icon">
                                        <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="currentColor"><title>Spring Boot</title><path d="m23.693 10.7058-4.73-8.1844c-.4094-.7106-1.4166-1.2942-2.2402-1.2942H7.2725c-.819 0-1.8308.5836-2.2402 1.2942L.307 10.7058c-.4095.7106-.4095 1.873 0 2.5837l4.7252 8.189c.4094.7107 1.4166 1.2943 2.2402 1.2943h9.455c.819 0 1.826-.5836 2.2402-1.2942l4.7252-8.189c.4095-.7107.4095-1.8732 0-2.5838zM10.9763 5.7547c0-.5365.4377-.9742.9742-.9742s.9742.4377.9742.9742v5.8217c0 .5366-.4377.9742-.9742.9742s-.9742-.4376-.9742-.9742zm.9742 12.4294c-3.6427 0-6.6077-2.965-6.6077-6.6077.0047-2.0896.993-4.0521 2.6685-5.304a.8657.8657 0 0 1 1.2142.1788.8657.8657 0 0 1-.1788 1.2143c-2.1602 1.6048-2.612 4.6592-1.0072 6.8194 1.6049 2.1603 4.6593 2.612 6.8195 1.0072 1.2378-.9177 1.9673-2.372 1.9673-3.9157a4.8972 4.8972 0 0 0-1.9861-3.925c-.386-.2824-.466-.8284-.1836-1.2143.2824-.386.8283-.466 1.2143-.1835 1.6895 1.2471 2.6826 3.2238 2.6873 5.3228 0 3.6474-2.965 6.6077-6.6077 6.6077z"></path></svg>
                                        {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" fill="currentColor"><title>Python</title><path d="M439.8 200.5c-7.7-30.9-22.3-54.2-53.4-54.2h-40.1v47.4c0 36.8-31.2 67.8-66.8 67.8H172.7c-29.2 0-53.4 25-53.4 54.3v101.8c0 29 25.2 46 53.4 54.3 33.8 9.9 66.3 11.7 106.8 0 26.9-7.8 53.4-23.5 53.4-54.3v-40.7H226.2v-13.6h160.2c31.1 0 42.6-21.7 53.4-54.2 11.2-33.5 10.7-65.7 0-108.6zM286.2 404c11.1 0 20.1 9.1 20.1 20.3 0 11.3-9 20.4-20.1 20.4-11 0-20.1-9.2-20.1-20.4.1-11.3 9.1-20.3 20.1-20.3zM167.8 248.1h106.8c29.7 0 53.4-24.5 53.4-54.3V91.9c0-29-24.4-50.7-53.4-55.6-35.8-5.9-74.7-5.6-106.8.1-45.2 8-53.4 24.7-53.4 55.6v40.7h106.9v13.6h-147c-31.1 0-58.3 18.7-66.8 54.2-9.8 40.7-10.2 66.1 0 108.6 7.6 31.6 25.7 54.2 56.8 54.2H101v-48.8c0-35.3 30.5-66.4 66.8-66.4zm-6.7-142.6c-11.1 0-20.1-9.1-20.1-20.3.1-11.3 9-20.4 20.1-20.4 11 0 20.1 9.2 20.1 20.4s-9 20.3-20.1 20.3z" /></svg> */}
                                    </span>
                                    <div className="skill_shine"></div>
                                    <div className="skill_background">
                                        <div className="skill_tiles">
                                            <div className="skill_tile skill_tile-1"></div>
                                            <div className="skill_tile skill_tile-2"></div>
                                            <div className="skill_tile skill_tile-3"></div>
                                            <div className="skill_tile skill_tile-4"></div>

                                            <div className="skill_tile skill_tile-5"></div>
                                            <div className="skill_tile skill_tile-6"></div>
                                            <div className="skill_tile skill_tile-7"></div>
                                            <div className="skill_tile skill_tile-8"></div>

                                            <div className="skill_tile skill_tile-9"></div>
                                            <div className="skill_tile skill_tile-10"></div>
                                        </div>

                                        <div className="line line-1"></div>
                                        <div className="line line-2"></div>
                                        <div className="line line-3"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='mx-4 my-5'>
                    <div className="container-fluid m-2">
                        <div className='row'>
                            <div className='col-sm-6 '>
                                <div className='my-2'>
                                    <h4 className='text-muted home_experience_head'>My Profiles</h4>
                                    <h1 className='home_experience_sub'>Coding and development platforms I have been working on so far</h1>
                                </div>
                                <div className='d-flex flex-column justify-content-between'>
                                    <motion.div
                                        initial={{
                                            opacity: 0
                                        }}
                                        whileInView={{
                                            scale: [0.85, 0.85, 1],
                                            opacity: 1
                                        }}
                                        transition={{ ease: "easeIn", duration: 1 }}
                                        viewport={{ once: false }}
                                    >
                                        <div className='container p-0'>
                                            <div className="profilecard m-2 glowing-border">
                                                <img className="profilecard_img " src="https://static.leetcode-cn.com/cn-legacy-assets/images/LeetCode_Sharing.png" alt="leetcode"></img>
                                                <img className="profilestat_img ltcd_stat_img_bg" src="https://leetcard.jacoblin.cool/Deepcodr" alt="Leetcode stats"></img>
                                                {/* <img className="" src="https://github-readme-streak-stats.herokuapp.com/?user=deepcodr&theme=vue-dark&hide_border=false" alt="Github stats"></img> */}
                                            </div>
                                        </div>
                                    </motion.div>
                                    <motion.div
                                        initial={{
                                            opacity: 0
                                        }}
                                        whileInView={{
                                            scale: [0.85, 0.85, 1],
                                            opacity: 1
                                        }}
                                        transition={{ ease: "easeIn", duration: 1 }}
                                        viewport={{ once: false }}
                                    >
                                        <div className='container p-0'>
                                            <div className="profilecard m-2 glowing-border">
                                                <img className="profilecard_img" src="https://yxxshin.github.io/images/CodeForces_Cover.jpg" alt="codeforces"></img>
                                                <img className="profilestat_img bg-light cdf_stat_img_bg" src="https://raw.githubusercontent.com/deepcodr/cf-stats/main/output/light_card.svg#gh-dark-mode-only)" alt="Codeforces stats"></img>
                                                {/* <img className="" src="https://github-readme-streak-stats.herokuapp.com/?user=deepcodr&theme=vue-dark&hide_border=false" alt="Github stats"></img> */}
                                            </div>
                                        </div>
                                    </motion.div>
                                </div>
                            </div>
                            <div className='col-sm-6 d-flex flex-column justify-content-around'>
                                <motion.div
                                    initial={{
                                        opacity: 0
                                    }}
                                    whileInView={{
                                        scale: [0.85, 0.85, 1],
                                        opacity: 1
                                    }}
                                    transition={{ ease: "easeIn", duration: 1 }}
                                    viewport={{ once: false }}
                                >
                                    <div className='container p-0'>
                                        <div className="profilecard m-2 glowing-border">
                                            <img className="profilecard_img" src="https://www.macobserver.com/wp-content/uploads/2019/05/workfeatured-GitHub-2.png" alt="github"></img>
                                            <img className="profilestat_img gthb_stat_img_bg" src="https://github-readme-stats.vercel.app/api?username=deepcodr&theme=gruvbox&show_icons=true&hide_border=true&count_private=true" alt="Github stats"></img>
                                            {/* <img className="" src="https://github-readme-streak-stats.herokuapp.com/?user=deepcodr&theme=vue-dark&hide_border=false" alt="Github stats"></img> */}
                                        </div>
                                    </div>
                                </motion.div>
                                <motion.div
                                    initial={{
                                        opacity: 0
                                    }}
                                    whileInView={{
                                        scale: [0.85, 0.85, 1],
                                        opacity: 1
                                    }}
                                    transition={{ ease: "easeIn", duration: 1 }}
                                    viewport={{ once: false }}
                                >
                                    <div className='container p-0'>
                                        <div className="profilecard m-2 glowing-border">
                                            <img className="profilecard_img " src="https://th.bing.com/th/id/OIP.BU7b8WcD3XVMJLxdfofXewHaDv?rs=1&pid=ImgDetMain" alt="gfg"></img>
                                            <img className="profilestat_img gfg_stat_img_bg" src="https://geeks-for-geeks-stats-api-napiyo.vercel.app/?userName=deepcodr" alt="Gfg stats"></img>
                                            {/* <img className="" src="https://github-readme-streak-stats.herokuapp.com/?user=deepcodr&theme=vue-dark&hide_border=false" alt="Github stats"></img> */}
                                        </div>
                                    </div>
                                </motion.div>
                                <div className='m-4 text-center'>
                                    <h1 className='home_experience_sub text-muted'> </h1>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='my-3'>
                    <div className='p-5'>
                        <div className='m-2 p-2'>
                            <h1 className='home_experience_sub '>Let's Connect</h1>
                            <h4 className='text-muted'>Now that you know something about me lets talk business</h4>
                        </div>
                        <div className='m-2 p-2'>
                            <button className='btn btn-lg border border-light text-light rounded-0 my-auto mx-auto'>Connect Now</button>
                        </div>
                    </div>
                </div>
                <div className='container-fluid m-2 my-5 p-2'>
                    <blockquote class="q-card q-card-color-2">
                        <div class="content display-4">Everybody Should Learn To Code A Computer Because It Teaches You How To Think.</div>
                        <div class='author text-light'><h7>Steve Jobs</h7></div>
                    </blockquote>
                </div>

            </div >
            <Footer />
        </>
    )
}
