import React from "react";
import "./Contact.css";
import theme_pattern from "../../assets/theme_pattern.png";
import mail_icon from '../../assets/email.png';
import location_icon from '../../assets/location.png';
import call_icon from '../../assets/call.png'



const Contact = () => {

  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "2fd15ba4-7010-4ca5-9986-438f0307984e");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    }).then((res) => res.json());

    if (res.success) {
      alert(res.message)
    }
  }
  return (
    <div id='contact' className="contact">
      <div className="contact-title">
        <h1>Get in touch</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className="contact-section">
        <div className="contact-left">
          <h1>Let's talk</h1>
          <p>
            AI'm currently available to take on new projects, so feel free to
            send me a message about anything that you want to work on. You can
            contact anytime.
          </p>
          <div className="contact-details">
            <div className="contact-detail">
                <img src={mail_icon} alt=""/><p>iradianah5@gmail.com</p>
            </div>

            <div className="contact-detail">
                <img src={call_icon} alt=""/><p>+250-722-500-692</p>
            </div>

            <div className="contact-detail">
                <img src={location_icon} alt=""/><p>Kigali, Rwanda</p>
            </div>
          </div>
        </div>
        <form onSubmit={onSubmit} className="contact-right"> 
<label htmlFor="">Your Name</label>
<input type=" text" placeholder="Enter your name" name="name" />

<label htmlFor="">Your Email</label>
<input type="email" placeholder="Enter your email" name="email"/>
<label htmlFor="">Write your message here</label>
<textarea name="message" rows="8" placeholder="Enter your message"></textarea>
<button className="contact-submit">Submit now</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
