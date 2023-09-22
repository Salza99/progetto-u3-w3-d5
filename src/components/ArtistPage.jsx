import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ArtistPage = () => {
  const params = useParams();
  const [artist, setArtist] = useState(null);

  const fetchArtist = async () => {
    try {
      const resp = await fetch("https://striveschool-api.herokuapp.com/api/deezer/artist/" + params.id.toString());
      if (resp.ok) {
        const data = await resp.json();
        setArtist(data);
      }
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    fetchArtist();
    console.log(artist);
  }, []);

  return (
    <div>
      <div></div>
      <div></div>
    </div>
  );
};
export default ArtistPage;
