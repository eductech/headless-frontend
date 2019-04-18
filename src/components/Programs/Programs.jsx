import React from 'react';

export default function Programs({description, title, programs}) {
  return (
    <div className="site-section" id="programs">
      <div className="container">
        <div className="row mb-5">
          <div className="col-lg-4">
            <div className="site-section-heading">
              {title && <h2>{title}</h2>}
            </div>
          </div>
          <div className="col-lg-6 mt-5 pl-lg-5">
            {description && <p>{description}</p>}
          </div>
        </div>

        <div className="row align-items-stretch program">
          {programs.map(({speaker, title, date, id}, i) => {
            return (
              <div key={id} className="col-12 border-top border-bottom py-5">
                <div className="row align-items-stretch">
                  <div className="col-md-3 text-white mb-3 mb-md-0">
                    {date && <span className="h4">{date.getDate()}</span>}
                    <span>'th of April</span>
                  </div>
                  <div className="col-md-9">
                    {title && <h2 className="text-white">{title}</h2>}
                    {(i != 3 && i != 5) ? <span>Samuel Johnson</span> : null}
                  </div>
                </div>
              </div>
            );
          })}

        </div>
      </div>
    </div>
  );
}
