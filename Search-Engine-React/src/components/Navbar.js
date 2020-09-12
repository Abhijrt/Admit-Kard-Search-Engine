import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Navbar extends Component {
  render() {
    return (
      <nav>
        <input type="checkbox" id="check" />
        <label for="check" className="checkbtn">
          <i className="fas fa-bars"></i>
        </label>
        <label className="logo">
          <Link className="link" to="/">
            Question Bank
          </Link>
        </label>
        <ul>
          <li>
            <Link className="link" to="/add-question">
              Add Question
            </Link>
          </li>
          <li>
            <Link className="link" to="/search-question">
              Search Question
            </Link>
          </li>
        </ul>
      </nav>
    );
  }
}
