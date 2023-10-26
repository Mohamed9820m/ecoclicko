import React, { useState, useEffect } from 'react';
import './Testimonials.css';
import { useTranslation } from "react-i18next";


const TestimonialSection = () => {
  const [t, i18n ] = useTranslation();

  const testimonialData = [
    {
      text:t('Isabelle'),
            name: 'Isabelle',
      age: '10 ans',
      thumbSrc: 'https://kidcitystores.com/cdn/shop/files/colle2.jpg?v=1668766069&width=535',
    },
    {
      text:t('Kais'),
      name: 'Kais',
      age: '9 ans',
      thumbSrc: 'https://img.freepik.com/premium-photo/child-kid-tshirt-template-with-yellow-green-red-orange-grey-tshirt-design-with-white-background_873925-125952.jpg',
    }
    ,
    {
      text:t('Soulayma'),
            name: 'Soulayma',
      age: '7 ans',
      thumbSrc: 'https://img.freepik.com/premium-photo/child-kid-tshirt-template-with-yellow-green-red-orange-grey-tshirt-design-with-white-background_873925-125952.jpg',
    }
    ,
    {
      text:t('Firas'),
            name: 'Firas',
      age: '7 ans',
      thumbSrc: 'https://img.freepik.com/premium-photo/child-kid-tshirt-template-with-yellow-green-red-orange-grey-tshirt-design-with-white-background_873925-125952.jpg',
    }
    ,
    {
      text:t('Paul'),
            name: 'Paul',
      age: '8 ans',
      thumbSrc: 'https://img.freepik.com/premium-photo/child-kid-tshirt-template-with-yellow-green-red-orange-grey-tshirt-design-with-white-background_873925-125952.jpg',
    },
    
    {
      text:t('Ayoub'),
            name: 'Ayoub',
      age: '12 ans',
      thumbSrc: 'https://img.freepik.com/premium-photo/child-kid-tshirt-template-with-yellow-green-red-orange-grey-tshirt-design-with-white-background_873925-125952.jpg',
    },
  ];

  const [currentTestimonialIndex, setCurrentTestimonialIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonialIndex((prevIndex) =>
        (prevIndex + 1) % testimonialData.length
      );
    }, 5000); // Switch testimonials every 5 seconds

    return () => clearInterval(interval);
  }, [testimonialData.length]);

  const currentTestimonial = testimonialData[currentTestimonialIndex];

  return (
    <section className="testimonial-section">
      <div className="large-container">
        

        <div className="testimonial-block">
          <div className="inner-box">
            <div className="text fs-4">{currentTestimonial.text}</div>
            <div className="info-box">
              <div className="thumb">
                <img src={currentTestimonial.thumbSrc} alt="" />
              </div>
              <h4 className="name">{currentTestimonial.name}</h4>
              <span className="age">{currentTestimonial.age}</span>
            </div>
          </div>
        </div>

        <div className="thumb-layer paroller">
          <figure className="image">
            <img
              src="http://t.commonsupport.com/adro/images/resource/user-thumbs.png"
              alt=""
            />
          </figure>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
