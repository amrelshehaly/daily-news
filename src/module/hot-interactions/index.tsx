import React from 'react'
import { Grid, Paper, Typography } from '@mui/material'
import SidePost from '../../components/side-posts'
import Subscribtion from '../../components/subscribtion'
import FollowUs from '../../components/follow-us'
import { useDispatch, useSelector } from 'react-redux'
import { AddNews, getNews } from '../../store/news'



const HotNews = () => {
  const news : any = useSelector(getNews)
  // console.log(news)
  return (
    <Grid container spacing={2} direction="column" justifyContent="center" alignItems="stretch">
      <Grid item>
        <SidePost title="Recent Posts" data={news.news} />
      </Grid>
      <Grid item>
        <SidePost title="5 Most Popular" data={news.news} />
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
