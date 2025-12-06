import React from 'react';
import './contact.css';
import {MdDescription, MdOutlineEmail} from 'react-icons/md';
import {FaTwitterSquare} from 'react-icons/fa';
import { useState } from 'react';
import {BsWhatsapp} from 'react-icons/bs';
import { useRef } from 'react';
import emailjs from 'emailjs-com'
import { driver } from "driver.js";
import "driver.js/dist/driver.css";
import { element, js } from 'three/src/nodes/TSL.js';

const Contact = () => {
  const form = useRef();
  const [messageSent, setMessageSent] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_ez31y4x', 'template_cbva0kw', form.current, '7ukr8B-_yeM9Nu_7g')
      .then((result) => {
          console.log(result.text);
          setMessageSent(true);
      }, (error) => { 
          console.log(error.text);
      });
      e.target.reset();
   };

//   for Driver.js
// const driverObj = driver();
// driverObj.highlight({
//   element: "#contact",
//   popover: {
//     title: "This is a contact section",
//     description: "Send me a message and I'll get back to you as soon as possible.",
//   }
// });

  
  




// Reset the messageSent state after a certain time
  return (
    <section id='contact'>
      <h5 data-aos-easing = "ease-out-cubic" data-aos-duration = "50000">Get In Touch</h5>
      <h2 data-aos-easing = "ease-out-cubic" data-aos-duration = "50000">Contact Me</h2>
      
      <div className="container contact__container">
        <div className="contact__options">
          <article className='contact__option' data-aos = "fade-up" data-aos-easing = "ease-out-cubic" data-aos-duration = "50000">
            <MdOutlineEmail className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>abahanointed@gmail.com</h5>
             <a href="mailto:abahanointed@gmail.com" target='_blank'>Send a message</a>
          </article>

          <article className='contact__option' data-aos = "fade-up" data-aos-easing = "ease-out-cubic" data-aos-duration = "50000">
            <FaTwitterSquare className='contact__option-icon'/>
            <h4>Twitter</h4>
            <h5>@abahanointed</h5>
             <a href="https://twitter.com/abahanointed" target='_blank'>Send a message</a>
          </article>

          <article className='contact__option' data-aos = "fade-up" data-aos-easing = "ease-out-cubic" data-aos-duration = "50000">
            <BsWhatsapp className='contact__option-icon'/>
            <h4>Whatsapp</h4>
            <h5>(+234)8112075793</h5>
             <a href="https://api.whatsapp.com/send?phone=+2348112075793" target='_blank'>Send a message</a>
          </article>
        </div>
        {/* End of contact option */}
        <form ref={form} onSubmit={sendEmail} data-aos = "fade-up" data-aos-easing = "ease-out-cubic" data-aos-duration = "50000">
          <input type="text" name='name' placeholder='Your Full Name' required/>
          <input type="text" name='email' placeholder='Your Email' required/> 
          <input type="text" name='subject' placeholder='Subject' required/> 
          <textarea name="message" id=""  rows="7" placeholder='Your Message' required></textarea>      
          <button type='submit' className='btn btn-primary'  >Send Message</button>
        </form>
        {messageSent && (
            <div className="message-alert">
              Message sent!
          </div>
        )}
      </div>
    </section>
  )
}

export default Contact;