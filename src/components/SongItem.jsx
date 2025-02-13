import { Link } from "react-router-dom";

export const SongItem = () => {
  return (
    <Link to="/song/1" className="song-item">
      <div className="song-item__number-album">
        <p1>1</p1>
        <div className="song-item__album">
          <img
            className="song-item__image"
            src="https://i.scdn.co/image/ab67616d00001e02af41105c5cd91b28f2cf219d"
            alt="Imagem da Música"
          />
          <p className="song-item__name">Cantada Boba</p>
        </div>
      </div>
      <p>02:30</p>

    </Link>
  );
};
