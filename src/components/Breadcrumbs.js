import React from 'react'

import { useHistory } from "react-router-dom";

import '../assets/scss/Breadcrumbs.scss'

const Breadcrumbs = ({title}) => {

  const history = useHistory();

  return (
    <div className="breadcrumbs">
      <div className="wrapper">
        <div className="breadcrumbs-wrap">
          <ul className="breadcrumbs-list">
            <li className="breadcrumbs-item"><span onClick={() => history.push('/')}>HOME</span></li>
            <> {title ? 
              <li className="breadcrumbs-item">{title}</li> 
              : null
              }
            </>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Breadcrumbs;