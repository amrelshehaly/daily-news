import React, { FC } from 'react'
import { List, Paper, Typography } from '@mui/material'
import SimpleListItem from '../../common/listItem'
import { Props } from '../../store/news'
import moment from 'moment'
import { useDispatch, useSelector } from 'react-redux'
import { setPosition, getPosition } from '../../store/details'
import { useRouter } from 'next/router'

const uni = '../../images/uni.jpg'

interface DataProps {
  title: string
  data: Props[]
}

const SidePost: FC<DataProps> = ({ title, data }) => {
  const dispatch = useDispatch()
  const position = useSelector(getPosition)
  const router = useRouter()
  const [array, setArray] = React.useState<Props[]>([])

  const handleDispatchPosition = (idx: number) => {
    dispatch(
      setPosition({
        id: idx,
      }),
    )
    router.push('/details')
  }

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
        {data.length > 0 &&
          data.slice(0, 3).map((val, idx) => {
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
                title={val.title}
                key={idx}
                subTitle={val.description}
                Image={val.urlToImage}
                date={date && moment(date).format('MMMM Do YYYY')}
                onClick={() => handleDispatchPosition(idx)}
              />
            )
          })}
      </List>
    </Paper>
  )
}

export default SidePost
