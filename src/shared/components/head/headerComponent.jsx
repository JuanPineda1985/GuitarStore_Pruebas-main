import React from 'react'
import {Link as RouterLink} from 'react-router-dom';
import {AppBar, Toolbar, IconButton, Typography, Button, Link} from '@material-ui/core';
const HeaderComponent = () => {
    return (
        <AppBar position="static" color="default">
            <Toolbar>
                <IconButton edge="start"  color="#2C2723" aria-label="menu">
                <Link color="inherit" component={RouterLink} to="/login">Login</Link>  
                </IconButton>
                <IconButton edge="start"  color="#2C2723" aria-label="menu">
                <Link color="inherit" component={RouterLink} to="/register">Register</Link>
                </IconButton>
                <IconButton edge="start"  color="#2C2723" aria-label="menu">
                <Link color="inherit" component={RouterLink} to="/users">user</Link>
                </IconButton>
            </Toolbar>
        </AppBar>
    )
}

export default HeaderComponent
