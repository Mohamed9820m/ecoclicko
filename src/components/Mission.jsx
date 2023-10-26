/* import React from 'react';
import BubblyButton from '../constants/BubblyButton';

const Mission = () => {
  return (
    <div className="hero-landing">
      <div className="container col-xxl-8 px-4 py-5">
        <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
          <div className="col-10 col-sm-8 col-lg-6">
            <img
              src="https://cdni.iconscout.com/illustration/premium/thumb/online-job-search-5015545-4185620.png"
              className="d-block mx-lg-auto img-fluid"
              alt="Bootstrap Themes"
              width="700"
              height="500"
              loading="lazy"
            />
          </div>
          <div className="col-lg-6">
            <h1 className="display-4 fw-bold text-body-emphasis lh-1 mb-3">
              WITH ECOCLICKO WE PLAY GREEN BUILD{' '}
              <span className="textOrange"> GREEN ACT GREEN</span>
            </h1>
            <div className="d-grid gap-2 d-md-flex justify-content-md-start pt-3">
              <BubblyButton text="Learn & Play" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mission; */



import React from 'react'
import BubblyButton from '../constants/BubblyButton'

const Mission = () => {
  return (
    <>
    
<div className='container'>
<div className="row">
  <div className='row-lp-sc'>
  <div className="right-column">
   <img src="https://cdni.iconscout.com/illustration/premium/thumb/job-search-4268354-3560997.png" alt="" />
   </div>
    <div className="left-column">
      <h2 className="left-heading text-uppercase">
      Mission
      </h2>
      <p className="left-paragraph">We are Transforming Education into Climate Change through the Facilitation Approach on Green Buildings to Address Environmental Challenges.</p>
      <div className='py-3'>
      <BubblyButton text="Learn More" />
      </div>
    </div>
</div>
</div>
</div>

    </>
  )
}

export default Mission