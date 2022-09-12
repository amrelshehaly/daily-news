import React, {FC} from 'react'
import { List, Paper, Typography } from '@mui/material'
import SimpleListItem from '../../common/listItem'
import content from '../data.json'

// import uni from '../../../public/images/uni.jpg'

const uni = '../../images/uni.jpg'

interface Props {
  title: string
}

const SidePost : FC<Props> = ({title}) => {
  return (
    <Paper elevation={10} sx={{ width: 'fit-content' }}>
      <Typography
        sx={{ padding: '10px', color: 'red' }}
        component="div"
        variant="h5"
      >
        {title}
      </Typography>
      <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
        {content.slice(0,3).map((val, idx) => {
          return (
            <SimpleListItem
              key={idx}
              subTitle={val.description}
              Image={uni}
              tag={'October 3, 2022'}
            />
          )
        })}
      </List>
    </Paper>
  )
}

export default SidePost
