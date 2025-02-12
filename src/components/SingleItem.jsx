import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCirclePlay } from "@fortawesome/free-solid-svg-icons";

export const SingleItem = () => {
  return (
    <div className="single-item">
      <div className="single-item__div-image-button ">
        <div className="single-item__div-image">
          <img
            className="single-item__image"
            src="https://i.scdn.co/image/ab67616100005174dbfd9763ee6948c110999581"
            alt="Image do Artista X"
          />
        </div>

        <FontAwesomeIcon className="single-item__icon" icon={faCirclePlay} />
      </div>
      <div className="single-item__texts">
        <div className="single-item__2lines">
          <p className="single-item__title ">
            Henrique e Juliano Texto Texto text teste
          </p>
        </div>

        <p className="single-item__type">Artista</p>
      </div>
    </div>
  );
};
