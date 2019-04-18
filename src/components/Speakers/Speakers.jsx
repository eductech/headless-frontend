import React from 'react';

export default function Speakers({title, description, speakers}) {
  console.log(speakers);
  
  return (
    <div className="site-section">
      <div className="container">
        <div className="row mb-5">
          <div className="col-lg-4">
            <div className="site-section-heading">
              {title && <h2>{title}</h2>}
            </div>
          </div>
          <div className="col-lg-5 mt-5 pl-lg-5">
            {description && <p>{description}</p>}
          </div>
        </div>

        {speakers.map(({about, name, photo, title}, i) => {
          return (
            <div className="row align-items-center speaker">
              <div className="col-lg-6 mb-5 mb-lg-0">
                {photo && <img src={photo} alt="Image" className="img-fluid" />}
              </div>
              <div className="col-lg-6 ml-auto">
                {name && <h2 className="text-white mb-4 name">{name}</h2>}
                <div className="bio pl-lg-5">
                  {title && <span className="text-uppercase text-primary d-block mb-3">{title}</span>}
                  {about && <p className="mb-4">{about}</p>}
                </div>
              </div>
            </div>
          );
        })}

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

      </div>
    </div>
  );
}
