import { Link } from "react-router-dom";
import logoSpotify from "../assets/logo/spotify-logo.png";

export const Header = () => {
  return (
    <div className="header">
      <img src={logoSpotify} alt="Logo Spotify" />
      <Link  className="header__link" to="/">
        <h1>Spotify</h1>
      </Link>
    </div>
  );
};
