import React from 'react'
import './Hero.css'
import profile_img from '../../assets/profile.png'
import AnchorLink from 'react-anchor-link-smooth-scroll'

const Hero = () => {
  return (
    <div id='home' className='hero'>
        <img src={profile_img} alt='profile'></img>
        <h1><span>I'm Dianah IRANZI,</span> frontend Developer based in Rwanda</h1>
        <p>As a frontend developer based in Rwanda, I specialize in creating captivating digital experiences that seamlessly merge design innovation with technical expertise.</p>
   <div className='hero-action'>
    <div className="hero-connect"><AnchorLink className='anchor-link' offset={50} href='#contact'>Connect with me</AnchorLink></div>
    <div className="hero-resume">My resume</div>
   </div>
   
    </div>
  )
}

export default Hero