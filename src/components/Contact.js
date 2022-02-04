import React from 'react'
import { useHistory } from 'react-router-dom'
import { Link, Container, Box, ListItemIcon, Typography, Button } from "@material-ui/core";
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import karta from './img/karta.png'

const Contact = () => {
  const history = useHistory()
  return (
    <>
  <Container className="padding" sx={{ mt: '1rem', maxWidth: '100vw', minHeight: '500px' }}>
    <Box spacing={1} textAlign="center">
       <Typography variant= "h3">
        Kontakt
      </Typography>
      <Typography>031-44 33 00</Typography>
      <Typography>hemlagat@yourdoor.com</Typography>
      <Typography>
          Öppettider: 10.30 - 22.00 
        </Typography>
      <Box marginTop="20px">
        <ListItemIcon>
          <Link  href="https://www.facebook.com/Hemlagat-107368028494671"><FacebookIcon /> </Link>
        </ListItemIcon>
        <ListItemIcon>
          <Link href="https://www.instagram.com/_hemlagat_/"><InstagramIcon /></Link>
        </ListItemIcon>
      </Box>
      <Box marginTop="30px">
        <img className='karta' src={karta} alt="Karta" />
      </Box>
      <Box marginBottom="30px">
        <Typography>
        Argongatan 2B, Mölndal
        </Typography>
      </Box>
    </Box>
    <Box style={{display: "flex", justifyContent: "center", margin:"20px"}}>
      <Button onClick={() => history.push('/store')} variant="outlined">Gå till Menyn!</Button> 
      <Button onClick={() => history.push('/')} variant="outlined">Veckans Erbjudanden</Button>
    </Box>
      
  </Container>
    </>
  )
}

export default Contact