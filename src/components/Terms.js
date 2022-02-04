import React from 'react';
import { useHistory } from 'react-router-dom';
import { Box, Typography, Button, Container } from "@material-ui/core";

const Terms = () => {
const history = useHistory()
    return (
      <>
    <Container className="padding" style={{ mt: '1rem', maxWidth: '100vw', minHeight: '400px' }}>
      <Box spacing={1} textAlign="center">
        <Typography variant= "h3">
          Köpvillkor
        </Typography>
        <Box mt="20px">
          <Typography variant="body1">
            Nöjdkund garanti - leverans inom 30 min i Mölndals kommun</Typography>
          <Typography variant="body1">
            Annars bjuder vi på maten!
          </Typography>
        </Box>
        <Box padding="50px">
            <Typography>PRISER OCH BETALNING </Typography>
            <Typography >Varje vara anges med pris inklusive moms. I kundvagnen kan man se det totala priset inklusive alla avgifter, moms, frakt och betalning. Betalningsvillkor finns angiven i kundvagnen beroende av valt betalningssätt.
            </Typography>
          </Box>
        </Box>
    </Container>
    <Box style={{display: "flex", justifyContent: "center", margin:"20px"}}>
      <Button onClick={() => history.push('/store')} variant="outlined">Gå till Menyn!</Button> 
      <Button onClick={() => history.push('/')} variant="outlined">Veckans Erbjudanden</Button>
    </Box>
      </>
    )
  }
  
  export default Terms
