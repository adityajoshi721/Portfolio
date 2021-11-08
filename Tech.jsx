import React from 'react'
import { Container, Typography, Avatar } from '@mui/material';
import icon from '../images/coding-img.webp'
import Badge from 'react-simple-badges'
import '../App.css'

const Tech = () => {
    return (
        <Container maxWidth = 'lg' className = 'tech-container'>
            <Typography variant = 'h4' id = 'center-horizontally'>
                Technical Skills
            </Typography>
            <div className="tech-used">
                <div className = 'tech-desc'>
                    <Typography variant = 'h6'>
                        <ul>
                            <li>
                                I have worked with a wide variety of programming languages and frameworks.
                            </li>
                            <li> 
                            My areas of expertise are Front-End Development, React Js, Data Structures and Algorithms and C++.
                            </li>
                        </ul>
                        <ul>
                            <li>
                                Web Development
                                <ul>
                                    <li>  <Badge name="HTML5" label = 'HTML5'  backgroundColor="#32a853"/> </li>
                                    <li>  <Badge name="CSS3" label = 'CSS3' backgroundColor="#1700e9" /></li>
                                    <li>  <Badge name="JavaScript" label = 'JavaScript' backgroundColor = '#e9004e'/></li>
                                    <li>   	<Badge name="React" label = 'React JS'/> </li>
                                </ul>
                            </li>
                        </ul>
                        <ul>
                            <li>
                                Programming Languages
                                <ul>
                                    <li> <Badge name="C++" label = 'C++'  backgroundColor="#e98c00"/> </li>
                                    <li> <Badge name="Python" label = 'Python'  backgroundColor = "#00195e"/> </li>
                                </ul>
                            </li>
                            <li>
                                I'm currently learning React Native which is a cross-platform native application development framework. 
                            </li>
                        </ul>
                    </Typography>
                </div>
                <div>
                    <img src = {icon} alt="" />
                </div>
            </div>
        </Container>
    )
}

export default Tech
