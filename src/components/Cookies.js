import * as React from 'react';
import {IconButton, Link, Collapse, Box} from "@material-ui/core"
import Alert from '@mui/material/Alert';

export default function Cookies() {
  const [open, setOpen] = React.useState(true);

  return (
    <Box className='cookies'>
      <Collapse in={open}>
        <Alert severity="info"
          action={
            <IconButton
              aria-label="close"
              size="small"
              onClick={() => {
                setOpen(false);
              }}
            > 
            Godkänn Cookies
            </IconButton>
          }
          style={{ my: 2 }}
        >
        Välkommen till HEMLAGAT!
        Vi använder cookies.
        För att ge dig en bra upplevelse när du använder våra tjänster, som hemsida och app, använder vi cookies och liknande tekniker. Läs mer om cookies <Link href='./MoreInfo'>här</Link> 
        </Alert>
      </Collapse>
    </Box>
 
  );
}
