import React from 'react';
import videoAbout from '../assets/video.mp4'
const Video = () => {
  return (
    <div className="position-relative overflow-hidden">
      <div className="d-flex sm-video" data-lc-helper="video-bg">
        <video
          className="position-absolute w-100"
          style={{ zIndex: 1, objectFit: 'cover', objectPosition: '50% 50%' }}
          autoPlay
          preload="auto"
          muted
          loop
          playsInline
        >
          <source src={videoAbout} type="video/mp4" />
        </video>
       {/*  <div className="align-self-center text-center text-light col-md-8 offset-md-2" style={{ zIndex: 2 }}>
          <div className="lc-block mb-4">
            <div data-editable="rich">
              <h1 className="display-1 fw-bolder">LabConnect</h1>
            </div>
          </div>

          <div className="lc-block">
            <div data-editable="rich">
              <p className="lead">
                Welcome to LabConnect, the advanced lab analysis platform for chronic disease patients. Schedule diagnostic tests easily with our online booking system. Choose convenient nurse visits for sample collection. Get accurate results and personalized care with expertise and professionalism.
              </p>
            </div>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default Video;
