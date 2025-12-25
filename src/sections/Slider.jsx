import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Navigation } from "swiper/modules";
import "swiper/css/navigation";

import lambo from "../assets/images/lamborghini.jpeg";
import audi from "../assets/images/Audi.png";
import BMW from "../assets/images/BMW.jpg";

function Slider() {
  return (
    <Swiper
      modules={[Navigation]}
      navigation
      spaceBetween={50}
      slidesPerView={1}
      className="w-full min-h-screen mx-auto"  // Added mx-auto for horizontal centering of the slider itself
    >
      {/* Slide 1 */}
      <SwiperSlide className="flex items-center justify-center min-h-full">  
        <div className="flex flex-col items-center justify-center">
          <img
            src={lambo}
            alt="Lamborghini"
            className="w-125 md:w-175 h-75 object-cover rounded-lg"
          />
          <h2 className="text-black font-bold text-3xl mt-4 text-center font-serif">
            Lamborghini
          </h2>
        </div>
      </SwiperSlide>

      {/* Slide 2 */}
      <SwiperSlide className="flex items-center justify-center min-h-full">
        <div className="flex flex-col items-center justify-center">
          <img
            src={audi}
            alt="Audi"
            className="w-125 md:w-175 h-75 object-cover rounded-lg"
          />
          <h2 className="text-black font-bold text-3xl mt-4 text-center font-serif">
            Audi
          </h2>
        </div>
      </SwiperSlide>

      {/* Slide 3 */}
      <SwiperSlide className="flex items-center justify-center min-h-full">
        <div className="flex flex-col items-center justify-center">
          <img
            src={BMW}
            alt="BMW"
            className="w-125 md:w-175 h-75  object-cover rounded-lg"
          />
          <h2 className="text-black font-bold text-3xl mt-4 text-center font-serif">
            BMW
          </h2>
        </div>
      </SwiperSlide>
    </Swiper>
  );
}

export default Slider;