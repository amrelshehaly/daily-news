import React, { FC } from 'react'
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
  Button,
} from '@mui/material'
import { Replay, ChatBubble } from '@mui/icons-material'

interface Props {
  style: React.CSSProperties
  title?: string
  subtitle?: string
  picture?: string
  author?: string
  ImgHeight?: string
  onClick?: (e: React.MouseEvent<HTMLElement>) => void
}

const SimpleCard: FC<Props> = ({
  style,
  title,
  subtitle,
  picture,
  author,
  ImgHeight,
  onClick,
}) => {
  const styling =
    {
      maxWidth: 400,
      width: '100%',
      height: '100%',
      margin: '0 auto',
    } || style

  return (
    <Card sx={{ ...styling, cursor: 'pointer' }} onClick={onClick}>
      <CardMedia component="img" height={ImgHeight} image={picture} />
      <CardContent>
        <Typography gutterBottom variant="h4" component="div">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {subtitle}
        </Typography>
        <Typography component="div" sx={{ marginTop: '15%', display: 'flex' }}>
          By&nbsp; <Typography sx={{ color: 'red' }}>{author}</Typography>
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
  )
}

export default SimpleCard
