import React from 'react'
import { Box, Typography, Grid } from '@mui/material'
import Article from '../../components/article'
import StatusBoard from '../../components/statusboard'
import Banner from '../../components/banner'

const DetailsPage = () => {
  return (
    <Grid
      container
      direction="row"
      justifyContent="center"
      alignItems="flex-start"
      spacing={6}
    >
      <Grid item xs={12} sx={{ padding: '100px 100px 0px 100px' }}>
        <Banner title='if You wanted to get rich, how would you do it ?'  author='Amr Mostafa' date=' Published on May 07, 2004' />
      </Grid>
      <Grid item lg={3} xs={12}>
        <StatusBoard />
      </Grid>
      <Grid item lg={9} xs={12}>
        <Article />
      </Grid>
    </Grid>
  )
}

export default DetailsPage
