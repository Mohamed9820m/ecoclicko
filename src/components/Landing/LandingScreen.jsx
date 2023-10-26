import React, { useEffect, useState } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import "./Landing.css";
import * as images from "../../assets/index";
import BubblyButton from "../../constants/BubblyButton";
import TestimonialSection from "../../constants/Testimonials";
import NewsLetter from "../../constants/NewsLetter";
import Gallery from "../../constants/Gallery";
import VideoHero from "../../constants/Video";
import ContactForm from "../../constants/ContactForm";
import ContactUsPage from "../../pages/ContactUsPage";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
const LandingScreen = () => {
  const sqImgStyle = {
    height: "3rem",
  };

  const sqBgLinearStyle = {
    background: "#f2fbf7",
  };

  const [t, i18n ] = useTranslation();
  const [count, setCount] = useState(0);
  const [count1, setCount1] = useState(0);
  const [cardContentIndex, setCardContentIndex] = useState(0);
  const [cardContentIndex1, setCardContentIndex1] = useState(1);

  const cardContent = [
    "Did you know that children have the most carbon footprint?",
    "How much waste is produced in construction...? Can we transform it to green materials",
    "What are the impacts of concrete manufacturing and use?",
    "Did you know why you have to build with healthy and sustainable materials... ?",
    "How we build sustainable cities for us?",
    "How to change your behavior ?",
    "How do we adapt construction to the world of tomorrow?",
    "Did you know how to build an “Eco-quartier“ ?",
    "How to reduce carbon emissions?",
  ];

  const fadeInDelay = 3000;
  const cardChangeInterval = 6000;

  useEffect(() => {
    const maxCount = 40;
    let currentCount = 0;

    const intervalId = setInterval(() => {
      currentCount += 1;
      setCount(currentCount);

      if (currentCount >= maxCount) {
        clearInterval(intervalId);
      }
    }, fadeInDelay / maxCount);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  useEffect(() => {
    const maxCount = 62;
    let currentCount = 0;

    const intervalId = setInterval(() => {
      currentCount += 1;
      setCount1(currentCount);

      if (currentCount >= maxCount) {
        clearInterval(intervalId);
      }
    }, fadeInDelay / maxCount);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  useEffect(() => {
    const cardIntervalId = setInterval(() => {
      setCardContentIndex((prevIndex) => (prevIndex + 1) % cardContent.length);
    }, cardChangeInterval);

    return () => {
      clearInterval(cardIntervalId);
    };
  }, [cardContent.length]);

  const getCardContent = () => {
    return cardContent[cardContentIndex];
  };

  useEffect(() => {
    const cardIntervalId = setInterval(() => {
      setCardContentIndex1((prevIndex) => (prevIndex + 1) % cardContent.length);
    }, cardChangeInterval);

    return () => {
      clearInterval(cardIntervalId);
    };
  }, [cardContent.length]);

  const getCardContent1 = () => {
    return cardContent[cardContentIndex1];
  };

  return (
    <>
      <div
        className="main-banner wow fadeIn"
        id="top"
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="row">
                <div className="col-lg-6 align-self-center">
                  <div className="left-content show-up">
                    <div className="row">
                      <div className="col-lg-12" data-aos="fade-right">
                        <h2 className="text-uppercase">
                         {t('Home_HeroOne_Para')}
                        </h2>
                      </div>
                      <div className="col-lg-12">
                        <div className="white-button first-button scroll-to-section">
                          <button className="mainBtn">Learn & Play</button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div
                    className="right-image"
                    
                  >
                    <img src={images.phonepng} alt="Phone-Landing" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mission Section */}

      <Container>
        <div className="row align-items-center justify-content-around">
          <div className="col-md-5 col-lg-6 mb-3 mb-md-0 p-4">
            <img
              src={images.MissionIMG}
              alt="Image"
              className="rounded aos-init aos-animate"
              data-aos="fade-right"
            />
          </div>
          <div className="col-md-6 col-xl-6 p-5" data-aos="fade-left">
            <div className="row justify-content-center">
              <div className="col-xl-12 col-lg-11 p-1">
                <div className="my-3">
                  <span className="text-uppercase h1">{t('Home_mission_title')}</span>
                </div>
                <p className="fs-4">
                 {t('Home_mission')}
                </p>
                <div className="my-5">
                  <Link to="/about">
                  <button className="mainBtn">{t('Home_LearnMore')}</button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>

      {/* Quote Section */}

      <aside className="text-center" style={sqBgLinearStyle}>
        <div className="container px-5 py-5">
          <div className="row gx-5 justify-content-center">
            <div className="col-xl-8" data-aos="fade-up">
              <div className="fs-1 text-dark mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="50"
                  height="50"
                  fill="currentColor"
                  className="bi bi-quote"
                  viewBox="0 0 16 16"
                >
                  <path d="M12 12a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1h-1.388c0-.351.021-.703.062-1.054.062-.372.166-.703.31-.992.145-.29.331-.517.559-.683.227-.186.516-.279.868-.279V3c-.579 0-1.085.124-1.52.372a3.322 3.322 0 0 0-1.085.992 4.92 4.92 0 0 0-.62 1.458A7.712 7.712 0 0 0 9 7.558V11a1 1 0 0 0 1 1h2Zm-6 0a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1H4.612c0-.351.021-.703.062-1.054.062-.372.166-.703.31-.992.145-.29.331-.517.559-.683.227-.186.516-.279.868-.279V3c-.579 0-1.085.124-1.52.372a3.322 3.322 0 0 0-1.085.992 4.92 4.92 0 0 0-.62 1.458A7.712 7.712 0 0 0 3 7.558V11a1 1 0 0 0 1 1h2Z" />
                </svg>
                {t('Home_quote')}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="50"
                  height="50"
                  fill="currentColor"
                  className="bi bi-quote flex-row-reverse"
                  viewBox="0 0 16 16"
                >
                  <path d="M12 12a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1h-1.388c0-.351.021-.703.062-1.054.062-.372.166-.703.31-.992.145-.29.331-.517.559-.683.227-.186.516-.279.868-.279V3c-.579 0-1.085.124-1.52.372a3.322 3.322 0 0 0-1.085.992 4.92 4.92 0 0 0-.62 1.458A7.712 7.712 0 0 0 9 7.558V11a1 1 0 0 0 1 1h2Zm-6 0a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1H4.612c0-.351.021-.703.062-1.054.062-.372.166-.703.31-.992.145-.29.331-.517.559-.683.227-.186.516-.279.868-.279V3c-.579 0-1.085.124-1.52.372a3.322 3.322 0 0 0-1.085.992 4.92 4.92 0 0 0-.62 1.458A7.712 7.712 0 0 0 3 7.558V11a1 1 0 0 0 1 1h2Z" />
                </svg>
              </div>

              <img src={images.Logo} alt="..." style={sqImgStyle} />
            </div>
          </div>
        </div>
      </aside>

      {/* Statistics & Facts */}

      <Container className="d-flex justify-content-center align-items-center py-5 border-bottom">
        <div className="row align-items-md-stretch">
          <h2 className="pb-2 text-center display-5 fw-semibold mt-4">
            {t('Home_Stats_Title')}
          </h2>
          <div className="col-md-6">
            <div
              className="h-100 w-100 p-5 bg-body-tertiary rounded-3 text-center box-with-shadow"
              style={{ height: "300px" }}
            >
              {cardContentIndex === 0 && (
                <div className={`card-text${cardContentIndex1 === 0 ? " fade-in" : ""}`}>
                  <h2 style={{ color: "#fa4f07" }} className="count">
                    {count}%
                  </h2>
                  <p className="fs-5">
                    {" "}
                    of greenhouse gas emissions are related to construction in Tunisia?
                  </p>
                </div>
              )}
              <p className="fs-3">
                {cardContentIndex >= 1 && (
                  <>
                    {getCardContent1()
                      .split("\n")
                      .map((item, key) => {
                        return (
                          <span className="fade-in-span" key={key}>
                            {item}
                            <br />
                          </span>
                        );
                      })}
                  </>
                )}
              </p>
            </div>
          </div>
          <div className="col-md-6">
            <div
              className="h-100 p-5 bg-body-tertiary rounded-3 text-center box-with-shadow"
              style={{ height: "300px" }}
            >
              {cardContentIndex === 0 && (
                <div className={`card-text${cardContentIndex1 === 0 ? " fade-in" : ""}`}>
                  {`Did you know that `}
                  <h2 style={{ color: "#fa4f07" }} className="count">
                    {count1}%
                  </h2>
                  <p className="fs-5">
                    {" "}
                    of young people from 18 to 26 years are not responsible for consumption..
                  </p>
                </div>
              )}
              <p className="fs-3">
                {cardContentIndex > 0 && (
                  <>
                    {getCardContent()
                      .split("\n")
                      .map((item, key) => {
                        return (
                          <span className="fade-in-span" key={key}>
                            {item}
                            <br />
                          </span>
                        );
                      })}
                  </>
                )}
              </p>
            </div>
          </div>
        </div>
      </Container>

   {/*    <Gallery /> */}
      <TestimonialSection />
      <NewsLetter />
      <ContactUsPage />
    </>
  );
};

export default LandingScreen;
