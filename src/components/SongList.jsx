import { useState } from "react";
import { SongItem } from "./SongItem";

export const SongList = ({songsArray}) => {
  const [items, setItems] = useState(5);

  console.log("xxx", songsArray)
  return (
    <div className="song-list">
      {songsArray?.filter((current, index) => index < items).map((song, index) => {
        return <SongItem {...song} key={index} index={index} />;
      })}

      <p className="song-list__see-more" onClick={() => setItems(items + 5)}>Ver mais</p>
    </div>
  );
};
