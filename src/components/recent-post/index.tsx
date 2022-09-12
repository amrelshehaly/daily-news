import React from 'react'
import List from '@mui/material/List'
import SimpleListItem from '../../common/listItem'
import content from '../data.json'

// import uni from '../../../public/images/uni.jpg'

const uni = '../../images/uni.jpg'

const RecentPost = () => {
  return (
    <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
        {
            content.map((val,idx)=>{
                return(
                    <SimpleListItem title={val.title} subTitle={val.description} Image={uni} />
                )
            })
        }
    </List>
  )
}

export default RecentPost
