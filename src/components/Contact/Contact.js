import React, { useRef } from "react";
import './Contact.css'
import { GrMail, GrLinkedin } from 'react-icons/gr'
// get all social icons
//TODO: put data inside google sheets

function Contact() {
  const form = useRef();

  const sendData = (data) => {
    data.preventDefault();

    data.target.reset()

  };
  return (
    <section id="contact" className="relative">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <div className="contact__option-icon"><GrMail /></div>
            <h5>loqmanhakim74@gmail.com</h5>
            <a href="mailto:loqmanhakim74@gmail.com" target="_blank">Send a message</a>
          </article>
          <article className="contact__option">
            <div className="contact__option-icon"><GrLinkedin /></div>
            <h5>Loqman Al Hakim Aripin</h5>
            <a href="https://www.linkedin.com/in/loqman-al-hakim-aripin/" target="_blank">Go to Profile</a>
          </article>

        </div>

        <form ref={form} onSubmit={sendData}>
          <input type="text" name="name" placeholder="Your Name" required />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea name="message" row="7" placeholder="Your Message" required></textarea>
          <button type="submit" className="btn send-message">Send Message</button>
        </form>
      </div>

    </section>
  );
}

export default Contact