import React from 'react'
import styles from '../styles/page.module.css'; // Adjust path as needed
import { AiOutlineMail } from 'react-icons/ai';
import { BsTelephone } from 'react-icons/bs';


const Contact = () => {
  return (
    <div className='styles.contactSection'>
      <h1 className='styles.contactHeading'>Get In Touch</h1>
      <p> I’d love to connect with you! Feel free to reach out via email or phone.</p>
      <div className='styles.contacInfo'>
      <div className='styles.contactItem'>
      < AiOutlineMail className="styles.icon" />
      <span className='gmail-info'>ikhlaq.ikea@gmail.com</span>
      </div>
      <div className="styles.contactItem">
          <BsTelephone className="styles.icon"/> 
          <span className='mobile-info'>0321-8948714</span>
        </div>
      </div>
    </div>
  )
}

export default Contact