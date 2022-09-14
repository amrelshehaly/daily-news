import React, { FC } from 'react'
import { Typography } from '@mui/material'

interface Props {
  title: string
  author?: string
  date?: string
}

const Banner: FC<Props> = ({ title, author, date }) => {
  return (
    <Typography
      component="div"
      variant="h3"
      sx={{ borderBottom: '1px solid grey' }}
    >
      {title}
      <Typography component="div" sx={{ display: 'flex' }}>
        {author && (
          <Typography component="div" sx={{ color: 'red', display: 'flex' }}>
            <div style={{ color: 'black' }}>By&nbsp;</div> {author}
          </Typography>
        )}
        {date && (
          <Typography component="div" sx={{ marginLeft: '20px' }}>
            {date}
          </Typography>
        )}
      </Typography>
    </Typography>
  )
}

export default Banner
