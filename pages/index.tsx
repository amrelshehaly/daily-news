import type { NextPage, GetStaticProps } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { getNews } from '../src/utils'
import HomePage from '../src/components/home'
import RecentPostsPage from '../src/components/recent-post'
import Main from '../src/module/main-section'

export const getStaticProps: GetStaticProps = async () => {
  // await getNews()

  return {
    props: {},
  }
}

const Home: NextPage = () => {
  return (
    <>
      <Main />
      {/* <HomePage />
      <RecentPostsPage /> */}
    </>
  )
}

export default Home
