import React, {useRef} from "react";
//import BubblyButton from "../../constants/BubblyButton";
import "bootstrap";
import emailjs from '@emailjs/browser';

const PartnerWithUs=()=>{

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
        emailjs
          .sendForm(
            process.env.REACT_APP_SERVICE_ID,
            process.env.REACT_APP_TEMPLATE_ID,
            form.current,
            process.env.REACT_APP_PUBLIC_KEY
          )
          .then(
            (result) => {
              alert('message sent successfully...');
              console.log("Submit results ==> ",result);
              window.location.reload()

            },
            (error) => {
              alert('try again !!!')
              console.log("Submit results error ==> ",error.text);
            }
          );
      };

    return(
        <>
        <div className="partnerWithUsMain">
            <h2 className="partnerWithUsMainTitle">Partner With Us</h2>
            <h3 className="partnerWithUsSubtitle">We are delighted to collaborate with our partners</h3>
            <div className="partnerWithUsForm">
                <form ref={form} onSubmit={sendEmail}>
                    <div className="partnerWithUsFirstTowDivs">
                    <input className="partnerWithUseachInput" type="text" placeholder="Full Name" name="User_Full_Name" required></input>
                    <input className="partnerWithUseachInput" type="text" placeholder="Your Email" name="User_E-mail_Adress" required></input>
                    </div>
                    <div className="partnerWithUsSecondTowDivs">
                    <input className="partnerWithUseachInput" type="text" placeholder="Organization" name="Organization" required></input>
                    <input className="partnerWithUseachInput" type="text" placeholder="Interseted Role"></input>
                    </div>
                   
                        <select className="partnerWithUsOptions" placeholder="Choose your Role!" name="Role" required>
                        <option className="partnerWithUsEachOption">Ambassador</option>
                        <option className="partnerWithUsEachOption">Volunteer</option>
                        <option className="partnerWithUsEachOption">Partnership</option>
                        </select>
                
                    <textarea className="partnerWithUsMessageInput" name="User_Message" required>Message</textarea>
                    {/* <button className="partnerWithUsSubmit">Submit</button> */}
                    {/* <div className="partnerWithUsSubmit"><BubblyButton text="Submit" /></div> */}
                    <div className="partnerWithUsSubmit" >
                        <button type="submit" value="submit" class="btn btn-success" ref={form} onSubmit={sendEmail}>Submit</button>
                    </div>
                </form>
            </div>
        </div>
        </>
    )
}

export default PartnerWithUs;