import React from 'react'
import ReactDOM from 'react-dom';
import Heroanimation from './Heroanimation';
import icon from '../images/sasuke-animate.gif'
import animation from '../images/hero-animation.gif'
import '../App.css'
import { Container, Typography, Avatar } from '@mui/material';
import Badge from '@mui/material/Badge';

const Hero = () => {
    return (
        <Container maxWidth = 'md' className = 'hero'>
            <div className = 'animation-container'>
                <img src={animation} alt="" />
            </div>
            <div className = 'hero-headline'>
                <div className = 'wrapper'>
                        <Typography variant = 'h3' className = 'typing-demo' id = 'make-bolder'>
                            Hello World, I am Aditya Joshi.
                        </Typography>
                        <Typography id = 'center-horizontally' variant = 'h6' id = 'hero-tagline'>
                            Hello, I'm a Engineering Undergrad based in India 🇮🇳 
                        </Typography>
                </div>
                <Avatar alt="pfp" src = {icon}  sx={{ width: 90, height: 90 }} />
            </div>
        </Container>
    )
}

export default Hero
