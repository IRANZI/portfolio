import React from 'react'
import './About.css'
import theme_pattern from '../../assets/theme_pattern.png'
import profile_img from '../../assets/about_profile.png'

const About = () => {
  return (
    <div id='about' className='about'>
      <div className="about-tittle">
      <h1>About me</h1>
      <img src={theme_pattern}alt='theme_pattern'/>
      </div>
      <div className="about-sections">
<div className="left">
  <img src={profile_img} alt='about_profile'/>
</div>
<div className="right">
  <div className="about-para">
    <p>As a frontend developer, I thrive on crafting intuitive user experiences that seamlessly blend functionality with aesthetic appeal. With a keen eye for design and a passion for coding, I bring concepts to life by translating ideas into clean, efficient code. I am adept at leveraging HTML, CSS, and JavaScript to build responsive websites and interactive features that engage and delight users. Constantly evolving alongside industry trends, I enjoy tackling challenges head-on and refining my skills to deliver impactful solutions that elevate the digital experience.</p>
    <p>As a frontend developer, I thrive at the intersection of creativity and technical precision. With a strong foundation in HTML, CSS, and JavaScript, I specialize in crafting visually engaging and user-friendly websites. I enjoy the challenge of transforming design concepts into responsive, intuitive interfaces that enhance user experiences. Continuously exploring new technologies and best practices, I am dedicated to delivering clean, efficient code that not only meets but exceeds client and user expectations. Passionate about blending design aesthetics with functional excellence, I find fulfillment in creating digital solutions that make a meaningful impact.</p>
  </div>
  <div className="about-skills">
    
      <div className='about-skill'><p>HTML & CSS</p><hr style={{width:"50%"}}/></div>
      <div className='about-skill'><p>React JS</p><hr style={{width:"70%"}}/></div>
      <div className='about-skill'><p>JavaScript</p><hr style={{width:"60%"}}/></div>
      <div className='about-skill'><p>Next JS</p><hr style={{width:"50%"}}/></div>
    
  </div>
</div>
      </div>
      <div className="about-achievements">
        <div className="about-achievement">
          <h1>10+</h1>
          <p>YEARS OF EXPERIENCE</p>
        </div>
        <hr/>

        <div className="about-achievement">
          <h1>90+</h1>
          <p>PROJECTS COMPLETED</p>
        </div>
        <hr/>

        <div className="about-achievement">
          <h1>15+</h1>
          <p>HAPPY CLIENTS</p>
        </div>
        <hr/>
      </div>
    </div>
  )
}

export default About