import React from 'react'

const Intro = () => {
  return (
    <div className="intro-div">

      <div className="intro-lines">
        <h1 style={{color: "green"}}>Hey, I am Software Developer</h1>
        <h2>BUT <br /> No one <br /> calls me </h2>
        <h1 className='name'>Mahesh Bogati.</h1>
        
        <div style={{display:"flex", flexDirection:"row"}}>
        <h1 style={{transfrom:"rotate(360deg)"}}>😎</h1>
        <p>On the way.... <br /> 
        OF <span> Web and Flutter Development </span></p>
        </div>
        
      </div>
      <div className='img-div'></div>
    </div>
  )
}

export default Intro