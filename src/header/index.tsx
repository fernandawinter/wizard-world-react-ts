import "./header.css";
import { Link } from "react-router-dom";
import React from "react";

function Header() {

  return (
    <header className="App-header">
      <h1>The Magical World of Harry Potter</h1>
      <div className="content">
        <Link to="/characters">
          <button className="button">
            Characters
          </button>
        </Link>
        <Link to="/spells">
          <button className="button">
            Spells
          </button>
        </Link>
        <Link to="/houses">
          <button className="button">
            Houses
          </button>
        </Link>
      </div>
    </header>
  )

}

export default Header;
