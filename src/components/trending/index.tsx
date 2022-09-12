import React from 'react'
import {
  Grid,
  Card,
  CardContent,
  Typography,
  CardMedia,
  List,
  Paper,
  Box,
} from '@mui/material'
import SimpleListItem from '../../common/listItem'
import content from '../data.json'
import uni from '../../../public/images/uni.jpg'
import Image from 'next/image'

const uniPic = '../../images/uni.jpg'

const Trending = () => {
  const array = [1, 2, 3, 4]
  return (
    <Grid container spacing={2} justifyContent="center">
      {array.map((_, idx) => {
        return (
          <Grid key={idx} item>
            <Paper>
              <Box>
                <Image
                  src={uni}
                  layout="responsive"
                  width="100%"
                  height="70px"
                />
              </Box>
              <List
                sx={{
                  width: '100%',
                  maxWidth: 360,
                  bgcolor: 'background.paper',
                }}
              >
                {content.slice(0, 3).map((val, idx) => {
                  return <SimpleListItem key={idx} subTitle={val.description} tag={'October 30, 2022'} />
                })}
              </List>
            </Paper>
          </Grid>
        )
      })}
    </Grid>
  )
}

export default Trending
