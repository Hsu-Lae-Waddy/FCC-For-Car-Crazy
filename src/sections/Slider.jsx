import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { Link } from "react-router-dom";

import "swiper/css";
import "swiper/css/navigation";

import lambo from "../assets/images/lamborghini.jpeg";
import audi from "../assets/images/Audi.png";
import BMW from "../assets/images/BMW.jpg";
import mercedesbenz from "../assets/images/mercedes benz.jpeg";

function Slider() {
  return (
    
    <Swiper
      modules={[Navigation]}
      navigation
      slidesPerView={1}
      className="w-full min-h-screen"
    >
      <SwiperSlide className="flex items-center justify-center min-h-screen">
        <Link to="/Audi" className="flex flex-col items-center">
          <img
            src={audi}
            alt="Audi"
            className="w-125 md:w-175 h-75 object-cover rounded-lg"
          />
          <h2 className="text-black font-bold text-3xl mt-4 text-center font-serif">
            Audi
          </h2>
        </Link>
      </SwiperSlide>

      <SwiperSlide className="flex items-center justify-center min-h-screen">
        <Link to="/lamborghini" className="flex flex-col items-center">
          <img
            src={lambo}
            alt="Lamborghini"
            className="w-125 md:w-175 h-75 object-cover rounded-lg"
          />
          <h2 className="text-black font-bold text-3xl mt-4 text-center font-serif">
            Lamborghini
          </h2>
        </Link>
      </SwiperSlide>

       <SwiperSlide className="flex items-center justify-center min-h-screen">
        <Link to="/bmw" className="flex flex-col items-center">
          <img
            src={BMW}
            alt="BMW"
            className="w-125 md:w-175 h-75 object-cover rounded-lg"
          />
          <h2 className="text-black font-bold text-3xl mt-4 text-center font-serif">
            BMW
          </h2>
        </Link>
      </SwiperSlide>

       <SwiperSlide className="flex items-center justify-center min-h-screen">
        <Link to="/mercedes" className="flex flex-col items-center">
          <img
            src={mercedesbenz}
            alt="Mercedesbenz"
            className="w-125 md:w-175 h-75 object-cover rounded-lg"
          />
          <h2 className="text-black font-bold text-3xl mt-4 text-center font-serif">
            Mercedes Benz
          </h2>
        </Link>
      </SwiperSlide>
    </Swiper>
  );
}

export default Slider;
