import { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";

const FetchedMainPage = (props) => {
  const [rockFetch, setRockFetch] = useState(null);
  const [popFetch, setPopFetch] = useState(null);
  const [hipHopFetch, setHipHopFetch] = useState(null);

  const fetchRockHomePage = async () => {
    try {
      const resp = await fetch("https://striveschool-api.herokuapp.com/api/deezer/search?q=queen");
      if (resp.ok) {
        const data = await resp.json();
        setRockFetch(data);
      }
    } catch (err) {
      console.log(err);
    }
  };
  const fetchPopHomePage = async () => {
    try {
      const resp = await fetch("https://striveschool-api.herokuapp.com/api/deezer/search?q=maroon5");
      if (resp.ok) {
        const data = await resp.json();
        setPopFetch(data);
      }
    } catch (err) {
      console.log(err);
    }
  };
  const fetchHipHopHomePage = async () => {
    try {
      const resp = await fetch("https://striveschool-api.herokuapp.com/api/deezer/search?q=eminem");
      if (resp.ok) {
        const data = await resp.json();
        setHipHopFetch(data);
      }
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    fetchRockHomePage();
    fetchPopHomePage();
    fetchHipHopHomePage();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Col className="offset-md-4" xs={12} md={8}>
      <Row>
        {" "}
        <Col xs={12}>
          <h2 className="text-white">Rock Classics</h2>
          <Row className="flex-nowrap mb-2">
            {rockFetch &&
              rockFetch.data.map((song, index) => {
                if (index < 4) {
                  return (
                    <Col
                      className="overflow-hidden d-flex flex-column text-center align-items-center"
                      xs={12}
                      sm={6}
                      md={4}
                      lg={3}
                    >
                      <img src={song.album.cover} alt="Queen" />
                      <h6 className="text-white">{song.title}</h6>
                    </Col>
                  );
                }
              })}
          </Row>
        </Col>
        <Col xs={12}>
          <h2 className="text-white">Pop</h2>
          <Row className="flex-nowrap mb-2">
            {popFetch &&
              popFetch.data.map((song, index) => {
                if (index < 4) {
                  return (
                    <Col
                      className="overflow-hidden d-flex flex-column text-center align-items-center"
                      xs={12}
                      sm={6}
                      md={4}
                      lg={3}
                    >
                      <img src={song.album.cover} alt="Maroon-5" />
                      <h6 className="text-white">{song.title}</h6>
                    </Col>
                  );
                }
              })}
          </Row>
        </Col>
        <Col xs={12}>
          <h2 className="text-white">Hip Hop</h2>
          <Row className="flex-nowrap ">
            {hipHopFetch &&
              hipHopFetch.data.map((song, index) => {
                if (index < 4) {
                  return (
                    <Col
                      className="overflow-hidden d-flex flex-column text-center align-items-center"
                      xs={12}
                      sm={6}
                      md={4}
                      lg={3}
                    >
                      <img src={song.album.cover} alt="Eminem" />
                      <h6 className="text-white">{song.title}</h6>
                    </Col>
                  );
                }
              })}
          </Row>
        </Col>
      </Row>
    </Col>
  );
};
export default FetchedMainPage;
