import React from "react";
import '../layout.css'

const Contact: React.FC = () => {
    return (
    <div className='contact-page'>
    <h1>Contact Us</h1>
      <div className="flex-container">
        {/* Sidebar */}
        <aside className="bg-gray-200 p-4 rounded-md">
          <h2 className="text-lg font-semibold mb-3">Business Info</h2>
          <p>Contact us at:</p>
          <p>Email: info@example.com</p>
          <p>Phone: (123) 456-7890</p>
        </aside>
  
        {/* Contact Form */}
        <div className="form-container">
          <h1 className="text-2xl font-semibold mb-4">Contact Form</h1>
          <form>
            <div className="mb-4">
              <label htmlFor="email" className="label">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="input"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="description" className="label">
                Description
              </label>
              <textarea
                id="description"
                name="description"
                rows={4}
                className="textarea"
                required
              />
            </div>
            <button type="button" className="submit-button" disabled>
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
    );
  };

export default Contact;