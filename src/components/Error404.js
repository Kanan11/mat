import React from 'react'
import { Box, Typography, Container } from "@material-ui/core";
import error404 from './img/error404.jpg'

const ErrorPage = () => {
  return (
    <>
    <Container className="padding" style={{ minHeight: '500px' }}>
      <Box textAlign="center">
        <Typography variant= "h3">
          Tyvärr, sidan kan inte hittas!
        </Typography>
        <img className='karta' src={error404} alt="error404" />
        <Typography variant= "h5">
          Vänligen kontakta med kundservice 
        </Typography>
        <Typography>+46 (0) 70 77 26 830</Typography>
        <Typography margin="100px">kundservice@hemlagat-mat.se</Typography>
      </Box>
    </Container>
    </>
  )
}

export default ErrorPage