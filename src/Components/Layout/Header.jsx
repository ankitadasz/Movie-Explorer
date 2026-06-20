import { NavLink } from "react-router-dom";

export const Header = () => {
  return (
    <header className="navbar-container">
      <h1 className="logo">🎬 Movie Explorer</h1>
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
      <input type="text" placeholder="SearchMovies..." className="search-input" />
      <button className="toggle-button">🌙</button>
    </header>
  );
};
export default Header;
