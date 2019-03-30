import React from 'react';

export default function Hero(props) {
  return (
    <div id="hero" className="site-section site-hero">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-10">
            <span className="d-block mb-3 caption">Conference 2019</span>
            <h1 className="d-block mb-4">Web Design Conference 2019</h1>
            <span className="d-block mb-5 caption">September 6th-7th, Minnesota, United States</span>
            <a href="#" className="btn-custom"><span>Buy Tickets</span></a>
          </div>
        </div>
      </div>
    </div>
  );
}
