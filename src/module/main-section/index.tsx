import React from 'react'
import {Grid} from '@mui/material'
import HotNews from '../hot-interactions'
import News from '../news-section'

const Main = () => {
  return (
    <Grid container spacing={2} justifyContent="center" >
        <Grid item sm={8}>
            <News />
        </Grid>
        <Grid item sm={4}>
            <HotNews />
        </Grid>
    </Grid>
  )
}

export default Main