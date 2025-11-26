import { useEffect, useRef, useState } from "react";
import { GoDotFill } from "react-icons/go";
import Categoryheading from "./CategoryHeading";

const CaroselsCommon = ({ header, images, imagesCount }) => {
  const [current, setCurrent] = useState(0);
  const intervalRef = useRef(null); // store interval ID

  const startInterval = () => {
    // Clear any existing interval
    if (intervalRef.current) clearInterval(intervalRef.current);

    // Start new interval
    intervalRef.current = setInterval(() => {
      setCurrent((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    }, 5000); // 7 seconds
  };

  useEffect(() => {
    startInterval(); // start interval on mount

    return () => clearInterval(intervalRef.current); // cleanup
  }, []);

  const handleSlide = (idx) => {
    setCurrent(idx);
    startInterval();
  };

  return (
    <div className="carosel-container">
      <Categoryheading header={header} />
      <div className="carosel-slider">
        <div className="relative w-full overflow-hidden pt-[20px] pb-[15px]">
          {/* Slider Content */}
          <div
            className="flex transition-transform duration-500"
            style={{ transform: `translateX(-${current * 100}%)` }}
          >
            {images.map((slideImages, slideIndex) => (
              <div key={slideIndex} className="w-full flex-shrink-0 flex">
                {slideImages.map((src, imgIndex) => (
                  <a
                    key={imgIndex}
                    href="/"
                    /*className="w-full"*/
                    style={{
                      width: `${100 / slideImages.length}%`,
                    }}
                  >
                    <img src={src} draggable="false" />
                  </a>
                ))}
              </div>
            ))}
          </div>

          {/* control buttons */}
          <div className="flex justify-center">
            {imagesCount.map((_, idx) => {
              return (
                <button
                  key={idx}
                  className="px-1 mt-5"
                  onClick={() => handleSlide(idx)}
                >
                  <GoDotFill
                    className={`hover:text-[#535766] ${
                      current === idx ? "text-[#3f3f3f]" : "text-[#9a9da7]"
                    }`}
                  />
                </button>
              );
            })}
          </div>
        </div>
      </div>
      {/* <div className="carosel-slider-btn"></div> */}
    </div>
  );
};
export default CaroselsCommon;
