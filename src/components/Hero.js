import React, { useState, useEffect } from 'react';

import './Hero.scss'

import Mv from '../assets/images/mv.jpg'

const Hero = () => {

  const [slides, setSlides] = useState();

  console.log('number of', slides)

  const bannerArticle = [
    {
      id: '1',
      image: 'image1',
      title: 'title',
      date: 'date'
    },
    {
      id: '2',
      image: 'image2',
      title: 'title2',
      date: 'date' 
    },
    {
      id: '3',
      image: 'image3',
      title: 'title3',
      date: 'date'
    }
  ]

  useEffect(() => {
    setSlides(bannerArticle.length)
  }, [bannerArticle])


  return (
    <div className="hero">
      <section className="hero-image" style={{backgroundImage: `url(${Mv})`}}>
        <div className="wrapper">
          <div className="hero-block"></div>
        </div>
      </section>
    </div>
  )
}

export default Hero;