import React from 'react';
import emailjs from 'emailjs-com'
import './ContactPage.scss'

const ContactPage = () => {

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_xoda1ak', 'template_w1qxnrr', e.target, 'jSPzGqGNbgGEtI74I')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });

      e.target.reset()
  };

  return (
    <div className='contact'>
      <h1 className='contact__header'>Contact Me</h1>
      <form className='contact__form' onSubmit={sendEmail}>
        <div className='contact__name-email'>
          <div className='contact__label-input'>
            <label className='contact__label'>Name</label>
            <input className='contact__input' type='text' placeholder='Your Name' name='name'/>
          </div>
          <div className='contact__label-input'>
            <label className='contact__label'>Email</label>
            <input className='contact__input' type='email' placeholder='Your Email' name='email'/>
          </div>
        </div>
        <div className='contact__subject'>
          <label className='contact__label'>Subject</label>
          <input className='contact__input' type='text' placeholder='Subject' name='subject'/>
        </div>
        <div>
          <label className='contact__label'>Message</label>
          <textarea className='contact__input contact__message' placeholder='Message' name='message'/>        
        </div>
        <button className='contact__button'>Send Your Message</button>
      </form>
    </div>
  );
};

export default ContactPage;
