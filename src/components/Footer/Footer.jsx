import React from 'react';

export default function Footer(props) {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="row mb-5">
          <div className="col-6">
            <h2 className="footer-heading text-uppercase mb-4">About Event</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit aliquid quibusdam fugit architecto.</p>
          </div>
          <div className="col-6 ml-auto">
            <h2 className="footer-heading text-uppercase mb-4">Quick Links</h2>
            <ul className="list-unstyled">
              <li><a href="#">About Us</a></li>
              <li><a href="#">Speakers</a></li>
              <li><a href="#">Gallery</a></li>
              <li><a href="#">Contact Us</a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
