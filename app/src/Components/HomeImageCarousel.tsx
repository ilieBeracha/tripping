import { useState, useEffect } from "react";
import maldives from "@/assets/images/maldives-island.jpg";
import ski from "@/assets/images/ski.jpg";
import nyc from "@/assets/images/nyc.jpg";

export default function HomeImageCarousel() {
  const images = [maldives, ski, nyc];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      goToNextSlide();
    }, 5000);
    return () => clearInterval(interval);
  }, [currentIndex]);

  const goToNextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="relative h-full w-full bg-gray-50 object-cover lg:absolute rounded-tl-[10px] shadow-lg overflow-hidden">
      <div
        className="flex transition-transform duration-500 ease-in-out"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {images.map((image, index) => (
          <div key={index} className="w-full flex-shrink-0 shadow-2xl">
            <img
              className="h-full object-cover opacity-95"
              src={image}
              alt={`Slide ${index + 1}`}
            />
          </div>
        ))}
      </div>
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {images.map((_, index) => (
          <div
            key={index}
            className={`w-3 h-3 rounded-full ${
              index === currentIndex ? "bg-main-orange" : "bg-gray-400"
            }`}
          ></div>
        ))}
      </div>
    </div>
  );
}
