import React from 'react'

import '../assets/scss/Article.scss'

const Article = ({image, time, title}) => {
  return (
    <article className="article">
      <div className="article-image" style={{backgroundImage: `url(${image})`}}></div>
      <time className="article-time" dateTime="">{time}</time>
      <h3 className="article-title">{title}</h3>
    </article>
  )
}

export default Article;