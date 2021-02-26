import React from 'react';
import { Link } from 'react-router-dom';
import GoogleAuth from './GoogleAuth';

function Header() {
  return (
    <div className="ui secondary  menu">
      <Link to="/" className="item">
        CyStream
      </Link>
      <div className="right menu">
        <Link to="/streams/new" className="item">
          New Stream
        </Link>
        <GoogleAuth />
      </div>
    </div>
  );
}

export default Header;
