import React, { FC } from 'react'
import ListItem from '@mui/material/ListItem'
import Divider from '@mui/material/Divider'
import ListItemAvatar from '@mui/material/ListItemAvatar'
import Avatar from '@mui/material/Avatar'
import { Typography, Box } from '@mui/material'
import { Person } from '@mui/icons-material'



interface Props {
  Image?: string
  title?: string | React.ReactNode
  subTitle: string
  tag?: string
  author?: string
  date?: string
  isAvatar?: boolean
  styles?: React.CSSProperties
  onClick?: (e: React.MouseEvent<HTMLElement>) => void
}

const SimpleListItem: FC<Props> = (props: Props) => {
  const {
    Image,
    title,
    subTitle,
    tag,
    author,
    date,
    isAvatar,
    styles,
    onClick,
  } = props



  return (
    <>
      <ListItem alignItems="flex-start" sx={{ ...styles, cursor: 'pointer' }} onClick={onClick}>
        {isAvatar && (
          <ListItemAvatar sx={{ marginRight: '10px' }}>
            <Avatar>
              <Person />
            </Avatar>
          </ListItemAvatar>
        )}
        {Image && (
          <ListItemAvatar sx={{ marginRight: '10px' }}>
            <img src={Image} width="70px" height="70px" />
          </ListItemAvatar>
        )}

        <Box>
          <Box>
            <Typography
              component="div"
              sx={{ fontSize: '12px', color: 'lightgray' }}
            >
              {tag}
            </Typography>
            <Typography sx={{ fontWeight: 700 }} component="div">
              {title}
            </Typography>
          </Box>
          <Box>
            <Typography
              component="div"
              sx={{
                display: '-webkit-box',
                overflow: 'hidden',
                WebkitBoxOrient: 'vertical',
                WebkitLineClamp: 3,
              }}
            >
              {subTitle}
            </Typography>
            <Typography
              component="div"
              sx={{ fontSize: '12px', color: 'lightgray', display: 'flex' }}
            >
              {author && (
                <Typography
                  component="div"
                  sx={{ display: 'flex', fontSize: '12px' }}
                >
                  By &nbsp;
                  <Typography
                    component="div"
                    sx={{ color: 'red', fontSize: '12px' }}
                  >
                    {author}
                  </Typography>
                  &nbsp;-&nbsp;
                </Typography>
              )}
              {date && (
                <Typography component="div" sx={{ fontSize: '12px' }}>
                  {date}
                </Typography>
              )}
            </Typography>
          </Box>
        </Box>
      </ListItem>
      <Divider variant="inset" component="li" />
    </>
  )
}

export default SimpleListItem
