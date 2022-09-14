import React from 'react'
import { Paper, Typography, Box, TextField, Button } from '@mui/material'
import uni from '../../../public/images/uni.jpg'
import Image from 'next/image'

const FollowUs = () => {
  return (
    <Paper elevation={10} sx={{ width: '100%', maxWidth: 360, padding:'5%', marginTop:'3%' }} >
      <Typography variant="h5" component="div" sx={{ padding: '5px' }}>
        Follow Us
      </Typography>
      <Box sx={{ display: 'flex', marginTop: '5px', justifyContent: 'space-around' }}>
          <Box
            sx={{ height: '100%', marginLeft: '1px' }}
          >
                <img src='https://icons-for-free.com/iconfiles/png/512/book+facebook+fb+icon-1320191831856587164.png' width='35px' height='35px' />
          </Box>
          <Box
            sx={{ height: '100%', marginLeft: '1px' }}
          >
                <img src='https://iconarchive.com/download/i82970/limav/flat-gradient-social/Twitter.ico' width='35px' height='35px' />
          </Box>
          <Box
            sx={{ height: '100%', marginLeft: '1px' }}
          >
                <img src='https://cdn.iconscout.com/icon/free/png-256/google-160-189824.png' width='35px' height='35px' />
          </Box>
          <Box
            sx={{ height: '100%', marginLeft: '1px' }}
          >
                <img src='https://iconarchive.com/download/i98467/dakirby309/simply-styled/YouTube.ico' width='35px' height='35px' />
          </Box>
          <Box
            sx={{ height: '100%', marginLeft: '1px' }}
          >
                <img src='https://iconarchive.com/download/i54049/danleech/simple/linkedin.ico' width='35px' height='35px' />
          </Box>
          <Box
            sx={{ height: '100%', marginLeft: '1px' }}
          >
                <img src='https://icons-for-free.com/iconfiles/png/512/book+facebook+fb+icon-1320191831856587164.png' width='35px' height='35px' />
          </Box>
      </Box>
    </Paper>
  )
}

export default FollowUs
