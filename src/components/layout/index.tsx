import React, { FC } from 'react'
import { Box, Typography } from '@mui/material'

interface Props {
  children: React.ReactNode
}

const Layout: FC<Props> = ({ children }) => {
  return (
    <Box>
      <Box sx={{ backgroundColor: '#0095ff', height: '75px', display: 'flex' }}>
        <Box>
          <Typography>
            <img
              src="https://eaeinvierte.eae.es/resources/project/15/image-602bad5ea480f.png"
              width="135px"
              height="74px"
            />
          </Typography>
        </Box>
      </Box>
      <Box sx={{ padding: '1%' }}>{children}</Box>
    </Box>
  )
}

export default Layout
