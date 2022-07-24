import React from 'react'
import { useState } from 'react'


const QuotesCard = ({formatQuot, anyColors}) => {

  let useStyle = {
    color: anyColors
  }

  return (
    <section className='section__container' style={useStyle}>
      <div className='card'>
      <i className="fa-solid fa-quote-left icon__quots"></i>
      <p className='quote__text'>{formatQuot.quote}</p>
      <span className='author__text'>{formatQuot.author}</span>
      </div>
    </section>
  )
}

export default QuotesCard