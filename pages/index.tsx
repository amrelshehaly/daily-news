import type { NextPage, GetStaticProps } from 'next'
import Main from '../src/module/main-section'
// import { store,  } from '../src/store'
import { getNews, AddNews } from '../src/store/news'
import { useDispatch, useSelector } from 'react-redux'
import {getNewsAPI} from '../src/utils'


export const getStaticProps: GetStaticProps = async () => {


  const response = await getNewsAPI().then((res) => res.json()).
        then((data)=>{
          return data
        })

  return {
    props: {data: response},
  }
}

const Home: NextPage = ({data}:any) => {
  const dispatch = useDispatch()
  // const news = useSelector(getNews)
  console.log('data from static props', data.articles.length)
  
  if(data){
    console.log('calling dispatch')
    data.articles.forEach((element:any) => {
      dispatch(AddNews({
        ...element
      }))
    });
  }

  return (
    <>
      <Main />
      {/* <HomePage />
      <RecentPostsPage /> */}
    </>
  )
}

export default Home
