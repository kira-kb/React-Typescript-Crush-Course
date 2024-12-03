import { Link, BrowserRouter as Router } from "react-router-dom";

const Navbar: React.FC = () => {
  return (
    <>
      <nav>
        <ul>
          <li>
            <h1>kira</h1>
            <Link to="/"> Home </Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
