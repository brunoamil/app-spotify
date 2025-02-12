import { ItemList } from "./ItemList";
const Main = () => {
  return (
    <div className="main">
      <ItemList title="Artistas" items={15} />
      <ItemList title="Musicas" items={20} />
    </div>
  );
};

export default Main;
