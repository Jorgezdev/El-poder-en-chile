import { NewArticle } from "./NewArticle";

// container negro de la web
export const NewContainer = () => {
  return (
    <aside className="bg-VeryDarkBlue text-OffWhite py-[28px] px-[20px]">
      <h1 className="text-SoftOrange text-4x1 font-bold">Nuevo</h1>
      <NewArticle
        title="Los políticos corruptos de los últimos 8 años (2016-2024)"
        text="Los registros de corrupción del siglo xxi."
      />
      <NewArticle
        title="Las Familias Chilenas más poderosas."
        text="La elite Chilena, los demás son pobres."
      />
      <NewArticle
        title="La estructura del poder"
        text="Los principios del poder en Chile, su estructura y golpe en nuestra sociedad"
      />
    </aside>
  );
};


// esto se podria consumir de una api o un backend
