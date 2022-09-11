import React from 'react'
import {Grid} from '@mui/material'
import RecentPicks from '../../components/recent-post'

const HotNews = () => {
  return (
    <Grid container spacing={2} direction='column'>
        <Grid item>
            <RecentPicks />
        </Grid>
        <Grid item>
            <RecentPicks />
        </Grid>
        <Grid item>
            <RecentPicks />
        </Grid>
    </Grid>
  )
}

export default HotNews