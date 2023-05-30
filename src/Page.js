import React, { Component } from 'react';
import Profile from './IMG_E5073.JPG';
import UserInfo from './UserInfo';
import MainContent from './MainContent'
import Footer from './Footer';

export default class Page extends Component {
  render() {
    return (
      <div className='main_page'>
        <img src={Profile} alt="profile" />
        <div className='main_content'>
          <UserInfo />
          <MainContent />
          <Footer />
        </div>
      </div>
    );
  }
}
