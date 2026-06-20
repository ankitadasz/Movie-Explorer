import { useState } from "react";
import { NavLink } from "react-router-dom";
import { FaSearch } from "react-icons/fa";
export const Header = () => {
  const [showSearch, setShowSearch] = useState(false);
  return (
    <header className="navbar-container">
      <h1 className="logo">🎬Movie Explorer</h1>
      <nav className="right-nav-container">
        <ul className="right-nav-list">
          <li className="navlink">
            <NavLink to="/">Home</NavLink>
          </li>
          <li className="navlink">
            <NavLink to="/Explore">Explore</NavLink>
          </li>
          <li className="navlink">
            <NavLink to="/Trending">Trending</NavLink>
          </li>
          <li className="navlink">
            <NavLink to="/TopRated">Top Rated</NavLink>
          </li>
        </ul>
      </nav>
      {showSearch && (
        <input
          type="text"
          placeholder="Search movies..."
          className="search-input"
        />
      )}

      <FaSearch
        className="search-icon"
        onClick={() => setShowSearch(!showSearch)}
      />
      <label className="switch">
        <input type="checkbox" />
        <span className="slider"></span>
      </label>
    </header>
  );
};
export default Header;
