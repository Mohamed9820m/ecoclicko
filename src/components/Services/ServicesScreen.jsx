import React from "react";
import "./Services.css";
import * as images from "../../assets/index";
import video from "../../assets/images/demo.mp4";
import NewsLetter from "../../constants/NewsLetter";
import ContactUsPage from "../../pages/ContactUsPage";
import { useTranslation } from "react-i18next";


const ServicesScreen = () => {

  const [t, i18n ] = useTranslation();

  return (
    <>
      <header className="masthead">
        <div className="container px-5">
          <div className="row gx-5 align-items-center">
            <div className="col-lg-6" data-aos="fade-right">
              <div className="mb-5 mb-lg-0 text-center text-lg-start">
                <h1 className="display-3 lh-1 mb-3 fw-bold">
                  {t('service_titleP1')}{" "}
                  <span className="orange-span">{t('service_titleP2')} </span>
                   {t('service_titleP3')}
                </h1>
                <p className="lead fw-normal text-muted mb-5 fs-6">
                 {t('service_para')}
                </p>
                <div className="d-flex flex-column flex-lg-row align-items-center">
                  <a className="me-lg-3 mb-4 mb-lg-0" href="#!">
                    <img
                      className="app-badge qr"
                      src={images.QrCode}
                      alt="QR_Code"
                    />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-6" data-aos="fade-left">
              <div className="masthead-device-mockup">
                <div className="device-wrapper">
                  <div
                    className="device"
                    data-device="iPhoneX"
                    data-orientation="portrait"
                    data-color="black"
                  >
                    <div className="screen bg-black">
                      <video muted autoPlay loop className="videocss">
                        <source src={video} type="video/mp4" />
                      </video>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="container px-4 py-5" id="custom-cards">
        <h2 className="pb-2 text-center display-5 fw-semibold">
          {t('service_sectionTwo_titleP1')}{" "}
          <span className="orange-span">
          {t('service_sectionTwo_titleP2')}
          </span>{" "}
          {t('service_sectionTwo_titleP3')}
        </h2>

        <div className="row row-cols-1 row-cols-lg-3 align-items-stretch g-4 py-5">
          <div className="col" data-aos="zoom-in-up" data-aos-animation="3000">
            <div className="card card-cover h-100 overflow-hidden rounded-4 shadow-lg">
              <div className="d-flex flex-column h-100 p-5 pb-3 text-white text-shadow-1">
                <img src="" alt="" />
                <h3 className="pt-5 mt-5 mb-4 display-6 lh-1 fw-bold text-center text-dark">
                  {t('serviceOne_title')}
                </h3>
                <p className="text-dark">
                  {t('serviceOne_para')}
                </p>
                <ul className="d-flex list-unstyled mt-auto">
                  <li className="mx-auto bg-light px-2 rounded">
                    <img
                      src={images.Logo}
                      alt="Ecoclicko_Logo"
                      width="50"
                      height="50"
                    />
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="col" data-aos="zoom-in-up" data-aos-animation="3000">
            <div className="card card-cover h-100 overflow-hidden rounded-4 shadow-lg">
              <div className="d-flex flex-column h-100 p-5 pb-3 text-white text-shadow-1">
                <h3 className="pt-5 mt-5 mb-4 display-6 lh-1 fw-bold text-center text-dark">
                  {t('serviceTwo_title')}
                </h3>
                <p className="text-dark">
                 {t('serviceTwo_para')}
                </p>
                <ul className="d-flex list-unstyled mt-auto">
                  <li className="mx-auto bg-light px-2 rounded">
                    <img
                      src={images.Logo}
                      alt="Ecoclicko_Logo"
                      width="50"
                      height="50"
                    />
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="col" data-aos="zoom-in-up" data-aos-animation="3000">
            <div className="card card-cover h-100 overflow-hidden rounded-4 shadow-lg">
              <div className="d-flex flex-column h-100 p-5 pb-3 text-white text-shadow-1">
                <h3 className="pt-5 mt-5 mb-4 display-6 lh-1 fw-bold text-center text-dark">
                 {t('serviceThree_title')}
                </h3>
                <p className="text-dark">
                 {t('serviceThree_para')}
                </p>
                <ul className="d-flex list-unstyled mt-auto">
                  <li className="mx-auto bg-light px-2 rounded">
                    <img
                      src={images.Logo}
                      alt="Ecoclicko_Logo"
                      width="50"
                      height="50"
                    />
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
<ContactUsPage />
      <NewsLetter />
    </>
  );
};

export default ServicesScreen;
