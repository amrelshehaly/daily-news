import React, { FC } from 'react'
import Image, { StaticImageData } from 'next/image'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import Divider from '@mui/material/Divider'
import ListItemText from '@mui/material/ListItemText'
import ListItemAvatar from '@mui/material/ListItemAvatar'
import Avatar from '@mui/material/Avatar'
import { Typography, Box } from '@mui/material'

import uni from '../../../public/images/uni.jpg'

// const uni = '../../images/uni.jpg'

interface Props {
  Image?: string
  title?: string
  subTitle: string
  tag?: string
  author?: string
  date?: string
}

const SimpleListItem: FC<Props> = (props: Props) => {
  const { Image, title, subTitle, tag, author, date } = props
  return (
    <>
      <ListItem alignItems="flex-start">
        {Image && (
          <ListItemAvatar sx={{ marginRight: '10px' }}>
            <img src={Image} width="70px" height="70px" />
          </ListItemAvatar>
        )}
        <ListItemText
          primary={
            <Box>
              <Typography sx={{ fontSize: '12px', color: 'lightgray' }}>
                {tag}
              </Typography>
              <Typography sx={{ fontWeight: 700 }} component="div">
                {title}
              </Typography>
            </Box>
          }
          secondary={
            <Box>
              <Typography
                sx={{
                  display: '-webkit-box',
                  overflow: 'hidden',
                  WebkitBoxOrient: 'vertical',
                  WebkitLineClamp: 3,
                }}
              >
                {subTitle}
              </Typography>
              <Typography sx={{ fontSize: '12px', color: 'lightgray', display: 'flex' }}>
                {author && (
                  <Typography sx={{ display: 'flex', fontSize: '12px' }}>
                    By &nbsp;
                    <Typography sx={{ color: 'red', fontSize: '12px' }}>{author}</Typography>
                    &nbsp;-&nbsp;
                  </Typography>
                )}
                <Typography sx={{fontSize:'12px'}} component='div'>{date}</Typography>
              </Typography>
            </Box>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
    </>
  )
}

export default SimpleListItem