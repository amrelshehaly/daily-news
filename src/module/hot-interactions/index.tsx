import React from 'react'
import { Grid, Paper, Typography } from '@mui/material'
import SidePost from '../../components/side-posts'
import Subscribtion from '../../components/subscribtion'
import FollowUs from '../../components/follow-us'

const HotNews = () => {
  return (
    <Grid container spacing={2} direction="column" justifyContent="center" alignItems="stretch">
      <Grid item>
        <SidePost title="Recent Posts" />
      </Grid>
      <Grid item>
        <SidePost title="5 Most Popular" />
      </Grid>
      <Grid item>
        <SidePost title="Get New Letter" />
      </Grid>
      <Grid item>
        <Subscribtion />
      </Grid>
      <Grid item>
        <FollowUs />
      </Grid>
    </Grid>
  )
}

export default HotNews
