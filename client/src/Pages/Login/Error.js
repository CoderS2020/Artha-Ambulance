import React from 'react';
import './error.css';
import { Link } from 'react-router-dom';

function Error() {
  return (
    <div className="text-center">
      <div id="notfound">
        <div className="notfound">
          <div className="notfound-404">
            <h1>Oops!</h1>
            <h2>404 - The Page can't be found</h2>
          </div>
          <Link to="/">Go To Homepage</Link>
        </div>
      </div>
    </div>
  );
}

export default Error;
