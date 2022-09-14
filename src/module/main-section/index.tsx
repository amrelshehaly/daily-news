import React from 'react'
import { Grid, Box } from '@mui/material'
import HotNews from '../hot-interactions'
import News from '../news-section'
import Trending from '../../components/trending'
import { Typography } from '@material-ui/core'
import { useDispatch, useSelector } from 'react-redux'
import { AddNews, getNews } from '../../store/news'

const Main = () => {
  const news : any = useSelector(getNews)
  return (
    <Grid container spacing={2} justifyContent="center">
      <Grid item sm={8}>
        <News />
      </Grid>
      <Grid item sm={4}>
        <HotNews />
      </Grid>
      <Grid item xs={12}>
        <Box sx={{ border: '5px solid grey', marginTop: '3%' }}></Box>
      </Grid>
      <Grid item xs={12}>
        <Trending data={news.news} />
      </Grid>
    </Grid>
  )
}

export default Main
