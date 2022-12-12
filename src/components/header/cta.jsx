import React from 'react'
import CV from '../../assets/images/Tanzila+Abedin+Resume_22+(2).pdf'

const Cta = () => {
  return (
    <div>
      <a href={CV} download className='btn'>Download CV</a>
      <a href="#contact" className='btn btn-primary'>Let's Talk</a>
    </div>
  )
}

export default Cta