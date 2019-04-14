import React from 'react';

export default function Speakers(props) {
  return (
    <div className="site-section">
      <div className="container">
        <div className="row mb-5">
          <div className="col-lg-4">
            <div className="site-section-heading">
              <h2>Speakers</h2>
            </div>
          </div>
          <div className="col-lg-5 mt-5 pl-lg-5">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus error deleniti dolores necessitatibus eligendi. Nesciunt repellendus ab voluptatibus. Minima architecto impedit eaque molestiae dicta quam. Cum ducimus. Culpa distinctio aperiam</p>
          </div>
        </div>

        <div className="row align-items-center speaker">
          <div className="col-lg-6 mb-5 mb-lg-0">
            <img src="images/person_1.jpg" alt="Image" className="img-fluid" />
          </div>
          <div className="col-lg-6 ml-auto">
            <h2 className="text-white mb-4 name">Emely Peters</h2>
            <div className="bio pl-lg-5">
              <span className="text-uppercase text-primary d-block mb-3">Web Designer</span>
              <p className="mb-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus error deleniti dolores necessitatibus eligendi. Nesciunt repellendus ab voluptatibus. Minima architecto impedit eaque molestiae dicta quam. Cum ducimus. Culpa distinctio aperiam</p>
              <p>
                Follow Emely &mdash;
                <a href="#" className="p-2"><span className="icon-facebook"></span></a>
                <a href="#" className="p-2"><span className="icon-twitter"></span></a>
                <a href="#" className="p-2"><span className="icon-github"></span></a>
              </p>
            </div>
          </div>
        </div>

        <div className="row align-items-center speaker">
          <div className="col-lg-6 mb-5 mb-lg-0 order-lg-2">
            <img src="images/person_2.jpg" alt="Image" className="img-fluid" />
          </div>
          <div className="col-lg-6 ml-auto order-lg-1">
            <h2 className="text-white mb-4 name">Alex Anchor</h2>
            <div className="bio pr-lg-5">
              <span className="text-uppercase text-primary d-block mb-3">Web Designer</span>
              <p className="mb-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus error deleniti dolores necessitatibus eligendi. Nesciunt repellendus ab voluptatibus. Minima architecto impedit eaque molestiae dicta quam. Cum ducimus. Culpa distinctio aperiam</p>
              <p>
                Follow Alex &mdash;
                <a href="#" className="p-2"><span className="icon-facebook"></span></a>
                <a href="#" className="p-2"><span className="icon-twitter"></span></a>
                <a href="#" className="p-2"><span className="icon-github"></span></a>
              </p>
            </div>
          </div>
        </div>

        <div className="row align-items-center speaker">
          <div className="col-lg-6 mb-5 mb-lg-0">
            <img src="images/person_3.jpg" alt="Image" className="img-fluid" />
          </div>
          <div className="col-lg-6 ml-auto">
            <h2 className="text-white mb-4 name">Aaron Thomas</h2>
            <div className="bio pl-lg-5">
              <span className="text-uppercase text-primary d-block mb-3">Web Designer</span>
              <p className="mb-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus error deleniti dolores necessitatibus eligendi. Nesciunt repellendus ab voluptatibus. Minima architecto impedit eaque molestiae dicta quam. Cum ducimus. Culpa distinctio aperiam</p>
              <p>
                Follow Aaron &mdash;
                <a href="#" className="p-2"><span className="icon-facebook"></span></a>
                <a href="#" className="p-2"><span className="icon-twitter"></span></a>
                <a href="#" className="p-2"><span className="icon-github"></span></a>
              </p>
            </div>
          </div>
        </div>

      
        <div className="row align-items-center speaker">
          <div className="col-lg-6 mb-5 mb-lg-0 order-lg-2">
            <img src="images/person_4.jpg" alt="Image" className="img-fluid" />
          </div>
          <div className="col-lg-6 ml-auto order-lg-1">
            <h2 className="text-white mb-4 name">Chris Mathews</h2>
            <div className="bio pr-lg-5">
              <span className="text-uppercase text-primary d-block mb-3">Web Designer</span>
              <p className="mb-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus error deleniti dolores necessitatibus eligendi. Nesciunt repellendus ab voluptatibus. Minima architecto impedit eaque molestiae dicta quam. Cum ducimus. Culpa distinctio aperiam</p>
              <p>
                Follow Chris &mdash;
                <a href="#" className="p-2"><span className="icon-facebook"></span></a>
                <a href="#" className="p-2"><span className="icon-twitter"></span></a>
                <a href="#" className="p-2"><span className="icon-github"></span></a>
              </p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
