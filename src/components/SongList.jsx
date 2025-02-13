import { SongItem } from "./SongItem";

export const SongList = () => {
  return (
    <div className="song-list">
      <SongItem />
      <SongItem />
      <SongItem />
      <SongItem />
      <SongItem />
      <SongItem />
      <p className="song-list__see-more">Ver mais</p>
    </div>
  );
};
