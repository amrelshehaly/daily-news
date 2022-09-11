import React from 'react'
import {Grid} from '@mui/material'
import HotNews from '../hot-interactions'
import News from '../news-section'

const Main = () => {
  return (
    <Grid container>
        <Grid item>
            <News />
        </Grid>
        <Grid item>
            <HotNews />
        </Grid>
    </Grid>
  )
}

export default Main