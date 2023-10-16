import { Link } from "react-router-dom";

function Navigation() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <a className="navbar-brand" href="#">
        TechTreasure
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav ml-auto">
          {/* <li className="nav-item active">
            <a className="nav-link" href="#">
              <span className="sr-only">Home</span>
            </a>
          </li> */}
          <li className="nav-item">
            <Link to="/create-healthdata" className="nav-link">
              Create Health Profile
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navigation;
