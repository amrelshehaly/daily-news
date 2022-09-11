import React from 'react'
import {Grid} from '@mui/material'
import Home from '../../components/home'
import Editorpicks from '../../components/editor-picks'

const News = () => {
  return (
    <Grid container spacing={2} direction='column' justifyContent='center'>
        <Grid item>
            <Home />
        </Grid>
        <Grid item>
            <Editorpicks />
        </Grid>
    </Grid>
  )
}

export default News