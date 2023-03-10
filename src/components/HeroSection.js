import React from 'react'
import {Button} from './Button';
import './HeroSection.css';
import '../App.css';
import backgroundVideo from '../assets/video-1.mp4'

function HeroSection() {
  return (
    <div className='hero-container'>
        <video autoPlay loop muted id = 'video'>
          <source src={backgroundVideo} type='video/mp4'/>
        </video>
        <h1>WildLife India</h1>
        <p>Mother Nature</p>
        <div className='hero-btns'>
            <Button className='btns' buttonStyle='btn--primary'
            buttonSize='btn--large'>
                GET STARTED <i className='far fa-play-circle' />
            </Button>
        </div>
    </div>
  )
}

export default HeroSection;