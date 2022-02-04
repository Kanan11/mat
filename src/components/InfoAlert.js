import * as React from 'react';
import {IconButton, Collapse, Box } from "@material-ui/core";
import Alert from '@mui/material/Alert';
import CloseIcon from '@mui/icons-material/Close';
export default function InfoAlerts() {
  const [open, setOpen] = React.useState(true);

  return (
    <Box sx={{ width: '100%' }}>
      <Collapse in={open}>
        <Alert
          action={
            <IconButton
              aria-label="close"
              color="inherit"
              size="small"
              onClick={() => {
                setOpen(false);
              }}
            >
              <CloseIcon fontSize="inherit" />
            </IconButton>
          }
          sx={{}}
        >
         Detta är en demobutik
        </Alert>
      </Collapse>
    </Box>
  
  );
}
