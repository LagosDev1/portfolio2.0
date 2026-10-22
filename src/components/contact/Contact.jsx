import React, { useEffect, useRef, useState } from 'react';
import './contact.css';
import { MdOutlineEmail } from 'react-icons/md';
import { FaTwitterSquare } from 'react-icons/fa';
import { BsWhatsapp } from 'react-icons/bs';
import emailjs from 'emailjs-com';

const fadeUp = { 'data-aos': 'fade-up', 'data-aos-easing': 'ease-out-cubic' };

const contactOptions = [
  { icon: MdOutlineEmail, label: 'Email', handle: 'abahanointed@gmail.com', href: 'mailto:abahanointed@gmail.com' },
  { icon: FaTwitterSquare, label: 'Twitter', handle: '@abahanointed', href: 'https://twitter.com/abahanointed' },
  { icon: BsWhatsapp, label: 'Whatsapp', handle: '(+234)8112075793', href: 'https://api.whatsapp.com/send?phone=+2348112075793' },
];

const Contact = () => {
  const form = useRef();
  const [status, setStatus] = useState('idle'); // idle | sending | sent | error

  // Hide the success/error message after a few seconds
  useEffect(() => {
    if (status !== 'sent' && status !== 'error') return;
    const timer = setTimeout(() => setStatus('idle'), 5000);
    return () => clearTimeout(timer);
  }, [status]);

  const sendEmail = (e) => {
    e.preventDefault();
    const formElement = e.target;
    setStatus('sending');

    emailjs.sendForm('service_ez31y4x', 'template_cbva0kw', form.current, '7ukr8B-_yeM9Nu_7g')
      .then(
        () => {
          setStatus('sent');
          formElement.reset();
        },
        (error) => {
          console.error(error.text);
          setStatus('error');
        }
      );
  };

  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          {contactOptions.map(({ icon: Icon, label, handle, href }) => (
            <article key={label} className="contact__option spotlight" {...fadeUp}>
              <Icon className="contact__option-icon" />
              <h4>{label}</h4>
              <h5>{handle}</h5>
              <a href={href} target="_blank" rel="noopener noreferrer">Send a message</a>
            </article>
          ))}
        </div>

        <form ref={form} onSubmit={sendEmail} {...fadeUp}>
          <input type="text" name="name" placeholder="Your Full Name" required />
          <input type="email" name="email" placeholder="Your Email" required />
          <input type="text" name="subject" placeholder="Subject" required />
          <textarea name="message" rows="7" placeholder="Your Message" required></textarea>
          <button type="submit" className="btn btn-primary" disabled={status === 'sending'}>
            {status === 'sending' ? 'Sending…' : 'Send Message'}
          </button>
          <div role="status" aria-live="polite">
            {status === 'sent' && (
              <p className="message-alert message-alert--success">Message sent! I'll get back to you soon.</p>
            )}
            {status === 'error' && (
              <p className="message-alert message-alert--error">Something went wrong. Please try again or email me directly.</p>
            )}
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
