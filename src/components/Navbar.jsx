import { Link } from "react-router-dom";
import FavoritesDropdown from "./FavoritesDropdown.jsx";

export const Navbar = () => {
  function closeNavbar() {
    document.getElementById('navbarNav')?.classList.remove('show')
  }

  return (
    <nav className="navbar navbar-light bg-light sticky-top navbar-expand-md">
      <div className="container">
        <Link to="/" className="navbar-brand">Star Wars</Link>

        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
          <span className="navbar-toggler-icon" />
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <div className="navbar-nav me-auto">
            <Link to="/films" className="nav-link" onClick={closeNavbar}>Films</Link>
            <Link to="/people" className="nav-link" onClick={closeNavbar}>People</Link>
            <Link to="/planets" className="nav-link" onClick={closeNavbar}>Planets</Link>
          </div>
          <FavoritesDropdown />
        </div>
      </div>
    </nav>
  );
};
