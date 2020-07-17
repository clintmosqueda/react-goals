import React from 'react'

import Breadcrumbs from '../components/Breadcrumbs'

import '../assets/scss/Single.scss';

import Mv from '../assets/images/mv.jpg'

const Single = () => {
  return (
    <div className="single">
      <Breadcrumbs/>
      <div className="wrapper">
        <div className="single-header">
          <time className="single-time">2019.06.19</time>
          <h1 className="single-title">サンプルテキストサンプル ルテキストサンプルテキストサンプルテキストサンプル ルテキスト </h1>
          <div className="single-image" style={{ backgroundImage: `url(${Mv})` }}></div>
        </div>
        <div className="single-content">
          <p>ここにはテキストが入ります。ここにはテキストが入りますここにはテキストが入りますここにはテキストが入りますここにはテキストが入ります。ここにはテキストが入ります。ここにはテキストが入りますここにはテキストが入りますここにはテキストが入りますここにはテキストが入ります。ここにはテキストが入ります。ここにはテキストが入りますここにはテキストが入りますここにはテキストが入りますここにはテキストが入ります。</p>
          <p>ここにはテキストが入ります。ここにはテキストが入りますここにはテキストが入りますここにはテキストが入りますここにはテキストが入ります。ここにはテキストが入ります。ここにはテキストが入りますここにはテキストが入りますここにはテキストが入りますここにはテキストが入ります。ここにはテキストが入ります。ここにはテキストが入りますここにはテキストが入りますここにはテキストが入りますここにはテキストが入ります。</p>
        </div>
      </div>
    </div>
  )
}

export default Single;