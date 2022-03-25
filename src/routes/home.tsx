import React, { FC } from 'react'
import { style } from '../data/style'
import Hero from '../views/Hero'
import Why from '../views/Why'

const Home: FC = () => {
  // view
  return (
    <>
      <Hero />
      <section className={`${style.sectionInterval} bg-white`}>
        <Why />
      </section>
    </>
  )
}

export default Home
