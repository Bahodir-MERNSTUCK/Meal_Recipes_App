import React from 'react';
import {Link} from "react-router-dom";
function Header(props) {
    return (
        <nav className="navbar navbar-expand-lg nav">
        <div className="container-fluid">
        <Link to="/"><h5>Home</h5></Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
        </div>
      </nav>
    );
}

export default Header;