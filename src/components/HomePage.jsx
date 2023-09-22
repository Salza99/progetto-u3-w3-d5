import { Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import Sidebar from "./Sidebar";
import Player from "./Player";
import FetchedMainPage from "./FetchedMainPage";

const HomePage = () => {
  let popArtists = ["maroon5", "coldplay", "katyperry", "arianagrande"];
  let hiphopArtists = ["eminem", "snoopdogg", "lilwayne", "drake"];
  return (
    <Row>
      <Sidebar />
      <FetchedMainPage pop={popArtists} hiphop={hiphopArtists} />
      {/* <Player /> */}
    </Row>
  );
};
export default HomePage;
