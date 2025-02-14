import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export default function Navbar(props) {
  return (
    <nav
      className={
        "navbar navbar-expand-lg navbar-" + props.mode + " bg-" + props.mode
      }
    >
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          {props.title}
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/about">
                {props.aboutText}
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/">
                Contact
              </Link>
            </li>
          </ul>
          <form className="d-flex">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-outline-primary" type="submit">
              Search
            </button>
          </form>

          <div
            className={
              "form-check form-switch mx-3 text-" +
              (props.toggleGmode === "green" ? "light" : "green") +
              ""
            }
          >
            <input
              className="form-check-input"
              type="checkbox"
              id="flexSwitchCheckDefault1"
              onClick={props.toggleGmode}
            />
            <label
              className="form-check-label"
              htmlFor="flexSwitchCheckDefault1"
              style={{ color: props.mode === "dark" ? "white" : "black" }}
            >
              Enable Green Theme
            </label>
          </div>
          <div
            className={
              "form-check form-switch mx-3 text-" +
              (props.mode === "dark" ? "light" : "dark") +
              ""
            }
          >
            <input
              className="form-check-input"
              type="checkbox"
              id="flexSwitchCheckDefault"
              onClick={props.toggleMode}
            />
            <label
              className="form-check-label"
              htmlFor="flexSwitchCheckDefault"
            >
              Enable Dark Mode
            </label>
          </div>
        </div>
      </div>
    </nav>
  );
}
// Navbar.propTypes = {
//   title: PropTypes.string,
//   aboutText: PropTypes.string,
// };

// Navbar.defaultProps = {
//   title: "Set title here",
//   aboutText: "About text Here ",
// };
