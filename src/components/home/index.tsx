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
import content from '../data.json'

const Home = () => {
  return (
    <Grid
      container
      spacing={2}
      justifyContent="right"
      alignItems="stretch"
      sx={{ height: '100%' }}
    >
      <Grid item sm={6} md={6} lg="auto" xl="auto" xs={12}>
        <Card
          sx={{
            maxWidth: 400,
            width: '100%',
            height: '100%',
            margin: '0 auto',
          }}
        >
          <CardMedia
            component="img"
            alt="green iguana"
            height="300"
            image={uni}
          />
          <CardContent>
            <Typography gutterBottom variant="h4" component="div">
              Lizard
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Lizards are a widespread group of squamate reptiles, with over
              6,000 species, ranging across all continents except Antarctica
            </Typography>
            <Typography
              component="div"
              sx={{ marginTop: '100px', display: 'flex' }}
            >
              By&nbsp;{' '}
              <Typography sx={{ color: 'red' }}>Paul Graham</Typography>
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">
              <Replay />
              {10}
            </Button>
            <Button size="small">
              <ChatBubble />
              {245}
            </Button>
          </CardActions>
        </Card>
      </Grid>
      <Grid item sm={6} md={6} lg="auto" xl="auto" xs={12}>
        <Grid container direction="column" spacing={2}>
          <Grid item xs={6}>
            <Card sx={{ maxWidth: 400, width: '100%', margin: '0 auto' }}>
              <CardMedia
                component="img"
                alt="green iguana"
                height="140"
                image={uni}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Lizard
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Lizards are a widespread group of squamate reptiles, with over
                  6,000 species, ranging across all continents except Antarctica
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small">
                  <Replay />
                  {10}
                </Button>
                <Button size="small">
                  <ChatBubble />
                  {245}
                </Button>
              </CardActions>
            </Card>
          </Grid>
          <Grid item xs={6}>
            <Card sx={{ maxWidth: 400, width: '100%', margin: '0 auto' }}>
              <CardMedia
                component="img"
                alt="green iguana"
                height="140"
                image={uni}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Lizard
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Lizards are a widespread group of squamate reptiles, with over
                  6,000 species, ranging across all continents except Antarctica
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small">
                  <Replay />
                  {10}
                </Button>
                <Button size="small">
                  <ChatBubble />
                  {245}
                </Button>
              </CardActions>
            </Card>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  )
}

export default Home
