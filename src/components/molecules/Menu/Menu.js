import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { AppBar, Box, Button, Toolbar } from "@material-ui/core"
import logo from './logo.png'
import { useHistory } from 'react-router-dom'


const Header = () => {
  const numberOfProducts = useSelector((state) => state.cart.length);
  const history = useHistory()
  return (
  
    <AppBar position= "static">
        <Toolbar >
            <Link to="/"><img className='logo' src={logo} alt="Logo" /></Link>
            <div className='nav'>
                <Link style={{ color: 'white', textDecoration: 'none' }} to="/store"><span role="img" aria-label="sheep">MENY</span></Link>
                <Link style={{ color: 'white', textDecoration: 'none' }} to="/contact"><span role="img" aria-label="sheep">Kontakt</span></Link>
                <Link style={{ color: 'white', textDecoration: 'none' }} to="/about"><span role="img" aria-label="sheep">Om oss</span></Link>
            </div>
            <Box>
              <Button  style={{ color: 'white', backgroundColor: 'skyblue', textDecoration: 'none' }} onClick={() => history.push('/cart')} variant="outlined"><span role="img" aria-label="sheep">🛒{numberOfProducts}</span></Button> 
            </Box>
        </Toolbar> 
    </AppBar>
  
  );
};

export default Header;
