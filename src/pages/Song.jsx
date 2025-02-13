import { Link } from "react-router-dom";
import { Player } from "../components/Player";

export const Song = () => {
  return (
    <div className="song">
      <div className="song__container">
        <Link to="/artist1/1" className="song__image-container">
          <img
            src="https://i.scdn.co/image/ab67616d00001e02af41105c5cd91b28f2cf219d"
            alt="Imagem artista"
          />
        </Link>
      </div>
      <div className="song__bar">
        <div className="song__artist-image">
            <img width={75} height={75} src="https://i.scdn.co/image/ab67616d00001e02af41105c5cd91b28f2cf219d" alt="Imagem artista" />
        </div>
        <Player />
        <div>
            <p className="song__name">Ultima musica</p>
            <p>Gaabriel Mendes</p>

        </div>
      </div>
    </div>
  );
};
