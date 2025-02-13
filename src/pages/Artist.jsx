import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCirclePlay } from "@fortawesome/free-solid-svg-icons";
import { Link, useParams } from "react-router-dom";
import { SongList } from "../components/SongList";
import { artistArray } from "../assets/database/artists";
import { songsArray } from "../assets/database/songs";

<FontAwesomeIcon className="single-item__icon" icon={faCirclePlay} />;

export const Artist = () => {
  const { id } = useParams();

  const { name, banner} = artistArray.filter((artist) => {
    return artist.id === Number(id);
  })[0];

  const songs = songsArray.filter((song) => {
    return song.artist === name;
  });

  const randomIndex = Math.floor(Math.random() * (songs.length - 1));
  const randomArtist = songs[randomIndex].id;

  return (
    <div>
      <div
        className="artist__header"
        style={{
          backgroundImage: `linear-gradient(to bottom, var(--_shade), var(--_shade)),url(${banner})`,
        }}
      >
        <h2 className="artist__title">{name}</h2>
      </div>
      <div className="artist__body">
        <h2>Populares</h2>
        <SongList songsArray={songs} />
      </div>
      <Link to={`/song/${randomArtist}`}>
        <FontAwesomeIcon
          className="single-item__icon single-item__icon--artist"
          icon={faCirclePlay}
        />
      </Link>
    </div>
  );
};
