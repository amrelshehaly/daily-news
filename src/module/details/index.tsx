import React from 'react'
import { Box, Typography, Grid } from '@mui/material'
import Article from '../../components/article'

const DetailsPage = () => {
  return (
    <Grid
      container
      direction="row"
      justifyContent="center"
      alignItems="center"
      spacing={6}
    >
        <Grid item lg={3} xs={12}>
            <Typography component='div' variant='h3' sx={{borderBottom:'1px solid grey'}}>
                if You wanted to get rich, how would you do it ?
                <Typography component='div' sx={{display:'flex'}}>
                    By&nbsp; <Typography sx={{ color: 'red' }}>Amr Mostafa</Typography>
                </Typography>
            </Typography>   
        </Grid>
        <Grid item lg={9} xs={12}>
            <Article />
        </Grid>

    </Grid>
  )
}

export default DetailsPage
