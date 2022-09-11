import React, {FC} from 'react'
import {Box,Typography} from '@mui/material'
import Image from 'next/image'

interface Props {
    children: React.ReactNode
}

const Layout:FC<Props> = ({children}) => {
  return (
    <Box>
        <Box sx={{backgroundColor:'blue', height:'75px',display:'flex'}}>
            <Box>
                <Typography>
                    Educatly
                </Typography>
            </Box>
        </Box>
        <Box sx={{padding:'1%'}}>
            {children}
        </Box>
    </Box>
  )
}

export default Layout