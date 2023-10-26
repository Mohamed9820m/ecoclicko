import React from "react";
import Slider from "react-slick";
import * as images from "../../assets/index";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ContactForm from "../../constants/ContactForm";
import PartnerContact from "../../pages/PartnerContact";
import { useTranslation } from "react-i18next";

const PartnershipScreen = () => {
  const [t, i18n ] = useTranslation();
  const partnerLogos = [
    images.partnerOne,
    images.partnerTwo,
    images.partnerThree,
    images.partnerFour,
    images.partnerFive,
    images.partnerSix,
    images.partnerSeven,
  ];

  const sliderSettings = {
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    speed: 1000,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  const logoStyles = {
    border: "1px solid #E6E6E6",
    width: "250px",
    height: "150px",
  };

  return (
    <>
      <header className="masthead">
        <div className="container px-5">
          <div className="row gx-5 align-items-center">
            <div className="col-lg-6" data-aos="fade-right">
              <img src={images.partnershipIMG} alt="" className="rounded-4" />
            </div>
            <div className="col-lg-6" data-aos="fade-left">
              <div className="mb-5 mb-lg-0 text-center text-lg-start">
                <h1 className="display-4 lh-1 mb-3 fw-bold">
                  {t('partnership_titleP1')}{" "}
                  <span className="orange-span">{t('partnership_titleP2')}</span> for
                  {t('partnership_titleP3')}
                </h1>
                <p className="lead fw-normal text-muted fs-6">
                 {t('partnership_desc')}
                </p>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Partners Section */}
      {/* <section className="partners-section">
        <div className="container px-5 py-5">
          <h1 className="display-4 text-center fw-bold">{t('OP')}</h1>
          <p className="lead text-center text-muted fs-6">
          {t('OP_para')}
          </p>

          <div className="partner-slider py-4">
            <Slider {...sliderSettings}>
              {partnerLogos.map((logo, index) => (
                <div key={index} className="partner-logo">
                  <div className="col mx-4">
                    <img
                      src={logo}
                      alt={`Partner Logo ${index}`}
                      style={logoStyles}
                    />
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </section> */}

    {/*  <PartnerContact /> */}
    </>
  );
};

export default PartnershipScreen;
