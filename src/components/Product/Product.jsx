import React from 'react';
import { Link } from 'react-router-dom';  // Import Link from react-router-dom

import 'bootstrap/dist/css/bootstrap.min.css'; 
import pic from '../../assets/images/final.png';
import './Product.css'

export default function Product() {
  return (
    <header className="header-area v1 relative-box" id="home-area">
      <div className="container1">
        <div className="row">
          <div className="col-md-6">
            <div className="image-side-box right-box hidden-xs hidden-sm">
              <img src={pic} className="layer img-fluid" data-depth="0.35" alt="heey" />
            </div>
          </div>
          <div className="col-md-11">
            <div className="text-box">
              <h2 className="title">
                The best <span className="highlighted-text">Ecology Game</span> <br /> for young minds.
              </h2>
              <p>
              Embark with us on this exceptional adventure and together <br /> 
              let's transform our children's educational daily life into a green daily life.
              </p>
              <div className="space-30"></div>
              <Link to="/payement" className="btn btn-primary">
                Discover Now ->
                </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
