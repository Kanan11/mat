import React from 'react';
import { Button, Container, Box, Grid, Typography } from "@material-ui/core"; 
import olives from './img/olives.jpeg';
import fisk from './img/fisk.jpg';
import pannbiff from './img/pannbiff.jpg';
import Cookies from './Cookies.js'
import InfoAlert from './InfoAlert.js'
import { useHistory } from 'react-router-dom'

const StartPage = () => {
const history = useHistory()
  return (
    <>

  <InfoAlert />
    <Cookies />
      <Container style={{padding:'0', mt: '1rem', maxWidth: '100vw', minHeight: '500px'}}>
        <Box spacing={1} marginTop="30px" marginX="20px" textAlign="center">
          <Typography variant= "h3">
            Veckans Erbjudanden
          </Typography>
          <Box display="flex" justifyContent="center"  flexDirection="column" xs= {12} sm= {4}>
          <Grid display="flex" justifyContent="center" mt="20px" container spacing={4}>
            <Box margin="20px" xs= {12} sm= {4}>
              <img className='olives' src={fisk} alt="fisk" />
              <Box style={{ textAlign: 'center' }}>
                <Typography>Ugnsbakad Torsk</Typography>
                <Typography style={{ color: 'red' }}>69 SEK</Typography>
              </Box>
            </Box>
            <Box margin="20px" xs= {12} sm= {4}>
              <img className='olives' src={olives} alt="Olives" />
              <Box style={{ textAlign: 'center' }}>
                <Typography>Oliver</Typography>
                <Typography style={{ color: 'red' }}>20 SEK</Typography>
              </Box>
            </Box>
            
            <Box margin="20px" xs= {12} sm= {4}>
              <img className='olives' src={pannbiff} alt="pannbiff" />
              <Box style={{ textAlign: 'center' }}>
                <Typography>Pannbiffar i brunsås</Typography>
                <Typography style={{ color: 'red' }}>59 SEK</Typography>
              </Box>
            </Box>
          </Grid>
          </Box>
        </Box>
        <Box spacing={1} marginTop="30px" textAlign="center">
          <Button onClick={() => history.push('/store')} variant="outlined">Gå till Menyn!</Button> 
        </Box>
      </Container>
  </>
  )
}

export default StartPage