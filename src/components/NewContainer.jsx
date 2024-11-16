import { NewArticle } from "./NewArticle";

// container negro de la web
export const NewContainer = () => {
  return (
    <aside className="bg-VeryDarkBlue text-OffWhite py-[28px] px-[20px]">
      <h1 className="text-SoftOrange text-4x1 font-bold">Nuevo</h1>
      <NewArticle
        title="La IA, la revolucion del XXI"
        text="La eras cambian y la tecnología es la protagonista"
      />
      <NewArticle
        title="Videojuegos una era en bajada..."
        text="Algunos dicen: Ya esta todo hecho"
      />
      <NewArticle
        title="Trabajo remoto Vs Trabajo presencial, que dicen los expertos?"
        text="En pandemia era parte de una realidad muy frecuente, hoy en día muchas empresas vuelven al metodo tradicional"
      />
    </aside>
  );
};


// esto se podria consumir de una api o un backend
