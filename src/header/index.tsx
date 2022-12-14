import "./header.css";
import { Link } from "react-router-dom";
import React from "react";

function Header() {

  return (
    <header className="App-header">
      <Link to="/" className="home-title">
        <h1>The Magical World of Harry Potter</h1>
      </Link>

      <div className="content">
        <Link to="/characters">
          <button className="button">
            Characters
          </button>
        </Link>
        <Link to="/houses">
          <button className="button">
            Houses
          </button>
        </Link>
        <Link to="/spells">
          <button className="button">
            Spells
          </button>
        </Link>
        <Link to="/books">
          <button className="button">
            Books
          </button>
        </Link>

      </div>
    </header>
  )

}

export default Header;
