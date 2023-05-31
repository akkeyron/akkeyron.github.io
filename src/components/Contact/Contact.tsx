import React, { useRef, FC } from "react";
import './Contact.css'
import { GrMail, GrLinkedin } from 'react-icons/gr'
// get all social icons
//TODO: put data inside google sheets

const Contact:FC = () => {
  const form = useRef<HTMLFormElement>(null);

  const sendData = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(form.current!);
    const data = {
      name: formData.get('name'),
      email: formData.get('email'),
      message: formData.get('message'),
    }
    console.log(data);
  }


  return (
    <section id="contact">
      <h2><span className='section-title'>Contact Me</span></h2>

      <div className="contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <div className="contact__option-icon"><GrMail /></div>
            <h5>loqmanhakim74@gmail.com</h5>
            <a href="mailto:loqmanhakim74@gmail.com" target="_blank" rel="noreferrer">Send a message</a>
          </article>
          <article className="contact__option">
            <div className="contact__option-icon"><GrLinkedin /></div>
            <h5>Loqman Al Hakim Aripin</h5>
            <a href="https://www.linkedin.com/in/loqman-al-hakim-aripin/" target="_blank" rel="noreferrer">Go to Profile</a>
          </article>

        </div>

        {/* <form ref={form} onSubmit={sendData}>
          <label>Name</label>
          <input type="text" name="name" placeholder="John Doe" required />

          <label>Email</label>
          <input type="email" name="email" placeholder="johndoe@gmail.com" required />

          <label>Message</label>
          <textarea name="message" placeholder="Your Message" required></textarea>

          <button type="submit" className="btn send-message">Send Message</button>
        </form> */}
      </div>

    </section>
  );
}

export default Contact