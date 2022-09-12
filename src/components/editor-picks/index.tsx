import React from 'react'
import List from '@mui/material/List'
import content from '../data.json'
import SimpleListItem from '../../common/listItem'
import useStyles from './style'
// import uni from '../../../public/images/uni.jpg'

const uni = '../../images/uni.jpg'

const Editorpicks = () => {
  const classes = useStyles()
  return (
    <List sx={{bgcolor: 'background.paper' }} className={classes.list}>
      {content.map((val, idx) => {
        return (
          <SimpleListItem
            key={idx}
            title={val.title}
            subTitle={val.description}
            Image={uni}
            tag={'MUSTREADS'}
            author={'Mike Tyson'}
            date={'October 3, 2022'}
          />
        )
      })}
    </List>
  )
}

export default Editorpicks
