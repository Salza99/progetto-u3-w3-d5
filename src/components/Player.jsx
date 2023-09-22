import { Col, Container, Row } from "react-bootstrap";
import Next from "../assets/Next.png";
import Play from "../assets/Play.png";
import Previous from "../assets/Previous.png";
import Repeat from "../assets/Repeat.png";
import Shuffle from "../assets/Shuffle.png";

const Player = () => {
  return (
    <Container className="fixed-bottom pt-1" fluid>
      <Row>
        <Col className="offset-lg-2" lg={10}>
          <Row>
            <Col className="offset-3 offset-md-4 offset-lg-5" xs={6} md={4} lg={2}>
              <Row>
                <img src={Shuffle} alt="shuffle" />
                <img src={Previous} alt="previous" />
                <img src={Play} alt="Play" />
                <img src={Next} alt="Next" />
                <img src={Repeat} alt="Repeat" />
              </Row>
            </Col>
          </Row>
          <Row className="justify-content-center playBar py-3">
            <Col xs={8} md={6}>
              <div className="progress">
                <div
                  className="progress.bar"
                  role="progressbar"
                  aria-valuemax={100}
                  aria-valuenow={0}
                  aria-valuemin={0}
                ></div>
              </div>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};
export default Player;
