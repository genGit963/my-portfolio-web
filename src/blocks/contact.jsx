import React from 'react'

const Contact = () => {
  return (
    <div className='contact-bg'>
      <div className='contact'>
        
        <div className="contact-detail">

          <div className='mail-box'>
          <h1>😃 Where to Find Me 😃</h1>
          <h2>Gmail: <a href='mailto:mryogi963@gmail.com'>mryogi963@gmail.com</a></h2>
          </div>

          <div className='other-cnt'>
            <a href='www.facebook.com'><img src="/resources/contact.jpg" alt="" />facebook</a>
            <a href='www.facebook.com'><img src="/resources/contact.jpg" alt="" />twitter</a>
            <a href='www.facebook.com'><img src="/resources/contact.jpg" alt="" /> github</a>    
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact