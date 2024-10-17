import React from "react";
import "./Navbar.css";

function Navbar() {
  return (
    <>
      <h3 className="text-center text-main fw-bold">Interest Calculator </h3>
      <p className="text-center text-main">
        Quickly find out the interest on your savings or loans
      </p>
      <nav className="navbar navbar-expand rounded-3 shadow ">
        <div className="collapse navbar-collapse">
          <ul className="navbar-nav mx-auto ">
            <li className="nav-item">
              <a
                className="nav-link  text-light mx-2 text-center text-md-start rounded-3"
                href="#"
              >
                Simple Intrest
              </a>
            </li>
            {/* <li className="nav-item">
              <a
                className="nav-link text-light  mx-2 text-center text-md-start rounded-3"
                href="#"
              >
                Compound Intrest
              </a>
            </li> */}
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
