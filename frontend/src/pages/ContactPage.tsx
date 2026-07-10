import { useState, FormEvent, ChangeEvent } from 'react';
import axios, { AxiosResponse, AxiosError } from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone, faMapMarkerAlt, faClock, faPaperPlane, faCheckCircle, faExclamationCircle } from '@fortawesome/free-solid-svg-icons';
import { APP_CONFIG } from '../config';

interface FormData {
  name: string;
  email: string;
  company: string;
  phone: string;
  message: string;
}

interface Errors {
  name?: string;
  email?: string;
  message?: string;
}

type SubmitStatus = 'success' | 'error' | null;

export default function ContactPage(): React.ReactElement {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    company: '',
    phone: '',
    message: ''
  });

  const [errors, setErrors] = useState<Errors>({});
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [submitStatus, setSubmitStatus] = useState<SubmitStatus>(null);

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name as keyof Errors]) {
      setErrors(prev => ({ ...prev, [name as keyof Errors]: '' }));
    }
  };

  const validateForm = (): boolean => {
    const newErrors: Errors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    if (!formData.message.trim()) newErrors.message = 'Message is required';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const response: AxiosResponse<{ success: boolean }> = await axios.post(`${APP_CONFIG.API_BASE_URL}/contact`, formData);
      if (response.data.success) {
        setSubmitStatus('success');
        setFormData({
          name: '',
          email: '',
          company: '',
          phone: '',
          message: ''
        });
      } else {
        setSubmitStatus('error');
      }
    } catch (error: unknown) {
      const axiosError = error as AxiosError;
      console.error('Contact form submission error:', axiosError);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const renderContactForm = (): React.ReactElement => (
    <section className="contact-form-section">
      <h2 className="section-title">Send Us a Message</h2>
      
      {submitStatus === 'success' && (
        <div className="alert alert-success">
          <FontAwesomeIcon icon={faCheckCircle} /> Thank you for your message! We will get back to you soon.
        </div>
      )}

      {submitStatus === 'error' && (
        <div className="alert alert-error">
          <FontAwesomeIcon icon={faExclamationCircle} /> There was an error submitting your message. Please try again.
        </div>
      )}

      <form onSubmit={handleSubmit} className="contact-form">
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
          {errors.name && <span className="error-message">{errors.name}</span>}
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
          {errors.email && <span className="error-message">{errors.email}</span>}
        </div>

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

        <div className="form-group">
          <label htmlFor="message">Message *</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            className={errors.message ? 'error' : ''}
            placeholder="Your message"
            rows={5}
          />
          {errors.message && <span className="error-message">{errors.message}</span>}
        </div>

        <button
          type="submit"
          className="btn btn-primary"
          disabled={isSubmitting}
        >
          {isSubmitting ? 'Sending...' : (
            <>
              <FontAwesomeIcon icon={faPaperPlane} /> Send Message
            </>
          )}
        </button>
      </form>
    </section>
  );

  const renderEmailLink = (): React.ReactElement => (
    <section className="contact-form-section">
      <h2 className="section-title">Get In Touch</h2>
      <div className="email-link-container">
        <p className="email-link-intro">
          We'd love to hear from you. Please send us an email with your inquiry.
        </p>
        <a 
          href={`mailto:${APP_CONFIG.CONTACT_EMAIL}`}
          className="btn btn-primary btn-large"
        >
          <FontAwesomeIcon icon={faEnvelope} /> Email Us at {APP_CONFIG.CONTACT_EMAIL}
        </a>
        <p className="email-link-note">
          Click the button above to open your email client, or copy the address and send us a message manually.
        </p>
      </div>
    </section>
  );

  return (
    <div className="contact-page">
      {/* Hero Section */}
      <section className="page-hero">
        <div className="hero-overlay">
          <h1 style={{ color: 'white' }}>Contact MyAMR</h1>
          <p style={{ color: 'white', fontSize: '1.2rem' }}>
            Get in touch with us for more information
          </p>
        </div>
      </section>

      <div className="contact-container">
        {/* Contact Information */}
        <section className="contact-info">
          <h2 className="section-title">Contact Information</h2>
          
          <div className="info-card">
            <div className="info-icon">
              <FontAwesomeIcon icon={faMapMarkerAlt} size="2x" />
            </div>
            <div className="info-content">
              <h3>Address</h3>
              <p>{APP_CONFIG.COMPANY_NAME}</p>
              <p>{APP_CONFIG.COMPANY_ADDRESS}</p>
            </div>
          </div>

          <div className="info-card">
            <div className="info-icon">
              <FontAwesomeIcon icon={faPhone} size="2x" />
            </div>
            <div className="info-content">
              <h3>Phone</h3>
              <p>{APP_CONFIG.COMPANY_PHONE}</p>
            </div>
          </div>

          <div className="info-card">
            <div className="info-icon">
              <FontAwesomeIcon icon={faEnvelope} size="2x" />
            </div>
            <div className="info-content">
              <h3>Email</h3>
              <p>{APP_CONFIG.COMPANY_EMAIL}</p>
            </div>
          </div>

          <div className="info-card">
            <div className="info-icon">
              <FontAwesomeIcon icon={faClock} size="2x" />
            </div>
            <div className="info-content">
              <h3>Business Hours</h3>
              <p>{APP_CONFIG.BUSINESS_HOURS.weekdays}</p>
              <p>{APP_CONFIG.BUSINESS_HOURS.weekends}</p>
            </div>
          </div>
        </section>

        {/* Conditional rendering based on feature toggle */}
        {APP_CONFIG.CONTACT_FORM_ENABLED ? renderContactForm() : renderEmailLink()}
      </div>

      {/* Map Section */}
      <section className="map-section">
        <div className="container">
          <h2 className="section-title">Our Location</h2>
          <div className="map-placeholder">
            <p>Map placeholder - MyAMR headquarters location</p>
          </div>
        </div>
      </section>
    </div>
  );
}
