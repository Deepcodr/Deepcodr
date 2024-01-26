import React from 'react';
import '../css/404.css';
import Footer from './Footer';
import Navbar from './Navbar.js';
import { motion, useScroll, useSpring } from 'framer-motion';

export default function NotFound() {
    const { scrollYProgress } = useScroll()
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    return (
        <div className="container-fluid p-0 min-vh-100">
             <motion.path
                className='progress-bar'
                d="M 0, 20 a 20, 20 0 1,0 40,0 a 20, 20 0 1,0 -40,0"
                style={{ scaleX }}
            />
            <Navbar />
            <div className='notfound text-center'>
                <div className='first p-2'>404</div>
                <div className='second p-5'>Oops! the page you are looking is not here</div>
            </div>
            <Footer />
        </div>
    )
}
