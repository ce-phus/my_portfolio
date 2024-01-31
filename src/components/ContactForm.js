// components/ContactForm.js
import React, { useState } from 'react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    contact:'',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Send an email using a serverless function
    const response = await fetch('/api/send-email', {
      method: 'POST',
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      alert('Message sent successfully!');
    } else {
      alert('Message sending failed. Please try again later.');
    }
  };

  return (
    <form onSubmit={handleSubmit} className=''>
      <div className="mb-6  ">
        <label className="block dark:text-light/75 text-gray-700 text-sm font-bold mb-2" htmlFor="name">
          Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className="shadow appearance-none border rounded w-[600px] py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          required
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 dark:text-light/75 text-sm font-bold mb-2" htmlFor="email">
          Mobile number
        </label>
        <input
          type="contact"
          id="contact"
          name="contact"
          value={formData.contact} 
          onChange={handleChange}
          className="shadow appearance-none border rounded w-[600px] py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          required
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 dark:text-light/75 text-sm font-bold mb-2" htmlFor="email">
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email} 
          onChange={handleChange}
          className="shadow appearance-none border rounded w-[600px] py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          required
        />
      </div>
      <div className="mb-6">
        <label className="block text-gray-700 dark:text-light/75 text-sm font-bold mb-2" htmlFor="message">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          className="shadow appearance-none border rounded w-[600px] py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline h-32"
          required
        />
      </div>
      <div className="flex items-center justify-center">
        <button
          type="submit"
          className="bg-dark  hover:bg-light hover:text-dark dark:bg-primaryDark dark:hover:bg-light dark:hover:text-accent text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Send
        </button>
      </div>
    </form>
  );
};

export default ContactForm;
