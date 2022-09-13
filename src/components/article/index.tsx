import React from 'react'
import { Box, Typography, Grid, Button, List, TextField } from '@mui/material'
import SimpleListItem from '../../common/listItem'
import Link from 'next/link'
const uni = '../../images/uni.jpg'
import useStyles from './style'

const Article = () => {
  const classes = useStyles()
  return (
    <Grid
      container
      justifyContent="center"
      direction="column"
      spacing={10}
      alignItems="center"
      className={classes.container}
    >
      <Grid item>
        <img src={uni} width="100%" height="100%" />
      </Grid>
      <Grid item>
        <Typography component="div" variant="h6">
          This page shares my best articles to read on topics like health,
          happiness, creativity, productivity and more. The central question
          that drives my work is, “How can we live better?” To answer that
          question, I like to write about science-based ways to solve practical
          problems. You’ll find interesting articles to read on topics like how
          to stop procrastinating as well as personal recommendations like my
          list of the best books to read and my minimalist travel guide. Ready
          to dive in? You can use the categories below to browse my best
          articles.
        </Typography>
      </Grid>
      <Grid item sx={{ width: '100%' }}>
        <Box className={classes.vote}>
          <Button variant="contained">I found this helpful</Button>
          <Button variant="contained">I don't found this helpful</Button>
        </Box>
      </Grid>
      <Grid item sx={{ width: '100%' }}>
        <Typography component="div" variant="h6">
          Comments
        </Typography>
        <List>
          <SimpleListItem
            styles={{ border: '1px solid gray' }}
            title={
              <Box sx={{ display: 'flex' }}>
                <Typography
                  component="div"
                  sx={{ fontWeight: 700, marginRight: '5px' }}
                >
                  Olya
                </Typography>
                <Typography component="div" sx={{ marginLeft: '5px' }}>
                  Jan 20, 2022
                </Typography>
                <Typography component="div" sx={{ marginLeft: '15px' }}>
                  <Link href={{}}>Reply</Link>
                </Typography>
              </Box>
            }
            isAvatar={true}
            subTitle="I f you have many tasks to do, or are scattered during your workday,
            breathe. It will help bring you into focus, to concentrate on the most
            important task you need to be focusing on right now."
          />
        </List>
      </Grid>
      <Grid item sx={{ width: '100%' }}>
        <Typography component="div" variant="h6">
          Comments
        </Typography>
        <Box className={classes.conversation}>
          <TextField label="Name" variant="outlined" />
          <TextField label="Email" variant="outlined" />
          <TextField
            id="standard-multiline-static"
            label="Message"
            multiline
            rows={4}
            variant="outlined"
          />
        </Box>
        <Box>
          <Button variant="contained">Send</Button>
        </Box>
      </Grid>
    </Grid>
  )
}

export default Article
