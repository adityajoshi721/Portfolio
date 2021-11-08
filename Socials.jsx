import React from 'react'
import { experimentalStyled as styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import '../App.css'

import { Container } from '@mui/material';
const Socials = () => {

    return (
        <Container maxWidth = 'xl'>
            
            <div id = 'ppadding'>
                <Typography variant = 'h4' id = 'center-horizontally'>
                    My Socials & Profiles
                </Typography>
            </div>
           <div class = 'social-grid'>
                <div class = 'social-element'>
                    <div className = 'socials-element-image'>
                        <img src="https://i0.wp.com/garrisonleykamphd.com/wp-content/uploads/2020/04/LinkedIn-cool-logo-1.jpg?fit=2694%2C1517&ssl=1" alt="" />
                    </div>
                    <div>
                        <Typography variant = 'h6'>
                            LinkedIn: Checkout my LinkedIn Profile 💻 
                        </Typography>
                    </div>
                </div>
                 <div class = 'social-element'>
                    <div className = 'socials-element-image'>
                        <img src="https://res.cloudinary.com/practicaldev/image/fetch/s--sWV8Y0kc--/c_imagga_scale,f_auto,fl_progressive,h_900,q_auto,w_1600/https://dev-to-uploads.s3.amazonaws.com/i/kml9j34p9taplrnqtcez.jpg" alt="" />
                    </div>
                    <div>
                        <Typography variant = 'h6'>
                            GitHub: Checkout my GitHub Profile 📌 
                        </Typography>
                    </div>
                </div>
                 <div class = 'social-element'>
                    <div className = 'socials-element-image'>
                         <img src="https://static.startuptalky.com/2021/04/codechef-logo-startuptalky.jpg" alt="" />
                    </div>
                    <div>
                        <Typography variant = 'h6'>
                            CodeChef: 3 ⭐ (Max Rating: 1618) 📊
                        </Typography>
                    </div>
                </div>
                 <div class = 'social-element'>
                    <div className = 'socials-element-image'>
                         <img src="https://leetcode.com/static/images/LeetCode_Sharing.png" alt="" />
                    </div>
                    <div>
                        <Typography variant = 'h6'>
                            LeetCode: Solved 250+ Questions  👨‍💻 
                        </Typography>
                    </div>
                </div>
           </div>
        
        </Container>

    )
}

export default Socials
