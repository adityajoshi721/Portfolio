import React from 'react'
import { Container, Typography } from '@mui/material';
import carsrc from '../images/car.gif'
import Badge from '@mui/material/Badge';
import '../App.css'

const About = () => {
    return (
        <Container maxWidth = 'md' className = 'about-container'>
            <Typography variant = 'h4' id = 'center-horizontally'>
                More About Me
            </Typography>
            <Typography variant = 'h6'>
                          I am an undergraduate student learning Electronics and Telecommunications at Vishwakarma Institute of Technology, Pune 🏫
                          I have many interests apart from my major. I have a keen interest in Software Development, Competitive Programming and Computer Vision 👨‍💻
                          I have a knack for everything to be in dark mode, because light attracts bugs 🐛
                          Planning, Designing and Developing Software that impacts the lives of people is something that fascinates me ✨
            </Typography>
            <div id = 'center-img'>
                <img src={carsrc} alt="" />
            </div>
        </Container>
    )
}

export default About
