import React, { Component } from 'react'
import Instagram from './Instagram Icon.png'
import Twitter from './Twitter Icon.png'
import GitHub from './GitHub Icon.png'  
import Facebook from './Facebook Icon.png'
export default class Footer extends Component {
  render() {
    return (
      <div className='footer'>
        <a href='http://twitter.com/mungaivic'><div><img src={Twitter} alt='twitter_icon'/></div></a>
        <div><img src={Facebook} alt='instagram_icon'/></div>
        <a href='http://instagram.com/mr_finnesse'><div><img src={Instagram} alt='instagram_icon'/></div></a>
        <a href='https://github.com/victor-mungai'><div><img src={GitHub} alt='github_icon'/></div></a>
      </div>
    )
  }
}
