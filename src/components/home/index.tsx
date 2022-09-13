import React from 'react'
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
  Button,
  Grid,
} from '@mui/material'
import { Replay, ChatBubble } from '@mui/icons-material'

const uni = '../../images/uni.jpg'

import SimpleCard from '../../common/Card'

import content from '../data.json'

const Home = () => {
  return (
    <Grid
      container
      spacing={2}
      justifyContent="right"
      sx={{ height: '100%' }}
    >
      <Grid item sm={6} md={6} lg="auto" xl="auto" xs={12}>
        <SimpleCard
          style={{
            maxWidth: 400,
            width: '100%',
            margin: '0 auto',
          }}
          ImgHeight="300"
          author="Paul Graham"
          picture={uni}
          subtitle="Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica"
          title="if you wanted to get rich, how would you do it"
        />
      </Grid>
      <Grid item sm={6} md={6} lg="auto" xl="auto" xs={12}>
        <Grid container direction="column" spacing={2}>
          <Grid item xs={6}>
            <SimpleCard
              style={{
                maxWidth: 400,
                width: '100%',
                margin: '0 auto',
              }}
              ImgHeight="140"
              author="Paul Graham"
              picture={uni}
              subtitle="Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica"
            />
          </Grid>
          <Grid item xs={6}>
            <SimpleCard
              style={{
                maxWidth: 400,
                width: '100%',
                margin: '0 auto',
              }}
              ImgHeight="140"
              author="Paul Graham"
              picture={uni}
              subtitle="Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica"
            />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  )
}

export default Home
