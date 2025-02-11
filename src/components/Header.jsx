import logoSpotify from "../assets/logo/spotify-logo.png";

export const Header = () => {
  return (
    <div>
      <img src={logoSpotify} alt="Logo Spotify" />
      <a href="/">
        <h1>Spotify</h1>
      </a>
    </div>
  );
};
