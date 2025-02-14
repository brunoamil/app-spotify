import { Link, useParams } from "react-router-dom";
import { Player } from "../components/Player";
import { songsArray } from "../assets/database/songs";
import { artistArray } from "../assets/database/artists";

export const Song = () => {
  const { id } = useParams();
  
 

  const {image, name, duration, artist, audio} = songsArray.filter(song => song._id === id)[0];
  
  const artistObj = artistArray.filter(current => current.name === artist)[0];

  const songs = songsArray.filter((song) => {
    return song.artist === artist;
  });

  const randomIndex = Math.floor(Math.random() * (songs.length - 1));
  const randomToIndex = Math.floor(Math.random() * (songs.length - 1));

  const randomArtist = songs[randomIndex]._id;
  const randomToArtist = songs[randomToIndex]._id;

  return (
    <div className="song">
      <div className="song__container">
        <Link to={`/artist/${artistObj._id}`} className="song__image-container">
          <img
            src={image}
            alt={`Imagem da musica ${name}`}
          />
        </Link>
      </div>
      <div className="song__bar">
        <Link to={`/artist/${artistObj._id}`} className="song__artist-image">
            <img width={75} height={75} src={`${artistObj.image}`} alt={`Imagem artista do ${artist}`} />
        </Link>
        <Player duration={duration} audio={audio} randomArtist={randomArtist} randomToArtist={randomToArtist} />
        <div>
            <p className="song__name">{name}</p>
            <p>{artist}</p>

        </div>
      </div>
    </div>
  );
};
