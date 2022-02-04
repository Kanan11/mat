import React from 'react'; 
import { ListItemIcon, Box, Link, Grid, Typography } from "@material-ui/core"; 
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';

const Footer = () => {
  return (
    <>
      <Box className="footer" spacing={1} >
        <Grid container sparing ={5}>
          <Grid my="3px" item xs= {12} sm= {4}>
            <Box pt="10px" color="silver"><Typography>Hjälp</Typography></Box>
            <Box>
              <Link underline="hover" href="./support" color="inherit">
              <Typography>Support</Typography>
              </Link>
            </Box>
            <Box>
              <Link underline="hover" href="./policy" color="inherit">
              <Typography>Integritetspolicy</Typography>
              </Link>
            </Box>
            <Box>
              <Link underline="hover" href="./terms" color="inherit">
              <Typography>Köpvillkor</Typography>
              </Link>
            </Box>
            <Box>
              <Link underline="hover" href="./cookies" color="inherit">
              <Typography></Typography>
              </Link>
            </Box>
          </Grid>
          <Grid mt="2px" item xs= {12} sm= {4}>
          <Box pt="10px" color="silver"><Typography>Ditt Konto</Typography></Box>
            <Box>
              <Link underline="hover" href="/" color="inherit">
              <Typography>Logga In</Typography>
              </Link>
            </Box>
            <Box>
              <Link underline="hover" href="/" color="inherit">
              <Typography>Registering</Typography>
              </Link>
            </Box>
            <Box>
              <Link underline="hover" href="/" color="inherit">
              <Typography> Din Order</Typography>
              </Link>
            </Box>
          </Grid>
          
          <Grid my="2px" item xs= {12} sm= {4}>
          <Box pt="10px" color="silver">
              <Typography>Besök oss på HEMLAGAT</Typography>
            </Box>
            <Box fontWeight={'bold'}>
            <Typography>
                Öppettider: 10.30 - 22.00 
                </Typography>
              <Link href="https://www.google.com/maps/place/Skanstorget+3,+411+22+G%C3%B6teborg/@57.6957226,11.9570257,17z/data=!3m1!4b1!4m5!3m4!1s0x464ff36b9be81b9b:0x638bd5988122b6e0!8m2!3d57.6957198!4d11.9592144" color="inherit">
                <Typography>
                Argongatan 2B, Mölndal
                </Typography>
              </Link>
            </Box>
            <Box marginTop="3px">
                <ListItemIcon>
                  <Link color="inherit" href="https://www.facebook.com/Hemlagat-107368028494671"><FacebookIcon /></Link>
                </ListItemIcon>
                <ListItemIcon>
                  <Link color="inherit" href="https://www.instagram.com/_hemlagat_/"><InstagramIcon /></Link>
                </ListItemIcon>
            </Box>
          </Grid>
        </Grid>
      <Box textAlign="center" bgcolor="black" color="white" marginTop="10px" mx={0}>
        <Typography variant="body2">
         Genom användandet av denna sida godkännas villkor och integritetspolicy
        </Typography>
        <Typography variant="body2">
         Alla Rättigheter Reserverade Hemlagat © Copyright 2022 
        </Typography>
      </Box>
    </Box>
 
     </>
  )
}

export default Footer;
