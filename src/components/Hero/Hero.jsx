import React from 'react';

export default function Hero({cta, description, header, subheader}) {
  return (
    <div id="hero" className="site-section site-hero">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-10">
            {subheader && <span className="d-block mb-3 caption">{subheader}</span>}
            {header && <h1 className="d-block mb-4">{header}</h1>}
            {description && <span className="d-block mb-5 caption">{description}</span>}
            <a href="#" className="btn-custom">{cta && <span>{cta}</span>}</a>
          </div>
        </div>
      </div>
    </div>
  );
}
