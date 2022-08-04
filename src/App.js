import React from 'react'
import './App.css'
import {Article, Brand, Cta, Feature, Navbar,} from './compenents'
import {Blog, Featrues, Footer, Header, Possibillity, WhatGPT3} from './countainers'


const App = () => {
  return (
    <div className='App'>
      <div className='gradient__bg'>
        <Navbar />
        <Header />
      </div>
        <Brand />
        <WhatGPT3 />
        <Featrues />
        <Possibillity />
        <Cta />
        <Blog />
        <Footer />
    </div>
  )
}

export default App
