import React from 'react';

export default function Footer({description, links}) {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="row mb-5">
          <div className="col-6">
            <h2 className="footer-heading text-uppercase mb-4">About Event</h2>
            <p>{description}</p>
          </div>
          <div className="col-6 ml-auto">
            <h2 className="footer-heading text-uppercase mb-4">Quick Links</h2>
            <ul className="list-unstyled">
              {links && links.map(({title, ref, id}) => {
                return (
                  <li key={id}><a href={ref}>{title}</a></li>
                )
              })}
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
