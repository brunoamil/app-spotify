import { Link } from "react-router-dom";

export const SongItem = ({image, name, duration, artist, audio, _id, index}) => {
  console.log("name", name)
  return (
    <Link to={`/song/${_id}`} className="song-item">
      <div className="song-item__number-album">
        <p>{index + 1}</p>
        <div className="song-item__album">
          <img
            className="song-item__image"
            src={`${image}`}
            alt={`Imagem da Música ${name}`}
          />
          <p className="song-item__name">{name}</p>
        </div>
      </div>
      <p>{duration}</p>
    </Link>
  );
};
