import React, { Component } from 'react';

export default class MainContent extends Component {
  render() {
    return (
       
      <div className='content'>
        <div className='title'>About</div>
         <span>
         I am a frontend developer with a particular interest in making things simple and automating daily tasks. I try to keep up with security and best practices, and am always looking for new things to learn.
         </span>
         <div className='title'>interests</div>
         <span>Food expert. Music scholar. Reader. Internet fanatic. Bacon buff. Entrepreneur. Travel geek. Pop culture ninja. Coffee fanatic.</span>
      </div>
    );
  }
}