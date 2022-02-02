import React from 'react'
import { useHistory } from 'react-router-dom'
import { Box, Typography, Button, Container } from "@material-ui/core";

const Terms = () => {
const history = useHistory()
    return (
      <>
    <Container class="padding" sx={{ mt: '1rem', maxWidth: '100vw', minHeight: 'auto'}}>
      <Box spacing={1} textAlign="center">
        <Typography variant= "h3">
          Köpvillkor
        </Typography>
          <Typography variant="body1">
              Nöjdkund garanti - leverans inom 30 min inom Mölndals kommun</Typography>
          <Typography variant="body1">
              Annars bjuder vi på maten!
          </Typography>
        </Box>
        <Box spacing={1} marginTop="30px" textAlign="center">
          <Button onClick={() => history.push('/store')} variant="outlined">Gå till Menyn!</Button> 
          <Button onClick={() => history.push('/')} variant="outlined">Veckans Erbjudanden</Button>
        </Box>
      </>
    )
  }
  
  export default Terms