import { Link, useLocation } from "react-router-dom";
import { SingleItem } from "./SingleItem";

export const ItemList = (props) => {
  const { title, items, itemsArray, path, idPath } = props;
  const { pathname } = useLocation();
  const isHome = pathname === "/";
  const finalItems = isHome ? items : Infinity;

  return (
    <div className="item-list">
      <div className="item-list__header">
        <h2>{title} populares</h2>
        {isHome && (
          <Link to={path} className="item-list__link">
            Mostrar tudo
          </Link>
        )}
      </div>

      <div className="item-list__container">
        {itemsArray
          .filter((artist, index) => index < finalItems)
          .map((artist, index) => {
            return (
              <SingleItem
                key={`${artist.name}-${index}`}
                {...artist}
                idPath={idPath}
              />
            );
          })}
      </div>
    </div>
  );
};
