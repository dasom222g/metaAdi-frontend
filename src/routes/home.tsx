import React, { FC } from 'react'
import { style } from '../lib/data'
import Hero from '../views/Hero'
import Why from '../views/Why'

const Home: FC = () => {
  // view
  return (
    <>
      <Hero />
      <section className={style.sectionInterval}>
        <Why />
      </section>
    </>
  )
}

export default Home
