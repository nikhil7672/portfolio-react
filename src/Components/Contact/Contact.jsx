import React from 'react'
import './Contact.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import mail_icon from '../../assets/mail_icon.svg'
import location_icon from '../../assets/location_icon.svg'
import call_icon from '../../assets/call_icon.svg'

const Contact = () => {

const onSubmit = async (event) => {
  event.preventDefault();

  const formData = new FormData(event.target);
  formData.append("access_key", "68b247e9-f073-4768-b1ec-d0655bd317b7");

  try {
    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const result = await response.json();

    if (result.success) {
      alert("Message sent successfully!");
      event.target.reset();   // Clear form after success
    } else {
      alert("Failed to send message. Try again!");
    }
  } catch (error) {
    console.error("Error submitting form:", error);
    alert("Something went wrong. Please try again.");
  }
};


  return (
    <div id='contact' className='contact'>
      <div className="contact-title">
        <h1>Get in touch</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className="contact-section">
        <div className="contact-left">
            <h1>Let's talk</h1>
            <p>I'm currently available to take on new projects, so feel free to send me a message about anything that you want me to work on. You can contact me anytime.</p>
            <div className="contact-deatails">
                <div className="contact-detail">
                    <img src={mail_icon} alt="" />
                    <p>nikhilgurung170@gmail.com</p>
                </div>
                <div className="contact-detail">
                    <img src={call_icon} alt="" />
                    <p>+91 8250547672</p>
                </div>
                <div className="contact-detail">
                    <img src={location_icon} alt="" />
                    <p>Siliguri, West Bengal, India</p>
                </div>
            </div>
        </div>
        <form onSubmit={onSubmit} className="contact-right">
            <label htmlFor="">Your Name</label>
            <input type="text" placeholder='Enter your name' name='name' required />
            <label htmlFor="">Your Email</label>
            <input type="email" placeholder='Enter your email' name='email' required />
            <label htmlFor="">Write your message here</label>
            <textarea name="message" rows="8" placeholder='Enter your message' required></textarea>
            <button type='submit' className="contact-submit">Submit Now</button>
        </form>
      </div>
    </div>
  )
}

export default Contact
