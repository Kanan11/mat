import React from 'react'
import { useHistory } from 'react-router-dom'
import { Box, Typography, Button, Container } from "@material-ui/core";

const Policy = () => {
    const history = useHistory()
    return (
      <>
    <Container className="padding" style={{ mt: '1rem', maxWidth: '100vw', minHeight: '300px'}}>
      <Box spacing={1} textAlign="center">
        <Typography variant= "h3">
          Integritetspolicy
        </Typography>
        <Box mt="20px">
          <Typography  variant="body1">
          När du lägger din beställning hos oss uppger du dina personuppgifter.</Typography> 
          <Typography>I samband med din beställning godkänner du att vi lagrar och använder dina uppgifter </Typography>
          <Typography> i vår verksamhet för att fullfölja avtalet gentemot dig.</Typography> 
        </Box>
        <Box mt="20px">
          <Typography>Du har enligt Personuppgiftslagen rätt att få den information som vi har registrerat om dig. </Typography> 
          <Typography>Om den är felaktig, ofullständig eller irrelevant kan du begära att informationen ska rättas eller tas bort.</Typography>
          <Typography> Kontakta oss i så fall via e-post på info@hemlagat.se </Typography>
        </Box>
      </Box>
    </Container>
    <Box style={{display: "flex", justifyContent: "center", margin:"30px", marginTop:"90px"}}>
        <Button onClick={() => history.push('/store')} variant="outlined">Gå till Menyn!</Button> 
        <Button onClick={() => history.push('/')} variant="outlined">Veckans Erbjudanden</Button>
      </Box>
      </>
    )
  }
  
  export default Policy