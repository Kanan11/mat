import React from 'react'
import { useHistory } from 'react-router-dom'
import { Container, Box, ListItemIcon, Typography, Button } from "@material-ui/core";
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import karta from './img/karta.png'

const Contact = () => {
  const history = useHistory()
  return (
    <>
  <Container sx={{ mt: '1rem', maxWidth: '100vw', minHeight: 'auto'}}>
    <Box spacing={1} marginTop="30px" textAlign="center">
       <Typography variant= "h3">
        Kontakt
      </Typography>
      <Typography>031-44 33 00</Typography>
      <Typography>hemlagat@yourdoor.com</Typography>
      <Box>
        <ListItemIcon>
          <Button href="https://www.facebook.com/Hemlagat-107368028494671"><FacebookIcon /> </Button>
          <Button href="https://www.instagram.com/_hemlagat_/"><InstagramIcon /></Button>
        </ListItemIcon>
      </Box>
      <Box>
        <img className='karta' src={karta} alt="Karta" />
      </Box>
    </Box>
    <Box spacing={1} marginTop="30px" textAlign="center">
      <Button onClick={() => history.push('/store')} variant="outlined">Gå till Menyn!</Button> 
      <Button onClick={() => history.push('/')} variant="outlined">Veckans Erbjudanden</Button>
    </Box>
      
  </Container>
    </>
  )
}

export default Contact