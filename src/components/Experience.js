import React, { useEffect } from 'react';
import './custom.css';
import { Link, useNavigate } from 'react-router-dom';
import Footer from './Footer.js';
// import './experience.css';
import './experience_dark.css';

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
                            <Link className='nav-link' to="/certifications">Certifications</Link>
                        </li>
                        <li className="nav-item active">
                            <Link className='nav-link' to="/contact">Contact</Link>
                        </li>
                    </ul>
                </div>
            </nav>
            <div className="experience-hero-section d-flex">
                {/* <h1 className='display-1 fw-bold mx-auto my-auto hero-experience-title text-center'>Experience The Experiences</h1> */}
                <h1 className='display-1 fw-bold mx-auto my-auto hero-experience-title text-center'>Experience The Amazing</h1>
            </div>
            <div className='experience-container'>
                {/* <div className='m-2'>
                    <div className='row'>
                        <div className='col-sm-6 experience-img img-fluid'><img src="/tcs-experience.jpg"></img></div>
                        <div className='col-sm-4'>Project INFO</div>
                    </div>
                </div>
                <div className='m-2'>
                    <div className='row'>
                        <div className='col-sm-6'>TCS-IMG</div>
                        <div className='col-sm-4'>Project INFO</div>
                    </div>
                </div>
                <div className='m-2'>
                    <div className='row'>
                        <div className='col-sm-6'>TCS-IMG</div>
                        <div className='col-sm-4'>Project INFO</div>
                    </div>
                </div> */}
                {/* <a class="link" href="https://codepen.io/simoberny/pen/qxxOqj" target="_blank">Dark Version</a>
                <div class="movie_card" id="bright">
                    <div class="info_section">
                        <div class="movie_header">
                            <img class="locandina" src="https://movieplayer.net-cdn.it/t/images/2017/12/20/bright_jpg_191x283_crop_q85.jpg" />
                            <h1>Bright</h1>
                            <h4>2017, David Ayer</h4>
                            <span class="minutes">117 min</span>
                            <p class="type">Action, Crime, Fantasy</p>
                        </div>
                        <div class="movie_desc">
                            <p class="text">
                                Set in a world where fantasy creatures live side by side with humans. A human cop is forced to work with an Orc to find a weapon everyone is prepared to kill for.
                            </p>
                        </div>
                        <div class="movie_social">
                            <ul>
                                <li><i class="material-icons">share</i></li>
                                <li><i class="material-icons"></i></li>
                                <li><i class="material-icons">chat_bubble</i></li>
                            </ul>
                        </div>
                    </div>
                    <div class="blur_back bright_back"></div>
                </div>

                <div class="movie_card" id="tomb">
                    <div class="info_section">
                        <div class="movie_header">
                            <img class="locandina" src="https://mr.comingsoon.it/imgdb/locandine/235x336/53750.jpg" />
                            <h1>Tomb Raider</h1>
                            <h4>2018, Roar Uthaug</h4>
                            <span class="minutes">125 min</span>
                            <p class="type">Action, Fantasy</p>
                        </div>
                        <div class="movie_desc">
                            <p class="text">
                                Lara Croft, the fiercely independent daughter of a missing adventurer, must push herself beyond her limits when she finds herself on the island where her father disappeared.
                            </p>
                        </div>
                        <div class="movie_social">
                            <ul>
                                <li><i class="material-icons">share</i></li>
                                <li><i class="material-icons"></i></li>
                                <li><i class="material-icons">chat_bubble</i></li>
                            </ul>
                        </div>
                    </div>
                    <div class="blur_back tomb_back"></div>
                </div>

                <div class="movie_card" id="ave">
                    <div class="info_section">
                        <div class="movie_header">
                            <img class="locandina" src="https://mr.comingsoon.it/imgdb/locandine/235x336/53715.jpg" />
                            <h1>Black Panther</h1>
                            <h4>2018, Ryan Coogler</h4>
                            <span class="minutes">134 min</span>
                            <p class="type">Action, Adventure, Sci-Fi</p>
                        </div>
                        <div class="movie_desc">
                            <p class="text">
                                T'Challa, the King of Wakanda, rises to the throne in the isolated, technologically advanced African nation, but his claim is challenged by a vengeful outsider who was a childhood victim of T'Challa's father's mistake.
                            </p>
                        </div>
                        <div class="movie_social">
                            <ul>
                                <li><i class="material-icons">share</i></li>
                                <li><i class="material-icons"></i></li>
                                <li><i class="material-icons">chat_bubble</i></li>
                            </ul>
                        </div>
                    </div>
                    <div class="blur_back ave_back"></div>
                </div> */}
                <div class="movie_card" id="bright">
                    <div class="info_section">
                        <div class="movie_header">
                            <img class="locandina" src="https://media-exp3.licdn.com/dms/image/C4E0BAQFrYjS52BIjbA/company-logo_200_200/0/1610441152873?e=2159024400&v=beta&t=2NX1muG8HsCh8zxca6bSbxzO6wghCkX_Aic1DKxYE2I" />
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
                        {/* <div class="movie_social">
                            <ul>
                                <li><i class="material-icons">Offer Letter</i></li>
                                <li><i class="material-icons"></i></li>
                                <li><i class="material-icons">chat_bubble</i></li>
                            </ul>
                        </div> */}
                    </div>
                    <div class="blur_back bright_back"></div>
                </div>
                {/* <div className='container text-center'><svg width="64px" height="64px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fill-rule="evenodd" clip-rule="evenodd" d="M15.6 9C15.6 11.2091 13.8539 13 11.7 13C9.54608 13 7.79999 11.2091 7.79999 9C7.79999 6.79086 9.54608 5 11.7 5C12.7343 5 13.7263 5.42143 14.4577 6.17157C15.1891 6.92172 15.6 7.93913 15.6 9Z" stroke="#ff8800" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M12.45 13C12.45 12.5858 12.1142 12.25 11.7 12.25C11.2858 12.25 10.95 12.5858 10.95 13H12.45ZM10.95 19C10.95 19.4142 11.2858 19.75 11.7 19.75C12.1142 19.75 12.45 19.4142 12.45 19H10.95ZM11.6185 6.66744C11.2067 6.71248 10.9094 7.08279 10.9545 7.49454C10.9995 7.9063 11.3698 8.20358 11.7816 8.15854L11.6185 6.66744ZM12.9287 8.85878C13.0871 9.24152 13.5258 9.42338 13.9085 9.26499C14.2913 9.1066 14.4731 8.66793 14.3147 8.2852L12.9287 8.85878ZM10.95 13V19H12.45V13H10.95ZM11.7816 8.15854C12.2597 8.10624 12.7304 8.37955 12.9287 8.85878L14.3147 8.2852C13.8691 7.20829 12.7792 6.54046 11.6185 6.66744L11.7816 8.15854Z" fill="#ff8800"></path> </g></svg></div> */}
                <div class="movie_card" id="tomb">
                    <div class="info_section">
                        <div class="movie_header">
                            <img class="locandina" src="https://s3-symbol-logo.tradingview.com/galaxy-surfactants--big.svg" />
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
                        {/* <div class="movie_social">
                            <ul>
                                <li><i class="material-icons">share</i></li>
                                <li><i class="material-icons"></i></li>
                                <li><i class="material-icons">chat_bubble</i></li>
                            </ul>
                        </div> */}
                    </div>
                    <div class="blur_back tomb_back"></div>
                </div>

                <div class="movie_card" id="ave">
                    <div class="info_section">
                        <div class="movie_header">
                            <img class="locandina" src="https://yt3.googleusercontent.com/Bzhe4uYF3cjtm921DcgxZdkOCFa5sbtjVmI3--xx-_YS9co0mKZoXfyiGc7FWNZq3DIcpRdyCQ=s176-c-k-c0x00ffffff-no-rj" />
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
                        {/* <div class="movie_social">
                            <ul>
                                <li><i class="material-icons">share</i></li>
                                <li><i class="material-icons"></i></li>
                                <li><i class="material-icons">chat_bubble</i></li>
                            </ul>
                        </div> */}
                    </div>
                    <div class="blur_back ave_back"></div>
                </div>
            </div>
            <Footer />
        </div>
    )
}
