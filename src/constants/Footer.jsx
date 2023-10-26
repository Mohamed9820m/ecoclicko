import React, { useState, useEffect } from "react";
import logo from "../assets/Logo.png";
import { SiLinktree } from 'react-icons/si';

const Footer = () => {
  const [showScrollButton, setShowScrollButton] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 100) {
      setShowScrollButton(true);
    } else {
      setShowScrollButton(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <div className="container">
        <footer className="py-3 my-4">
          <div className="d-flex justify-content-center">
            <img src={logo} width={130} height={50} alt="EcoCicko-Logo" />
          </div>
          <ul className="nav justify-content-center mb-3">
            <li className="nav-item">
              <a href="#" className="nav-link px-2 text-body-secondary">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link px-2 text-body-secondary">
                About
              </a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link px-2 text-body-secondary">
                Services
              </a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link px-2 text-body-secondary">
                Units
              </a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link px-2 text-body-secondary">
                Partners
              </a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link px-2 text-body-secondary">
                EcoBlog
              </a>
            </li>
          </ul>
          <div className="justify-content-center d-flex py-4">
            <a href="https://linktr.ee/ECOclicko_HUB" target="_blank" className="text-dark"><SiLinktree /> Follow Us Online</a>
          </div>
          <p className="text-center text-body-secondary">
            © 2023 EcoClicko. All Rights Reserved.
          </p>
          <div className="text-center">
            {showScrollButton && (
              <button className="btn-scrollTop btn-sm" onClick={scrollToTop}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="25"
                  height="25"
                  fill="#fa4f07"
                  className="bi bi-arrow-up-square-fill"
                  viewBox="0 0 16 16"
                >
                  <path d="M2 16a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2zm6.5-4.5V5.707l2.146 2.147a.5.5 0 0 0 .708-.708l-3-3a.5.5 0 0 0-.708 0l-3 3a.5.5 0 1 0 .708.708L7.5 5.707V11.5a.5.5 0 0 0 1 0z" />
                </svg>
              </button>
            )}
          </div>
        </footer>
      </div>
    </>
  );
};

export default Footer;
