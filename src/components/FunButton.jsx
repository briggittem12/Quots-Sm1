import React from 'react'

const FunButton = ({anyColors, buttonFuntional}) => {

  let btnColors = {
    backgroundColor: anyColors
  }

  return (

      <div className='card__btn'> 
        <button className='btn' style={btnColors} onClick={buttonFuntional}>&#62;</button>
      </div>
     
  )
}

export default FunButton