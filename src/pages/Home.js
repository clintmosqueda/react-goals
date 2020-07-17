import React from 'react'

import Hero from '../components/Hero'
import Archive from '../components/Archive'

const Home = () => {
  return (
    <div>
      <Hero/>
      <div className="wrapper">
        <Archive/>
      </div>
    </div>
  )
}

export default Home;