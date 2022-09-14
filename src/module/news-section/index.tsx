import React from 'react'
import { Grid, Typography } from '@mui/material'
import Home from '../../components/home'
import Editorpicks from '../../components/editor-picks'
import { useSelector } from 'react-redux'
import { getNews  } from '../../store/news'

const News = () => {
  const news: any = useSelector(getNews)
  return (
    <Grid container spacing={2} direction="column" justifyContent="center">
      <Grid item xs={12} sx={{ textAlign: 'center' }}>
        <Typography component="div" variant="h5">
          Latest News
        </Typography>
      </Grid>
      <Grid item>
        <Home data={news.news} />
      </Grid>
      <Grid item>
        <Editorpicks data={news.news} />
      </Grid>
    </Grid>
  )
}

export default News
