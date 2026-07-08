import React, { useState } from 'react';
import axios from 'axios';

function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Clear error when user types
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }
    
    setIsSubmitting(true);
    setSubmitStatus(null);
    
    try {
      const response = await axios.post('/api/contact', formData);
      
      if (response.data.success) {
        setSubmitStatus({ 
          success: true, 
          message: response.data.message 
        });
        setFormData({
          name: '',
          email: '',
          company: '',
          phone: '',
          message: ''
        });
      } else {
        setSubmitStatus({ 
          success: false, 
          message: 'Failed to send message. Please try again.' 
        });
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus({ 
        success: false, 
        message: 'An error occurred. Please try again later.' 
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      title: 'Address',
      content: 'Cechovo nabrezi 1790, 530 03 Pardubice, Czech Republic',
      icon: 'fa-map-marker-alt'
    },
    {
      title: 'Phone',
      content: [
        '+420 466 024 111',
        '+420 466 024 423'
      ],
      icon: 'fa-phone'
    },
    {
      title: 'Email',
      content: 'support-ave@geovap.cz',
      icon: 'fa-envelope'
    },
    {
      title: 'Business Hours',
      content: 'Monday - Friday: 8:00 AM - 5:00 PM (CET)',
      icon: 'fa-clock'
    }
  ];

  return (
    <div>
      {/* Page Header */}
      <section className="hero" style={{ padding: '4rem 0', background: 'linear-gradient(135deg, #2c3e50 0%, #3498db 100%)' }}>
        <div className="container text-center">
          <h1 style={{ color: 'white' }}>Contact Us</h1>
          <p style={{ color: 'rgba(255, 255, 255, 0.9)', fontSize: '1.25rem' }}>
            Get in touch with our team
          </p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="section">
        <div className="container">
          <h2 className="section-title">Contact Information</h2>
          <div className="grid">
            {contactInfo.map((info, index) => (
              <div key={index} className="card text-center">
                <div style={{ marginBottom: '1rem' }}>
                  <i className={`fas ${info.icon}`} style={{ fontSize: '2.5rem', color: '#3498db' }}></i>
                </div>
                <h3>{info.title}</h3>
                {Array.isArray(info.content) ? (
                  info.content.map((item, itemIndex) => (
                    <p key={itemIndex}>{item}</p>
                  ))
                ) : (
                  <p>{info.content}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="section contact">
        <div className="container">
          <h2 className="section-title">Send Us a Message</h2>
          <p style={{ textAlign: 'center', fontSize: '1.25rem', marginBottom: '2rem' }}>
            Fill out the form below and we'll get back to you as soon as possible
          </p>
          
          <div className="contact-form">
            {submitStatus && (
              <div className={`alert ${submitStatus.success ? 'alert-success' : 'alert-error'}`}>
                {submitStatus.message}
              </div>
            )}
            
            <form onSubmit={handleSubmit}>
              <div className="grid" style={{ gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
                <div className="form-group">
                  <label htmlFor="name">Name *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className={errors.name ? 'error' : ''}
                    placeholder="Your name"
                  />
                  {errors.name && <span style={{ color: '#e74c3c', fontSize: '0.875rem' }}>{errors.name}</span>}
                </div>
                
                <div className="form-group">
                  <label htmlFor="email">Email *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={errors.email ? 'error' : ''}
                    placeholder="Your email address"
                  />
                  {errors.email && <span style={{ color: '#e74c3c', fontSize: '0.875rem' }}>{errors.email}</span>}
                </div>
              </div>
              
              <div className="grid" style={{ gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
                <div className="form-group">
                  <label htmlFor="company">Company</label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    placeholder="Your company name"
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="phone">Phone</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Your phone number"
                  />
                </div>
              </div>
              
              <div className="form-group">
                <label htmlFor="message">Message *</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className={errors.message ? 'error' : ''}
                  placeholder="Your message..."
                ></textarea>
                {errors.message && <span style={{ color: '#e74c3c', fontSize: '0.875rem' }}>{errors.message}</span>}
              </div>
              
              <button 
                type="submit" 
                className="btn btn-accent" 
                disabled={isSubmitting}
                style={{ fontSize: '1.25rem', padding: '1rem 2rem' }}
              >
                {isSubmitting ? (
                  <>
                    <i className="fas fa-spinner fa-spin" style={{ marginRight: '0.5rem' }}></i>
                    Sending...
                  </>
                ) : (
                  'Send Message'
                )}
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="section" style={{ backgroundColor: '#f8f9fa' }}>
        <div className="container text-center">
          <h2 className="section-title">Our Location</h2>
          <p style={{ fontSize: '1.25rem', marginBottom: '2rem' }}>
            Visit us at our headquarters in Pardubice, Czech Republic
          </p>
          
          <div style={{ 
            background: 'white', 
            height: '400px', 
            borderRadius: '8px', 
            boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'center',
            color: '#7f8c8d'
          }}>
            <div>
              <i className="fas fa-map" style={{ fontSize: '3rem', marginBottom: '1rem' }}></i>
              <p>Interactive map would be displayed here</p>
              <p style={{ fontSize: '0.875rem', color: '#95a5a6' }}>
                (Map integration available upon request)
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Social Media */}
      <section className="section">
        <div className="container text-center">
          <h2 className="section-title">Connect With Us</h2>
          <p style={{ fontSize: '1.25rem', marginBottom: '2rem' }}>
            Follow us on social media for the latest news and updates
          </p>
          
          <div style={{ display: 'flex', justifyContent: 'center', gap: '2rem' }}>
            <a href="#" className="btn btn-outline" style={{ width: '60px', height: '60px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <i className="fab fa-facebook" style={{ fontSize: '1.5rem' }}></i>
            </a>
            <a href="#" className="btn btn-outline" style={{ width: '60px', height: '60px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <i className="fab fa-linkedin" style={{ fontSize: '1.5rem' }}></i>
            </a>
            <a href="#" className="btn btn-outline" style={{ width: '60px', height: '60px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <i className="fab fa-twitter" style={{ fontSize: '1.5rem' }}></i>
            </a>
            <a href="#" className="btn btn-outline" style={{ width: '60px', height: '60px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <i className="fab fa-youtube" style={{ fontSize: '1.5rem' }}></i>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default ContactPage;
