import { SingleItem } from "./SingleItem";

export const ItemList = (props) => {
  const { title, items, itemsArray, path, idPath } = props;

  return (
    <div className="item-list">
      <div className="item-list__header">
        <h2>{title} populares</h2>
        <a href={path} className="item-list__link">
          Mostrar tudo
        </a>
      </div>

      <div className="item-list__container">
        {itemsArray.filter((artist, index) => index < items).map((artist, index) => {
          return (
            <SingleItem key={`${artist.name}-${index}`} {...artist} idPath={idPath} />
          )
        })}
       
      </div>
    </div>
  );
};
