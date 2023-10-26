import React from "react";
import BubblyButton from "./BubblyButton";


class ContactForm extends React.Component {
  render() {
    return (
        <>       
         <div className="partner-container">
      <div className="container mt-5 py-5">
      <h2 className="pb-2 text-center display-5 fw-semibold">
         Partner With Us
        </h2>
        <p className="text-center pb-3">We are delighted to collaborate with our partners</p>
        <form>
          <div className="row">
            {/* Field 1 (Grid) */}
            <div className="col-md-6">
              <div className="form-group">
                <input type="text" className="inputCss" id="name" required />
                <label htmlFor="name" className="form-label">Name</label>
              </div>
            </div>

            {/* Field 2 (Grid) */}
            <div className="col-md-6">
              <div className="form-group">
                <input type="email" className="inputCss" id="email" required />
                <label htmlFor="email" className="form-label">Email</label>
              </div>
            </div>
          </div>

          <div className="row">
            {/* Field 3 (Grid) */}
            <div className="col-md-6">
              <div className="form-group">
                <input type="text" className="inputCss" id="subject" required />
                <label htmlFor="subject" className="form-label">Subject</label>
              </div>
            </div>

            {/* Field 4 (Grid) */}
           {/*  <div className="col-md-6">
              <div className="form-group">
                <textarea className="inputCss" id="message" rows="3" required></textarea>
                <label htmlFor="message" className="form-label">Message</label>
              </div>
            </div> */}
            <div className="col-md-6">
              <div className="form-group">
                <input type="text" className="inputCss" id="subject" required />
                <label htmlFor="subject" className="form-label">Interested Role</label>
              </div>
            </div>
          </div>

          {/* Field 5 (Centered) */}
          <div className="text-center">
          <div class="flex-container py-5">
  <div class="flex-item">Ambassador</div>
  <div class="flex-item">Volunteer</div>
  <div class="flex-item">Partnership</div>
</div>
            <div className="form-group">
         
            <label htmlFor="subject" className="form-label text-center">Message</label>
              <textarea className="inputCss inputCss-msg" id="message" rows="3" required></textarea>
              
            </div>
          </div>

          <div className="text-center py-5">
            <BubblyButton text="Send Message"/>
          </div>
        </form>
      </div>
</div>
      </>

    );
  }
}

export default ContactForm;
