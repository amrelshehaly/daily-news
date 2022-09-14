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
        let date : string = ''
        if (val.publishedAt) {
          const datee = new Date(val?.publishedAt)
          const year = datee.getFullYear() + ''
          const month = datee.getMonth() +''
          const day = datee.getDay()+''
          date = day+'-'+month+'-'+year
        }
        return (
          <SimpleListItem
            key={idx}
            title={val.title}
            subTitle={val.description}
            Image={val.urlToImage}
            tag={val.source?.name}
            author={val.author}
            date={date && moment(date).format('MMMM Do YYYY')}
            onClick={()=> handleDispatchPosition(idx)}
          />
        )
      })}
    </List>
  )
}

export default Editorpicks
