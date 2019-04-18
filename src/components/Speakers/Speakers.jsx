import React from 'react';

export default function Speakers({title, description, speakers}) {
  return (
    <div className="site-section" id="speakers">
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

        {speakers.map(({about, name, photo, title, id}, i) => {
          var odd = i % 2 == 0 ? true : false;
          return (
            <div key={id} className="row align-items-center speaker">
              <div className={"col-lg-6 mb-5 mb-lg-0" + (odd ? '' : ' order-lg-2')}>
                {photo && <img src={photo} alt="Image" className="img-fluid" />}
              </div>
              <div className={"col-lg-6 ml-auto" + (odd ? '' : ' order-lg-1')}>
                {name && <h2 className="text-white mb-4 name">{name}</h2>}
                <div className={"bio" + (odd ? ' pl-lg-5' : ' pr-lg-5')}>
                  {title && <span className="text-uppercase text-primary d-block mb-3">{title}</span>}
                  {about && <p className="mb-4">{about}</p>}
                </div>
              </div>
            </div>
          );
        })}

      </div>
    </div>
  );
}
