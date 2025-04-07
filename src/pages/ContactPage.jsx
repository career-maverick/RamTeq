import React, { useState } from 'react';
import './ContactPage.css'; // Assuming you will create ContactPage.css

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // null, 'success', 'error', 'rateLimit'

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    // --- Google Apps Script Integration ---
    // !!! IMPORTANT: Replace this with your actual Google Apps Script Web App URL !!!
    const scriptURL = 'https://script.google.com/macros/s/AKfycbzMlPuSZmTjP09sF6vXsmIguxl2Epn8U-9QgHVfQtgQFeZ3bsmlGEWbYAXbKCYTBdGa/exec'; 

    try {
      const response = await fetch(scriptURL, {
        method: 'POST',
        mode: 'cors', // Important for cross-origin requests
        cache: 'no-cache',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
        // Add a redirect:'follow' if your Apps Script might redirect (though unlikely for doPost)
      });

      // Check if the fetch itself failed (network error, etc.)
      if (!response.ok) {
         // Try to get error details from the response body if possible
         let errorBody = 'Could not retrieve error details.';
         try {
           errorBody = await response.text(); // Or response.json() if the error response is JSON
         } catch {}
        throw new Error(`Network response was not ok: ${response.statusText}. Body: ${errorBody}`);
      }

      const result = await response.json(); // Apps Script returns JSON
      console.log('Apps Script Response:', result);

      if (result.result === 'success') {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', message: '' }); // Clear form
      } else if (result.message && result.message.includes('Rate limit exceeded')) {
        setSubmitStatus('rateLimit');
      } 
       else {
        // Handle specific errors from Apps script if needed, otherwise generic error
        console.error('Apps Script Error:', result.message || 'Unknown error from script');
        setSubmitStatus('error');
      }

    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
    // --------------------------------------------------
  };

  return (
    <div className="contact-container">
      <h1>Contact Us</h1>
      <p>Have questions or want to get in touch? Fill out the form below.</p>

      {submitStatus === 'success' && (
        <p className="success-message">Thank you for your message! We'll get back to you soon.</p>
      )}
      {submitStatus === 'error' && (
        <p className="error-message">Something went wrong submitting your message. Please try again later or contact us directly.</p>
      )}
      {submitStatus === 'rateLimit' && (
        <p className="error-message">You seem to be sending messages too quickly. Please wait a moment and try again.</p>
      )}

      <form onSubmit={handleSubmit} className="contact-form">
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            disabled={isSubmitting}
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            disabled={isSubmitting}
          />
        </div>
        <div className="form-group">
          <label htmlFor="message">Message:</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            rows="5"
            disabled={isSubmitting}
          ></textarea>
        </div>
        <button type="submit" disabled={isSubmitting}>
          {isSubmitting ? 'Submitting...' : 'Send Message'}
        </button>
      </form>
    </div>
  );
};

export default ContactPage; 