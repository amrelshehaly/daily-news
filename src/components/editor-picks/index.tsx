import React, {FC} from 'react'
import List from '@mui/material/List'
import SimpleListItem from '../../common/listItem'
import useStyles from './style'
import { Props } from '../../store/news'
import moment from 'moment'
import { useDispatch  } from 'react-redux'
import { setPosition } from '../../store/details'
import { useRouter } from 'next/router'


const uni = '../../images/uni.jpg'
interface DataProps {
  data: Props[]
}

const Editorpicks : FC<DataProps> = ({data}) => {
  const classes = useStyles()
  const dispatch = useDispatch()
  const router = useRouter()

  const handleDispatchPosition = (idx: number) => {
    dispatch(
      setPosition({
        idx
      }),
    )
    router.push('/details')
  }


  return (
    <List sx={{bgcolor: 'background.paper' }} className={classes.list}>
      {data.slice(0,5).map((val, idx) => {
        return (
          <SimpleListItem
            key={idx}
            title={val.title}
            subTitle={val.description}
            Image={val.urlToImage}
            tag={val.source?.name}
            author={val.author}
            date={moment(val?.publishedAt?.toString()).format('MMMM Do YYYY')}
            onClick={()=> handleDispatchPosition(idx)}
          />
        )
      })}
    </List>
  )
}

export default Editorpicks
