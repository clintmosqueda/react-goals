import React, { useState, useEffect } from 'react';

import '../assets/scss/Hero.scss'

import Mv from '../assets/images/mv.jpg'

const Hero = () => {

  const [slides, setSlides] = useState(1);
  const [slide, setSlide] = useState(1);

  const bannerArticles = [
    {
      id: '1',
      image: 'image1',
      title: 'サンプルテキストサンプル1',
      date: '2019.06.19'
    },
    {
      id: '2',
      image: 'image2',
      title: 'サンプルテキストサンプル 2',
      date: '2019.07.19' 
    },
    {
      id: '3',
      image: 'image3',
      title: 'サンプルテキストサンプル 3',
      date: '2019.08.19'
    }
  ]

  useEffect(() => {
    setSlides(bannerArticles.length)
  }, [bannerArticles.length])


  const handlePrev = () => {
    if(slide <= 1) {
      setSlide(slides)
    } else {
      setSlide(slide - 1)
    }
  }

  const handleNext = () => {
    if (slide >= slides ) {
      setSlide(1)
    } else {
      setSlide(slide + 1)
    }
  }

  return (
    <div className="hero">
      <> {bannerArticles.map((article, index) => (
        <div className={`hero-block ${slide === index+1 ? 'is-active' : ''}`} key={index}>
          <section className="hero-image" style={{ backgroundImage: `url(${Mv})` }}>
            <div className="wrapper">
              <div className="hero-content">
                <h2 className="hero-heading">{article.title}</h2>
                <time className="hero-time" dateTime="">{article.date}</time>
                <time className="hero-time" dateTime="">{slide}</time>
              </div>
            </div>
          </section>
        </div>
      ))}
      </>
      <div className="hero-dots">
        <>
          {bannerArticles.map((dot, index) => (
            <span className={`hero-dot ${slide === index+1 ? 'is-active' : '' }`}  key={index}></span>
          ))}
        </>
      </div>
      <div className="hero-arrows">
        <button className="hero-arrow hero-prev" onClick={handlePrev}>&lt;</button>
        <button className="hero-arrow hero-next" onClick={handleNext}>&gt;</button>
      </div>
    </div>
  )
}

export default Hero;