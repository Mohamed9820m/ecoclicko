import React, { useState, useEffect } from 'react';
import './Testimonials.css';

const FamTestimonials = () => {
  const testimonialData = [
    {
      text:
        "we live in times of lack of knowhow, it's an obstacle in the transition towards sustainability. If children  do not know how to act differently, it is easier to continue as they always have done.",
      name: 'Educator in school',
/*       thumbSrc: 'https://kidcitystores.com/cdn/shop/files/colle2.jpg?v=1668766069&width=535',
 */    },
    {
      text:
        "my children lack STEAM education, already they manage hard math and physics , how about environmental issues ?",
      name: 'Parent'
    }
    ,
    {
      text:
        "I didn't see a collaborative approach for my children,  to gain wisdom, environmental knowledge, values and ethics in everyday life, such as problem solving, critical thinking, reasoning, thinking, communication,  solving ability,despite they are in robot clubs and activities, even me as a parents I don't know environmental issue and sustainable challenges How am I going to move that to my child despite he is engaged in ROBOT club in schools but They neglect such values",
      name: 'Parent'
    }
    ,
    {
      text:
        "How can we prepare our children for ecological crises and how we can develop such skills, and keep truck of that, I think game for sustainability is very important, we already look for the best for children and satisfy their parents",
      name: 'School director'
    }
    ,
    {
      text:
        "I lack of time, ideas and supplies, so I can engage my children to such sustainable education, my children always play fighter games but they are not oriented to such educational sustainable games which make them ignore such values and skills in their life.",
      name: 'Parent'
    },
    
    {
      text:
        "How can I prepare my child for ecological crises and how I can develop such skills, and keep truck of that, my child addicted to games but he is lacking social skills, I put him in a  club, but if I find a game that can add benefit and develop such skills I 'm in",
      name: 'Parent'
    },
    
    {
      text:
        "I always encourage such values in our school, but the fact that they don’t see other children or adults ( their parents) setting an example when it comes to sustainable transition, they will not be encouraged , if the game encourage both parent and children that will be good",
      name: 'School Director'
    }
    ,
    
    {
      text:
        "I myself do not necessarily have the benchmarks/good reflexes and even the time, to educate my child in this direction, even if it is one of my objectives",
      name: 'Parent'
    }
    ,
    
    {
      text:
        "we all want to live in a world where our environment is preserved and respected... but what is missing is to educate them and make them experiment, try and build from the most tender age, why not make also those types of games to early childhood age from 4years old",
      name: 'Club Owner'
    } ,
    
    {
      text:
        "we lack resources and tools to make ESD education fun and engaging  and solve today challenges, outside the walls of classroom and traditional learning environment",
      name: 'Teacher of sustainability'
    }
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
             {/*  <div className="thumb">
                <img src={currentTestimonial.thumbSrc} alt="" />
              </div> */}
              <h4 className="name">{currentTestimonial.name}</h4>
             {/*  <span className="age">{currentTestimonial.age}</span> */}
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

export default FamTestimonials;
