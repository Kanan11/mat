import React from 'react'
import { AppBar, Toolbar, Typography } from "@material-ui/core"
import logo from '../img/logo.png'

export default function Header () {
    console.log(logo);
  return (
      <>
<AppBar position="static">
    <Toolbar>
    <img className='logo' src={logo} alt="Logo"/>
        <Typography
            variant="h5"
            component="span"
            sx={{flexGrow: 1}}
            >
            HEMLAGAT
        </Typography>
        
        <div className='nav'>
            <a href='#/'>Start-Sida</a>
            <a href='#/store'>Handla</a>
            <a href='#/contact'>Kontakt</a>
            <a href='#/about'>Om oss</a>
            <a href='#/login'>Logga in</a>
        </div>
    </Toolbar>
    
</AppBar>
</>
  )
}
