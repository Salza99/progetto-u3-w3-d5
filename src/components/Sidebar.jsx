import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from "../assets/Spotify_Logo.png";
import { HouseDoorFill, BookFill } from "react-bootstrap-icons";

const Sidebar = () => {
  return (
    <Nav className="navbar col-md-12 d-none d-md-flex flex-column bg-black sidebar justify-content-between w-25 fixed-left">
      <Container className="h-100 align-content-between">
        <div>
          <Link to={"/"}>
            <Navbar.Brand>
              <img className="img-fluid mb-3 pt-3 px-3" src={logo} alt="spotify-logo" />
            </Navbar.Brand>
          </Link>

          <Nav.Item>
            <Link className="navbar-links fs-5 p-3" to={"/"}>
              <HouseDoorFill className="me-2"></HouseDoorFill>Home
            </Link>
          </Nav.Item>
          <Nav.Item>
            <Link className="navbar-links fs-5 p-3" to={"/"}>
              <BookFill className="me-2"></BookFill>Your Library
            </Link>
          </Nav.Item>

          <div className="input-group mt-3 p-2">
            <input className="form-control" type="text" placeholder="Search" />
            <Button variant="outline-secondary" size="sm">
              Go
            </Button>
          </div>
        </div>
        <Nav.Item className="d-flex flex-column align-items-center w-100">
          <Button className="signup-btn">Sign In</Button>
          <Button className="login-btn">Login</Button>
          <div className="d-flex w-100 align-items-center justify-content-center">
            <Link className="navbar-links me-3" to={"/"}>
              Cookie Policy
            </Link>
            <Link className="navbar-links" to={"/"}>
              Privacy
            </Link>
          </div>
        </Nav.Item>
      </Container>
    </Nav>
  );
};
export default Sidebar;
