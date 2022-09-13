import { ListItem, ListItemAvatar, Avatar, ListItemText, Typography } from '@mui/material'
import React from 'react'

const Comment = () => {
  return (
    <ListItem alignItems="flex-start" sx={{ border: '1px solid gray' }}>
      <ListItemAvatar>
        <Avatar alt="person" src="/static/images/avatar/1.jpg" />
      </ListItemAvatar>
      <ListItemText
        primary="Brunch this weekend?"
        secondary={
          <React.Fragment>
            <Typography
              sx={{ display: 'inline' }}
              component="span"
              variant="body2"
            >
              Ali Connors
            </Typography>
            {" — I'll be in your neighborhood doing errands this…"}
          </React.Fragment>
        }
      />
    </ListItem>
  )
}

export default Comment
