import React, {FC} from 'react'
import { Grid } from '@mui/material'
import { Props } from '../../store/news'
import { useRouter } from 'next/router'
import SimpleCard from '../../common/Card'
import { useDispatch } from 'react-redux'
import { setPosition  } from '../../store/details'

interface DataProps {
  data: Props[]
}

const Home : FC<DataProps> = ({data}) => {
  const router = useRouter()
  const dispatch = useDispatch()


  const handleDispatchPosition = (idx: number) => {
    dispatch(
      setPosition({
        id: idx
      }),
    )
    router.push('/details')
  }

  return (
    <Grid container spacing={2} justifyContent="right" sx={{ height: '100%' }}>
      <Grid item sm={6} md={6} lg="auto" xl="auto" xs={12}>
        <SimpleCard
          style={{
            maxWidth: 400,
            width: '100%',
            margin: '0 auto',
          }}
          ImgHeight="300"
          author={data[0].author}
          picture={data[0].urlToImage}
          subtitle={data[0].description}
          title={data[0].title}
          onClick={()=> handleDispatchPosition(0)}
        />
      </Grid>
      <Grid item sm={6} md={6} lg="auto" xl="auto" xs={12}>
        <Grid container direction="column" spacing={2}>
          <Grid item xs={6}>
            <SimpleCard
              style={{
                maxWidth: 400,
                width: '100%',
                margin: '0 auto',
              }}
              ImgHeight="140"
              author={data[1].author}
              picture={data[1].urlToImage}
              subtitle={data[1].description}
              onClick={()=> handleDispatchPosition(1)}
            />
          </Grid>
          <Grid item xs={6}>
            <SimpleCard
              style={{
                maxWidth: 400,
                width: '100%',
                margin: '0 auto',
              }}
              ImgHeight="140"
              author={data[2].author}
              picture={data[2].urlToImage}
              subtitle={data[2].description}
              onClick={()=> handleDispatchPosition(2)}
            />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  )
}

export default Home
