import React, { FC } from 'react'
import { style } from '../data/style'
import Hero from '../views/Hero'
import How from '../views/How'
import Why from '../views/Why'

const Home: FC = () => {
  // view
  return (
    <div className="-mb-4 md:-mb-6">
      <Hero />
      <div className={`${style.sectionInterval} bg-white`}>
        <How />
      </div>
      <div className={`${style.sectionInterval} bg-white`}>
        <Why />
      </div>
    </div>
  )
}

export default Home
