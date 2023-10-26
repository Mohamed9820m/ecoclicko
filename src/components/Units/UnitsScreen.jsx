import React from "react";
import * as images from "../../assets/index";
import NewsLetter from "../../constants/NewsLetter";
import { useTranslation } from "react-i18next";

const UnitsScreen = () => {
  const [t, i18n ] = useTranslation();
  return (
    <>
      <div class="container px-4 py-5" id="featured-3">
        <h2 className="pb-2 text-center display-5 fw-semibold">
         {t('units_titleP1')} <br />
          <span className="orange-span">{t('units_titleP2')}</span><br />
          {t('units_titleP3')}
        </h2>
        <div class="row g-4 py-5 row-cols-1 row-cols-lg-4">
          <div class="feature col" data-aos="zoom-out-up">
            <div className="feature-icon d-flex align-items-center justify-content-center mb-3 mx-auto">
              <div className="circle-shadow">
                <img
                  src={images.unitsIcon1}
                  className=""
                  width={100}
                  height={100}
                  alt=""
                />
              </div>
            </div>
            <h3 class="fs-5 text-body-emphasis text-center fw-bold">
            {t('unitOne_title')}
            </h3>
            <p className="text-center">
            {t('unitOne_para')}
            </p>
          </div>
          <div class="feature col" data-aos="zoom-out-up">
            <div class="feature-icon d-flex align-items-center justify-content-center mb-3 mx-auto">
              <img
                src={images.unitsIcon4}
                className=""
                width={100}
                height={100}
                alt=""
              />
            </div>
            <h3 class="fs-5 text-body-emphasis text-center fw-bold">
            {t('unitTwo_title')}
            </h3>
            <p className="text-center">
            {t('unitTwo_para')} </p>
          </div>
          <div class="feature col" data-aos="zoom-out-up">
            <div class="feature-icon d-flex align-items-center justify-content-center mb-3 mx-auto">
              <img
                src={images.unitsIcon3}
                className=""
                width={100}
                height={100}
                alt=""
              />
            </div>
            <h3 class="fs-5 text-body-emphasis text-center fw-bold">
            {t('unitThree_title')}
            </h3>
            <p className="text-center">
             {t('unitThree_para')}
             </p>
          </div>
          <div class="feature col" data-aos="zoom-out-up">
            <div class="feature-icon d-flex align-items-center justify-content-center mb-3 mx-auto">
              <img
                src={images.unitsIcon5}
                className=""
                width={100}
                height={100}
                alt=""
              />
            </div>
            <h3 class="fs-5 text-body-emphasis text-center fw-bold">
            {t('unitFour_title')}
            </h3>
            <p className="text-center">
             {t('unitFour_para')} </p>
          </div>
        </div>
      </div>

    {/*   <div class="container px-4 py-5" id="featured-3">
        <h2 className="pb-2 text-center display-5 fw-semibold">
          Exploring Our Sustainability Units
        </h2>
        <div class="row g-4 py-5 row-cols-1 row-cols-lg-2">
          <div class="feature col" data-aos="zoom-out-up">
            <h3 class="fs-4 orange-span text-center fw-bold">Water Management</h3>
            <p className="text-center px-5">
              Kids will discover how human activities impact the Earth's climate
              and what they can do to reduce their carbon footprint.
            </p>
          </div>
          <div class="feature col" data-aos="zoom-out-up">
            <h3 class="fs-4 orange-span text-center fw-bold">
            Energy Efficiency
            </h3>
            <p className="text-center px-5">
              This unit teaches kids about sustainable architectural practices,
              including green roofs, solar power, and eco-friendly materials.
            </p>
          </div>
          <div class="feature col" data-aos="zoom-out-up">
            <h3 class="fs-4 orange-span text-center fw-bold">
              Circular Economy
            </h3>
            <p className="text-center px-5">
              Children will learn to think critically about waste and how to be
              responsible consumers by reducing, reusing, and recycling.
            </p>
          </div>
          <div class="feature col" data-aos="zoom-out-up">
            <h3 class="fs-4  text-center fw-bold orange-span">
              Health and Wellbeing
            </h3>
            <p className="text-center px-5">
              Understanding the link between nature and well-being is the focus
              here. Kids will explore the benefits of spending time in nature
              and how it contributes to a healthier lifestyle.
            </p>
          </div>
        </div>
      </div> */}

      <NewsLetter />
    </>
  );
};

export default UnitsScreen;
