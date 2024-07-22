import React from 'react';
import Swal from 'sweetalert2';

function Contact() {
  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "e7ce20c2-3aaf-49e1-ad61-d66c86187d0d");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    }).then((res) => res.json());

    if (res.success) {
      Swal.fire({
        title: "Success!",
        text: "Message sent successfully!",
        icon: "success"
      });
    }
  }

  return (
    <div className="contact-container" id='contact'>
      <h1 className="contact-heading">CONTACT</h1>
      <form className="contact-box" onSubmit={onSubmit}>
        <div className="name-email">
          <input type="text" placeholder="Your name" className="input-box" name='name' required />
          <input type="email" placeholder="Your email" className="input-box" name='email' required />
        </div>
        <input type="text" placeholder="Subject" className="input-box" name='subject' required />
        <textarea placeholder="Message" className="message-input-box" name='message' required></textarea>
        <button className="message-button" type='submit'>Send Message</button>
      </form>
    </div>
  );
}

export default Contact;
