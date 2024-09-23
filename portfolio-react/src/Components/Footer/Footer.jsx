import React from 'react'
import './Footer.css'
import footer_logo from '../../assets/footer.png'
import user_icon from '../../assets/user.png'


const Footer = () => {
  return (
    <div className='footer'>
        <div className="footer-top">
            <div className="footer-top-left">
                <img src={footer_logo} alt=''/>
                <p>I am  frontend developer from, Rwanda with 10 years of experience.</p>

            </div>
            <div className="footer-top-right">
                <div className="footer-email-input">
                    <img src={user_icon} alt=''/>
                    <input type='email' placeholder='Enter your email'/>
                </div>
                <div className="footer-subscribe">Subscribe</div>
            </div>
        </div>
        <hr/>
<div className="footer-bottom">
    <p className="footer-bottom-left"> 2024 Dianah IRANZI. All rights are reserved</p>
    <div className="footer-bottom-right">
        <p>Terms of Services</p>
        <p>Privacy</p>
        <p>Connect with me</p>
    </div>
</div>
    </div>
  )
}

export default Footer