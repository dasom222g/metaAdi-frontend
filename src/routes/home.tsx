import React, { FC } from 'react'
import Hero from '../views/Hero'
import Why from '../views/Why'

const Home: FC = () => {
  // view
  return (
    <section>
      <Hero />
      <Why />
    </section>
  )
}

export default Home
