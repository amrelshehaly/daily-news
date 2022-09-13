import type { NextPage, GetStaticProps } from 'next'
import DetailsPage from '../src/module/details'

export const getStaticProps: GetStaticProps = async () => {
  // await getNews()

  return {
    props: {},
  }
}

const Details: NextPage = () => {
  return (
    <>
      <DetailsPage />
    </>
  )
}

export default Details
