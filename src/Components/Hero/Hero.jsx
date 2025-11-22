import React from 'react'
import './Hero.css'
import profile_img from '../../Assets/profile_img.svg'
import AnchorLink from 'react-anchor-link-smooth-scroll'

const Hero = () => {
  return (
    <div id='home' className='hero'>
      <img src={profile_img} alt="" />
      <h1><span>I'm Nikhil Gurung,</span> a full-stack developer based in India</h1>
      <p>I’m a full-stack developer from Darjeeling, India, with 5 years of experience building modern, high-performance web applications.</p>
      <div className='hero-action'>
        <div className='hero-connect'><AnchorLink className='anchor-link' href='#contact'>Connect with me</AnchorLink></div>
        <div className='hero-resume'>My resume</div>
      </div>
    </div>
  )
}

export default Hero
