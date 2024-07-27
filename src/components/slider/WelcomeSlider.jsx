import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const imageData = [
  {
    src: "/images/welcome1.jpg",
    alt: "welcome1",
  },
  {
    src: "/images/welcome2.jpg",
    alt: "welcome2",
  },
  {
    src: "/images/welcome3.jpg",
    alt: "welcome3",
  },
];

export const WelcomeSlider = () => {
  const settings = {
    dots: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: true,
    infinite: false,
  };

  return (
    <div className="slider-container relative" id="welcome">
      <div className="bg-black z-50 absolute h-full w-full opacity-60 pointer-events-none" />
      <div className="absolute text-white z-[99999] font-bold pointer-events-none mb-48 w-full top-[40%]">
        <h2 className="mx-5 text-4xl sm:text-5xl sm:mx-0 md:text-6xl text-center relative">
          Bienvenido a OFF Foods
        </h2>
        <p className="mx-5 sm:mx-0 sm:text-[17px] md:text-lg text-center">
          ¡Para que aquellos apasionados a la comida puedan disfrutar de platos
          con sabores únicos!
        </p>
      </div>
      <Slider {...settings}>
        {imageData.map(({ src, alt }) => {
          return (
            <img
              key={alt}
              src={src}
              alt={alt}
              className="bg-cover bg-no-repeat h-[70vh] md:h-[82vh]"
            />
          );
        })}
      </Slider>
    </div>
  );
};
