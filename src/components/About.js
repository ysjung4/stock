import React, { useState } from 'react';
import emailjs from 'emailjs-com';

const About = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
   
    emailjs.send('service_woq15ss', 'template_4nfad32', formData, 'mNAUKZDgAFPwAvdPT')
      .then((response) => {
        console.log('Email sent successfully:', response);
        alert('Your message has been sent!');
      })
      .catch((error) => {
        console.error('Error sending email:', error);
        alert('Failed to send your message. Please try again.');
      });

    // 폼 초기화
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div className="about-page">
      <div className="about-content">
        <h2>About Us</h2>
        <img 
          src="/image/l-ch-UliAdsPgjHo-unsplash.jpg" 
          alt="Shopping cart"
          className="about-image"
          style={{ maxWidth: '100%', borderRadius: '8px' }}
        />
        <p className="image-credit" style={{ fontSize: '8px' }}>
          Photo by <a href="https://unsplash.com/@uliads">Uli Ads</a> on Unsplash
        </p>
        <p>
          Welcome to Yeonseo Jung's virtual home shopping platform! This side project is created using open APIs to provide a dynamic, interactive experience that mimics a realistic online shopping environment. Here, you can browse various products, learn more about them, and enjoy a seamless shopping journey.
        </p>
      </div>

      {/* Contact Form */}
      <div className="contact-section">
        <h3>Contact Us</h3>
        <p>We'd love to hear from you! Whether you have questions or feedback, feel free to reach out through the form below.</p>
        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input type="text" id="name" name="name" placeholder="Your Name" required value={formData.name} onChange={handleChange} />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" placeholder="Your Email" required value={formData.email} onChange={handleChange} />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea id="message" name="message" placeholder="Your Message" rows="5" required value={formData.message} onChange={handleChange}></textarea>
          </div>
          <button type="submit" className="submit-button">Send Message</button>
        </form>
      </div>
    </div>
  );
};

export default About;
