import React, { useRef } from "react";
import "./ContactUS.css";
import "bootstrap";
import emailjs from '@emailjs/browser';

const ContactUS = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm(
      'service_x7vu2ta',
      'template_rxw8h8y',
      form.current,
      '1PX2P6dWBFkvJm3qZ'
      ).then(
        (result) => {
          alert('Message sent successfully...');
          console.log(result.text);
          window.location.reload();
        },
        (error) => {
          alert('Try again!!!');
          console.log(error.text);
        }
      );
  };

  return (
    <div className="container-contact">
      <div className="map">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1892.1999100222993!2d10.176658560420536!3d36.86309597781899!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12e2cb4ba6d0cacb%3A0xe66e992b87e844f8!2sCentre%20ville%20tunis!5e0!3m2!1sfr!2stn!4v1697921143420!5m2!1sfr!2stn"
          title="Google Map"
          width="100%"
          height="100%"
          frameBorder="0"
          style={{ border: "0" }}
          allowFullScreen
        ></iframe>
      </div>
      <div className="contact-form">
        <h2 className="title">STAY IN TOUCH</h2>
        <form ref={form} onSubmit={sendEmail}>
          <div className="input-container">
            <input
              className="inputFields"
              type="text"
              placeholder="Full Name"
              name="User_Full_Name"
              required
            />
          </div>
          <div className="input-container">
            <input
              className="inputFields"
              type="text"
              placeholder="Email Address"
              name="User_E-mail_Adress"
              required
            />
          </div>
          <div className="input-container">
            <input
              className="inputFields"
              type="text"
              placeholder="Address"
              name="User_Adress"
              required
            />
          </div>
          <div className="input-container">
            <select
              className="inputFields"
              id="services"
              name="services"
              required
            >
              <option value="">Choose a Service</option>
              <option value="Service 1">Service 1</option>
              <option value="Service 2">Service 2</option>
              <option value="Service 3">Service 3</option>
            </select>
          </div>
          <div className="input-container">
            <textarea
              className="textField"
              placeholder="Your message..."
              name="User_Message"
              required
            ></textarea>
          </div>
          <button type="submit" className="mainBtn">
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactUS;
