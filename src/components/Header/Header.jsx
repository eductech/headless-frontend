import React from 'react';

export default function Header(props) {
  return (
    <header className="site-navbar py-3" role="banner">
      <div className="container-fluid">
        <div className="row align-items-center">
          <div className="col-2">
            <h1 className="mb-0"><a href="index.html" className="text-white h2 mb-0">Work<span className="text-primary">shop</span> </a></h1>
          </div>
          <div className="col-10">
            <nav className="site-navigation position-relative text-right" role="navigation">
              <ul className="site-menu js-clone-nav mx-auto">
                <li className="active"><a href="#hero">Home</a></li>
                <li><a href="#">Speakers</a></li>
                <li><a href="#">News</a></li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}
