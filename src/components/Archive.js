import React from 'react'
import { Link } from "react-router-dom";

import Article from './Article'
import Button from './Button'

import dummy from '../assets/images/dummy-image.jpg'
import '../assets/scss/Archive.scss'

const Archive = () => {

  const articles = [
    {
      id: '1',
      image: dummy,
      title: 'サンプルテキストサンプル ルテキストサンプルテキストサンプルテキストサンプル ルテキ',
      date: '2019.06.19'
    },
    {
      id: '2',
      image: dummy,
      title: 'サンプルテキストサンプル ルテキストサンプルテキストサンプルテキストサンプル ルテキ',
      date: '2019.06.19'
    },
    {
      id: '3',
      image: dummy,
      title: 'サンプルテキストサンプル ルテキストサンプルテキストサンプルテキストサンプル ルテキ',
      date: '2019.06.19'
    },
    {
      id: '4',
      image: dummy,
      title: 'サンプルテキストサンプル ルテキストサンプルテキストサンプルテキストサンプル ルテキ',
      date: '2019.06.19'
    },
    {
      id: '5',
      image: dummy,
      title: 'サンプルテキストサンプル ルテキストサンプルテキストサンプルテキストサンプル ルテキ',
      date: '2019.06.19'
    },
    {
      id: '6',
      image: dummy,
      title: 'サンプルテキストサンプル ルテキストサンプルテキストサンプルテキストサンプル ルテキ',
      date: '2019.06.19'
    },
  ]

  return (
    <section className="archive">
      <h2 className="archive-heading">NEWS</h2>
      <div className="archive-content">
        <>
          {
            articles.map((article) => (
              <Link className="archive-link" key={article.id} to={`/news/${article.id}`}>
                <Article image={article.image} time={article.date} title={article.title} />
              </Link> 
            ))
          }
        </>
      </div>
      <div className="archive-button">
        <Button text="LOAD MORE"/>
      </div>
    </section>
  )
}

export default Archive;