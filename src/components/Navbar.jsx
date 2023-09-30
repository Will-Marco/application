import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { logo } from "../constants";

const Navbar = () => {
  const { loggedIn, user } = useSelector((state) => state.auth);

  return (
    <div className="d-flex flex-column flex-md-row align-items-center py-3 mb-4 border-bottom container">
      <Link to={"/"}>
        <img src={logo} alt="logo" height={"40px"} />
      </Link>
      <nav className="d-inline-flex mt-2 mt-md-0 ms-md-auto">
        {loggedIn ? (
          <>
            <p className="me-3 m-0 py-2 text-dark text-decoration-none">
              {user.username}
            </p>
            <button className="btn btn-outline-danger">Log Out</button>
          </>
        ) : (
          <>
            <Link
              className="me-3 py-2 text-dark text-decoration-none"
              to={"/login"}
            >
              Login
            </Link>
            <Link
              className="me-3 py-2 text-dark text-decoration-none"
              to={"/register"}
            >
              Register
            </Link>
          </>
        )}
      </nav>
    </div>
  );
};
export default Navbar;
