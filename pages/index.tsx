import React from 'react'
import type { NextPage, GetStaticProps } from 'next'
import Main from '../src/module/main-section'
import { getNews, AddNews } from '../src/store/news'
import { useDispatch, useSelector } from 'react-redux'
import { getNewsAPI } from '../src/utils'

export const getStaticProps: GetStaticProps = async () => {
  const response = await getNewsAPI()
    .then(res => res.json())
    .then(data => {
      return data
    })

  return {
    props: { data: response },
  }
}

const Home: NextPage = ({ data }: any) => {
  const dispatch = useDispatch()
  const news: any = useSelector(getNews)

  if (news.news.length == 0) {
    data.articles.forEach((element: any) => {
      dispatch(
        AddNews({
          ...element,
        }),
      )
    })
  }

  return (
    <>
      <Main />
    </>
  )
}

export default Home
