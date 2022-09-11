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

const uni = '../../images/uni.jpg'


const Home = () => {
  return (
    <Grid container spacing={2}>
      <Grid item sm={6} md={6} lg='auto'  xs={12}>
        <Card sx={{ maxWidth: 400, width:'100%', height:'100%', margin: '0 auto' }}>
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
            <Button size="small">Share</Button>
            <Button size="small">Learn More</Button>
          </CardActions>
        </Card>
      </Grid>
      <Grid item sm={6} md={6} lg='auto' xs={12}>
        <Grid container direction='column' spacing={2}>
          <Grid item xs={6}>
            <Card sx={{ maxWidth: 400, width:'100%', margin: '0 auto' }}>
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
                <Button size="small">Share</Button>
                <Button size="small">Learn More</Button>
              </CardActions>
            </Card>
          </Grid>
          <Grid item xs={6}>
            <Card sx={{maxWidth: 400, width:'100%', margin: '0 auto' }}>
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
                <Button size="small">Share</Button>
                <Button size="small">Learn More</Button>
              </CardActions>
            </Card>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  )
}

export default Home
