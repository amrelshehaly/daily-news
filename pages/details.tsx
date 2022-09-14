import React from 'react'
import type { NextPage, GetStaticProps } from 'next'
import DetailsPage from '../src/module/details'

export const getStaticProps: GetStaticProps = async () => {
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
