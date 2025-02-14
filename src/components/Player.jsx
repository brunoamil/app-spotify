import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCirclePlay,
  faBackwardStep,
  faForwardStep,
  faCirclePause,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { useEffect, useRef, useState } from "react";

export const Player = ({ duration, randomArtist, audio, randomToArtist }) => {
  const audioPlayer = useRef();
  const playerProgress = useRef();
  const [isPlay, setIsPlay] = useState(false);
  const [currentTime, setCurrentTime] = useState(formatTime(0));
  function playPause() {
    isPlay ? audioPlayer.current.pause() : audioPlayer.current.play();
    setIsPlay(!isPlay);

    setCurrentTime(formatTime(audioPlayer.current.currentTime));
  }

  function formatTime(timeInSeconds) {
    const minutes = Math.floor(timeInSeconds / 60)
      .toString()
      .padStart(2, "0");
    const seconds = Math.floor(timeInSeconds - (minutes % 60))
      .toString()
      .padStart(2, "0");

    return `${minutes}:${seconds}`;
  }

  // function timeInSeconds = () => {

  // }

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (isPlay) setCurrentTime(formatTime(audioPlayer.current.currentTime));
    }, 1000);
    return () => clearInterval(intervalId);
  }, [isPlay]);

  return (
    <div className="player">
      <div className="player__controllers">
        <Link to={`/song/${randomArtist}`}>
          <FontAwesomeIcon className="player__icon" icon={faBackwardStep} />
        </Link>
        <FontAwesomeIcon
          className="player__icon player__icon--play"
          icon={!isPlay ? faCirclePlay : faCirclePause}
          onClick={() => playPause()}
        />
        <Link to={`/song/${randomToArtist}`}>
          <FontAwesomeIcon className="player__icon" icon={faForwardStep} />
        </Link>
      </div>
      <div className="player__progress">
        <p>{currentTime}</p>
        <div className="player__bar">
          <div ref={playerProgress} className="player__bar-progress"></div>
        </div>
        <p>{duration}</p>
      </div>
      <audio ref={audioPlayer} src={audio} />
    </div>
  );
};
