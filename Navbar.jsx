import React from 'react'
import ReactDOM from 'react-dom';
import '../App.css'
import { Container, Typography } from '@mui/material';
import PublicIcon from '@mui/icons-material/Public';
import AutoGraphOutlinedIcon from '@mui/icons-material/AutoGraphOutlined';
import CodeSharpIcon from '@mui/icons-material/CodeSharp';
import PetsSharpIcon from '@mui/icons-material/PetsSharp';
const Navbar = () => {
    return (
        <Container className = "nav-container" maxWidth = 'lg'>
            <div className = 'navbar'>
                <div className = 'nav-heading'>
                    <Typography variant = 'h5' id = 'make-bolder'>
                        <PetsSharpIcon  className = 'icon-align'/>Aditya Joshi
                    </Typography>
                </div>
                <div className = 'nav-options'>
                    <Typography variant = 'h6' id = 'make-bold' id = 'fade-font'>
                        About
                    </Typography>
                    <Typography variant = 'h6' id = 'make-bold' id = 'fade-font'>
                        Socials & Profiles
                    </Typography>
                    <Typography variant = 'h6' id = 'make-bold' id = 'fade-font'>
                        Tech Used
                    </Typography>
                </div>
            </div>
        </Container>
    )
}

export default Navbar