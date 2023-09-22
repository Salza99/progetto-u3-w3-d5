import { Col, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";
import Sidebar from "./Sidebar";
import { useEffect, useState } from "react";

const AlbumPage = () => {
  const params = useParams();
  const [album, setAlbum] = useState(null);

  const fetchAlbum = async () => {
    try {
      const resp = await fetch("https://striveschool-api.herokuapp.com/api/deezer/album/" + params.id.toString());
      if (resp.ok) {
        const data = await resp.json();
        setAlbum(data);
      }
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    fetchAlbum();
    console.log(album.tracks.data);
  }, []);

  return (
    <Row>
      <Sidebar />

      {album && (
        <Col className="offset-md-4" xs={12} md={3} lg={2}>
          <img className="img-fluid w-100" src={album.cover} alt={album.title} />
        </Col>
      )}
      {album &&
        album.tracks.data.map((track) => {
          return (
            <Col className="offset-md-7 d-flex justify-content-between" xs={12} md={5} lg={5}>
              <p className="text-white">{track.title}</p>
              <p className="text-white">{track.duration}</p>
            </Col>
          );
        })}
    </Row>
  );
};
export default AlbumPage;
