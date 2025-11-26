import { useEffect, useRef, useState } from "react";
import { GoDotFill } from "react-icons/go";

const Hero = () => {
  const images = [
    "assets/slider-1.webp",
    "assets/slider-2.webp",
    "assets/slider-3.webp",
    "assets/slider-4.webp",
    "assets/slider-5.webp",
  ];

  const [current, setCurrent] = useState(0);
  const intervalRef = useRef(null); // store interval ID

  const startInterval = () => {
    // Clear any existing interval
    if (intervalRef.current) clearInterval(intervalRef.current);

    // Start new interval
    intervalRef.current = setInterval(() => {
      setCurrent((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    }, 7000); // 7 seconds
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
    <section className="mt-20 pt-7">
      <div className="hero-container ">
        {/* upper hero section */}
        <div className="px-14">
          <a href="/">
            <img
              src="assets/upperHero.webp"
              className="w-full h-full object-cover"
              alt="myntra-hero"
              draggable="false"
            />
          </a>
        </div>

        {/* lower hero section slider */}
        <div className="relative w-full overflow-hidden pt-[20px] pb-[15px]">
          {/* Slider Content */}
          <div
            className="flex transition-transform duration-500"
            style={{ transform: `translateX(-${current * 100}%)` }}
          >
            {images.map((src, index) => (
              <a key={index} href="/" className="w-full flex-shrink-0">
                <img src={src} draggable="false" />
              </a>
            ))}
          </div>

          {/* control buttons */}
          <div className="flex justify-center">
            {images.map((_, idx) => {
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
        {/* hero ends */}
      </div>
    </section>
  );
};
export default Hero;
