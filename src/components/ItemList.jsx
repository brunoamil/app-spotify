import { SingleItem } from "./SingleItem";

export const ItemList = (props) => {
  const { title, items } = props;

  return (
    <div className="item-list">
      <div className="item-list__header">
        <h2>{title} populares</h2>
        <a href="" className="item-list__link">
          Mostrar tudo
        </a>
      </div>

      <div className="item-list__container">
        {Array(items).fill().map((item) => {
          return (
            <SingleItem key={item} />
          )
        })}
        
      </div>
    </div>
  );
};
