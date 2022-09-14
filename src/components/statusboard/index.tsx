import React from 'react'
import { Box, Typography } from '@mui/material'
import useStyles from './styles'

const StatusBoard = () => {
  const classes = useStyles()
  return (
    <Box
      display="grid"
      gridTemplateColumns="repeat(12, 1fr)"
      gap={2}
      className={classes.container}
    >
      <Box gridColumn="span 12">
        <Typography component="div" sx={{ display: 'grid' }}>
          <Typography component="div" variant="h4">
            23
          </Typography>
          <Typography component="div" variant="h6">
            Shares
          </Typography>
        </Typography>
      </Box>
      <Box gridColumn="span 12">
        <Typography>Email</Typography>
      </Box>
      <Box gridColumn="span 12">
        <Typography>facebook</Typography>
      </Box>
      <Box gridColumn="span 12">
        <Typography>More</Typography>
      </Box>
    </Box>
  )
}

export default StatusBoard
