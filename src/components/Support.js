import React from 'react';
import { useHistory } from 'react-router-dom';
import { Box, Typography, Button, Container } from "@material-ui/core";

const Support = () => {
  const history = useHistory()
  return (
    <>
    <Container className="padding" style={{ mt: '1rem', maxWidth: '100vw', minHeight: '500px'}}>
      <Box spacing={1} textAlign="center">
        <Box marginBottom={'20px'}>
          <Typography variant= "h3">
          Support
          </Typography>
        </Box>
        <Typography variant="body1">Behöver du hjälp med en order, eller andra funderingar?</Typography>
        <Typography>Kontakta oss så får du snabbt få hjälp med alla dina frågor och funderingar</Typography>
        <Box spacing={1} marginTop="30px" textAlign="center" paddingY="88px">
          <Button onClick={() => history.push('/contact')} variant="outlined">Kontakta oss!</Button> 
        </Box>
      </Box>
    </Container>
    
    </>
  )
}

export default Support
