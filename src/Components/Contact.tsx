import React from 'react';
import { AiOutlineMail } from "react-icons/ai";
import { BsTelephone } from "react-icons/bs";
import './Contact.css'; // Import custom CSS

const Contact = () => {
  return (
    <div id="Contact" className="contact-container">
      <div className="contact-grid">
        {/* Left Section */}
        <div className="contact-left">
          <h2 className="contact-heading" data-aos="zoom-in-up">Connect With Me</h2>
          <p className="contact-description" data-aos="zoom-in-up">
            Drop me a line, give me a call, or send me a message by submitting the form.
          </p>
          <div className="contact-info" data-aos="zoom-in-up">
            <AiOutlineMail size={30} />
            <span>ikhlaq.ikea@gmail.com</span>
          </div>
          <div className="contact-info" data-aos="zoom-in-up">
            <BsTelephone size={30} />
            <span>0321-8948714</span>
          </div>
        </div>

        {
