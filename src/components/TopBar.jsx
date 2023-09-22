import { Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

const TopBar = () => {
  return (
    <Col className="offset-md-3 mainPage mb-5" xs={12} md={9}>
      <Row className="justify-content-evenly text-nowrap">
        <Col className="d-none d-md-flex justify-content-between pt-4" xs={9} lg={11}>
          <Link to={"/"} className="navbar-links small fw-bold navbar-link">
            TRENDING
          </Link>
          <Link to={"/"} className="navbar-links small fw-bold navbar-link">
            PODCAST
          </Link>
          <Link to={"/"} className="navbar-links small fw-bold navbar-link">
            MOODS AND GENRES
          </Link>
          <Link to={"/"} className="navbar-links small fw-bold navbar-link">
            NEW RELEASE
          </Link>
          <Link to={"/"} className="navbar-links small fw-bold navbar-link">
            DISCOVER
          </Link>
        </Col>
      </Row>
    </Col>
  );
};
export default TopBar;
