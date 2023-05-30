import React, { Component } from 'react'
import Email from './Icon.png'
import LinkedIn from './Vector.png' 
export default class UserInfo extends Component {
  render() {
    return (
      
        <div className='user_info'>
            <div className='user_name'>Victor Mungai</div>
            <div className='occupation'>Frontend Developer</div>
            <div className='website'>VictorMungai.website</div>
            <div className='links'>
              <a href='mailto:mungaivictor2781@gmail.com'><button className='email_button' > <img src= {Email} alt='img'/>  Email</button></a>
              <a href='www.linkedin.com/in/victor-mungai'><button className='linkedin_button' > <img src= {LinkedIn} alt='img'/>  LinkedIn</button></a>
            </div>
       </div>
    )
  }
}
