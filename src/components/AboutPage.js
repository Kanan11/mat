import React from 'react'
import { useHistory } from 'react-router-dom'
import { Box, Typography, Button, Container } from "@material-ui/core";
import mat from './img/mat.jpeg'

const AboutPage = () => {
const history = useHistory()
  return (
    <>
  <Container className="padding" sx={{ mt: '1rem', maxWidth: '100vw', minHeight: '500px' }}>
    <Box spacing={1} textAlign="center">
      <Box marginBottom={'20px'}>
        <Typography variant="h3">Om oss</Typography>
      </Box>

      <img className='mat' src={mat} alt="Mat" />
      <Typography variant="h5">Varmt Välkommen till Restaurang Hemlagat!</Typography>
      <Typography>Vi är ett familjeföretag som slog upp portarna i Möndal i september 2021.</Typography>
      <Typography>Vi har alltid satsat på kvalitet och att det ska vara rent och fräscht när du besöker våra restauranger.</Typography>
      <Typography>För oss är varje kund lika viktig 
      det spelar ingen roll om du vill beställa lunch till </Typography>
      <Typography>tjugo hungriga medarbetare eller om du bara vill ha lite kvällsmat i slutet av veckan till dig själv.</Typography> 
      <Typography>Vi serverar högsta tänkbara kvalité till lägsta tänkbara pris</Typography>
    </Box>
    <Box style={{display: "flex", justifyContent: "center", margin:"20px"}}>
      <Button onClick={() => history.push('/store')} variant="outlined">Gå till Menyn!</Button> 
      <Button onClick={() => history.push('/')} variant="outlined">Veckans Erbjudanden</Button>
    </Box>
  </Container>
    </>
  )
}

export default AboutPage