import imageMobile from "../assets/images/image-web-3-mobile.jpg";
import imageDesktop from "../assets/images/image-web-3-desktop.jpg";

export const MainArticle = () => {
  return (
    //aca en el primer className hay un margin button de 12 para el boton
    <section className="mb-12">
      <picture>
        <source media="(max-width: 640px)" srcSet={imageMobile} />
        <source media="(min-width: 641px)" srcSet={imageDesktop} />
        <img src={imageMobile} alt="Articulo principal" />
      </picture>
      <div className="sm:flex">
      <div className="flex-1 py-6">
      <h2 className="text-[40px] font-bold sm:text-[58px] leading-none">
        El futuro es ahora AI
      </h2>
      </div>
      <div className="flex-1 pt-9">
      <p className="text-[13px] mb-10 sm:text-[15px]"> Un nuevo mundo de tecnologia</p>
      <button className="bg-SoftRed w-[185px] h-[48px] uppercase text-OffWhite hover:bg-VeryDarkBlue">read more, aqui botton</button>
      </div>
      
      </div>

    </section>
  );
};
