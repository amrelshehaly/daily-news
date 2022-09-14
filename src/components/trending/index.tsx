import React, { FC } from 'react'
import { Grid, List, Paper, Box } from '@mui/material'
import SimpleListItem from '../../common/listItem'
import { Props } from '../../store/news'
import moment from 'moment'
import { useDispatch } from 'react-redux'
import { setPosition } from '../../store/details'
import { useRouter } from 'next/router'

interface DataProps {
  data: Props[]
}

const Trending: FC<DataProps> = ({ data }) => {
  const array = [1, 2, 3, 4]
  const dispatch = useDispatch()
  const router = useRouter()

  const handleDispatchPosition = (idx: number) => {
    dispatch(
      setPosition({
        idx,
      }),
    )
    router.push('/details')
  }
  return (
    <Grid container spacing={2} justifyContent="center">
      {data.slice(0, 4).map((val, idx) => {
        return (
          <Grid key={idx} item>
            <Paper>
              {val.urlToImage && (
                <Box>
                  <img src={val.urlToImage} width="100%" height="200px" />
                </Box>
              )}
              <List
                sx={{
                  width: '100%',
                  maxWidth: 360,
                  bgcolor: 'background.paper',
                }}
              >
                {data.slice(0, 3).map((val, idx) => {
                  return (
                    <SimpleListItem
                      key={idx}
                      subTitle={val.description}
                      tag={val?.publishedAt && moment(val?.publishedAt).format('MMMM Do YYYY')}
                      onClick={() => handleDispatchPosition(idx)}
                    />
                  )
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
