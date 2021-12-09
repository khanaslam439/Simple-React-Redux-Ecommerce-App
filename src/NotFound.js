import React from 'react'
import { Link } from 'react-router-dom';
const NotFound = () => {
    return (
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%,-50%)",
          textAlign: "center",
        }}
      >
        <h1 className="display-4">Page Not Found</h1>
        <p className="lead muted">
          The page you visited either not available or you have missed spelled
          the page url.
            </p>
            <Link className="add--product__btn" to="/">Go to home</Link>
      </div>
    );
}


export default NotFound;