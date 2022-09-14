import React from 'react'
import { Paper, Typography, Box, TextField, Button } from '@mui/material'

const Subscribtion = () => {
  return (
    <Paper
      elevation={10}
      sx={{ width: 'fit-content', maxWidth: 360, padding: '5%' }}
    >
      <Typography variant="h5" component="div" sx={{ padding: '5px' }}>
        Good News Newsletter
      </Typography>
      <Typography variant="body1" component="div" sx={{ padding: '5px' }}>
        Subscribe to our email newsletter for good news, sent out every Monday.
      </Typography>
      <Box sx={{ display: 'flex', marginTop: '5px' }}>
        <Box>
          <TextField id="outlined-basic" label="Email" variant="outlined" />
        </Box>
        <Box>
          <Button
            variant="contained"
            color="error"
            sx={{ height: '100%', marginLeft: '1px' }}
          >
            Subscribe
          </Button>
        </Box>
      </Box>
    </Paper>
  )
}

export default Subscribtion
