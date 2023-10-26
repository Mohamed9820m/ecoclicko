import React from 'react'
import Video from '../../constants/Video'
import './About.css'
import { Container, Row, Col, Card } from 'react-bootstrap';
import * as images from '../../assets/index'
import NewsLetter from '../../constants/NewsLetter';
import { useTranslation } from 'react-i18next';

const AboutScreen = () => {
  const [t, i18n ] = useTranslation();
  return (
    <>
    <Video />
    
    {/* Mission Section */}

  {/* Mission Section */}
  <Container>
        <div className="row align-items-center justify-content-around">
          <div className="col-md-5 col-lg-6 mb-3 mb-md-0 p-4 image-none" data-aos="fade-righ" data-aos-duration="3000">
            {/* Verify the image path and ensure it exists */}
            <img src={images.MissionIMG} alt="Image" className="rounded image-none" />
          </div>
          <div className="col-md-6 col-xl-6 about-sections" data-aos="fade-left" data-aos-duration="3000">
            <div className="row justify-content-center">
              <div className="col-xl-12 col-lg-11 p-1">
                <div className="my-3">
                  <span className="h1 text-uppercase">{t('about_mission_title')}</span>
                </div>
                <p className="fs-4">{t('about_mission_paragraph')}</p>
              </div>
            </div>
          </div>
        </div>
      </Container>



    <Container>
      <div className="row align-items-center justify-content-around">
      <div className="col-md-6 col-xl-6 about-sections" data-aos="fade-right" data-aos-duration="3000">
          <div className="row justify-content-center">
            <div className="col-xl-12 col-lg-11 p-1">
              <div className="my-3">
               
                <span className="h1 text-uppercase">{t('about_vision_title')}</span>
              </div>
              <p className="fs-4">{t('about_vision_paragraph')}</p>
            
            </div>
            
          </div>
        </div>
      <div className="col-md-5 col-lg-6 mb-3 mb-md-0 p-4 image-none" data-aos="fade-left" data-aos-duration="3000">
         
           
            
                <img src={images.MissionIMG} alt="Image" className="rounded image-none"/>
          
        
        
        </div>
        


      </div>
    </Container>


    
  <Container>
      <div className="row align-items-center justify-content-around">
      <div className="col-md-5 col-lg-6 mb-3 mb-md-0 p-4 image-none" data-aos="fade-right" data-aos-duration="3000">
         
           
            
                <img src={images.MissionIMG} alt="Image" className="rounded image-none "/>
          
        
        
        </div>
        <div className="col-md-6 col-xl-6 about-sections" data-aos="fade-left" data-aos-duration="3000">
          <div className="row justify-content-center">
            <div className="col-xl-12 col-lg-11 p-1">
              <div className="my-3">
               
                <span className="h1 text-uppercase">{t('about_vision_title')}</span>
              </div>
              <p className="fs-4">{t('about_values_paragraph')}</p>
            
            </div>
            
          </div>
        </div>


      </div>
    </Container>


    <main className='py-5 mx-4'>
       
      
    <h1 className="text-body-emphasis text-center">{t('whoiam_title')}</h1>
    <p className="fs-6 col-md-8 text-center">{t('whoiam')}
</p>



<h3 className="text-body-emphasis text-center">{t('whatioffer_title')}</h3>
    <p className="fs-6 col-md-8 text-center">{t('whatioffer')}</p>
    
  </main>



  <div className="container my-5">
  <div className="position-relative p-5 text-center text-muted bg-light border border-dashed  rounded-4 box-with-shadow">
    <h1 className="text-body-emphasis py-5">“{t('about_quote')}”</h1>
    <p className="col-lg-6 mx-auto mb-4">
    - Diane Ackerman    </p>
  </div>
</div>

<NewsLetter />
    </>
  )
}

export default AboutScreen