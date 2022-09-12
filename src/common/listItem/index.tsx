import React, { FC } from 'react'
import Image, { StaticImageData } from 'next/image'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import Divider from '@mui/material/Divider'
import ListItemText from '@mui/material/ListItemText'
import ListItemAvatar from '@mui/material/ListItemAvatar'
import Avatar from '@mui/material/Avatar'
import Typography from '@mui/material/Typography'

import uni from '../../../public/images/uni.jpg'

// const uni = '../../images/uni.jpg'

interface Props {
  Image: string
  title: string
  subTitle: string
}

const SimpleListItem: FC<Props> = (props: Props) => {
  const { Image, title, subTitle } = props
  return (
    <>
      <ListItem alignItems="flex-start">
        <ListItemAvatar sx={{ marginRight: '10px' }}>
          <img src={Image} width="70px" height="70px" />
        </ListItemAvatar>
        <ListItemText
          primary={title}
          secondary={
            <React.Fragment>
              {subTitle}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
    </>
  )
}

export default SimpleListItem
