import imageMobile from "../assets/images/image-web-3-mobile.jpg";
import imageDesktop from "../assets/images/image-web-3-desktop.png";

export const MainArticle = () => {
  return (
    <section className="mb-12">
      <picture>
        <source media="(max-width: 640px)" srcSet={imageMobile} />
        <source media="(min-width: 641px)" srcSet={imageDesktop} />
        <img src={imageMobile} alt="Articulo principal" />
      </picture>
      <div className="sm:flex">
        <div className="flex-1 py-6">
          <h2 className="text-[40px] font-bold sm:text-[58px] leading-none">
            Chile: estructura y sombras de corrupción.
          </h2>
        </div>
        <div className="flex-1 pt-9 text-center">
          <p className="text-[13px] mb-10 sm:text-[15px]">
            "Los pilares del cambio: instrumental y estructural."
            <div>El poder político y la coordinación de mercado</div>
          </p>
          <button className="bg-SoftRed w-[185px] h-[48px] uppercase text-OffWhite hover:bg-VeryDarkBlue mx-auto">
            read more, aqui botton
          </button>
        </div>
      </div>
    </section>
  );
};
