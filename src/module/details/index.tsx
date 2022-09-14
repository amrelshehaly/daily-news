import React, {useState, useEffect} from 'react'
import { Box, Typography, Grid } from '@mui/material'
import Article from '../../components/article'
import StatusBoard from '../../components/statusboard'
import Banner from '../../components/banner'
import { useDispatch, useSelector } from 'react-redux'
import { setPosition, getPosition } from '../../store/details'
import { AddNews, getNews, Props } from '../../store/news'
import moment from 'moment'
import useStyles from '../../module/details/style'



const DetailsPage = () => {
  const store: any = useSelector(getPosition)
  const [info, setInfo] = useState<Props>()
  const classes = useStyles()



  useEffect(()=>{
    setInfo(store.news[store.position.id])
  },[])

  return (
    <Grid
      container
      direction="row"
      justifyContent="center"
      alignItems="flex-start"
      spacing={6}
    >
      <Grid item xs={12} className={classes.container}>
        <Banner title={info?.title || ''}  author={info?.author} date={moment(info?.publishedAt?.toString()).format('MMMM Do YYYY')} />
      </Grid>
      <Grid item lg={3} xs={12}>
        <StatusBoard />
      </Grid>
      <Grid item lg={9} xs={12}>
        <Article content={info?.description} image={info?.urlToImage} />
      </Grid>
    </Grid>
  )
}

export default DetailsPage
