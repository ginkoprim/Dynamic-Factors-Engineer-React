import React from 'react'

import { Helmet } from 'react-helmet'

import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Dynamic Factors Engineer</title>
        <meta property="og:title" content="Dynamic Factors Engineer" />
      </Helmet>
    </div>
  )
}

export default Home
