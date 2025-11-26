import Hero from "./Hero";
import Header from "./Header";
import CaroselsCommon from "./CaroselsCommon";
import ShopCategory from "./ShopCategory";

const Home = () => {
  const images1 = [
    [
      "assets/rising/rising-1-1.webp",
      "assets/rising/rising-1-2.webp",
      "assets/rising/rising-1-3.webp",
      "assets/rising/rising-1-4.webp",
      "assets/rising/rising-1-5.webp",
    ],
    [
      "assets/rising/rising-2-1.webp",
      "assets/rising/rising-2-2.webp",
      "assets/rising/rising-2-3.webp",
      "assets/rising/rising-2-4.webp",
      "assets/rising/rising-2-5.webp",
    ],
    [
      "assets/rising/rising-3-1.webp",
      "assets/rising/rising-3-2.webp",
      "assets/rising/rising-3-3.webp",
      "assets/rising/rising-3-4.webp",
      "assets/rising/rising-3-5.webp",
    ],
  ];
  const images2 = [
    [
      "assets/luxe/luxe-1-1.webp",
      "assets/luxe/luxe-1-2.webp",
      "assets/luxe/luxe-1-3.webp",
      "assets/luxe/luxe-1-4.webp",
      "assets/luxe/luxe-1-5.webp",
      "assets/luxe/luxe-1-6.webp",
    ],
    [
      "assets/luxe/luxe-2-1.webp",
      "assets/luxe/luxe-2-2.webp",
      "assets/luxe/luxe-2-3.webp",
      "assets/luxe/luxe-2-4.webp",
      "assets/luxe/luxe-2-5.webp",
      "assets/luxe/luxe-2-6.webp",
    ],
    [
      "assets/luxe/luxe-3-1.webp",
      "assets/luxe/luxe-3-2.webp",
      "assets/luxe/luxe-3-3.webp",
      "assets/luxe/luxe-3-4.webp",
      "assets/luxe/luxe-3-5.webp",
      "assets/luxe/luxe-3-6.webp",
    ],
  ];
  const images3 = [
    [
      "assets/medal/medal-1-1.webp",
      "assets/medal/medal-1-2.webp",
      "assets/medal/medal-1-3.webp",
      "assets/medal/medal-1-4.webp",
      "assets/medal/medal-1-5.webp",
      "assets/medal/medal-1-6.webp",
    ],
    [
      "assets/medal/medal-2-1.webp",
      "assets/medal/medal-2-2.webp",
      "assets/medal/medal-2-3.webp",
      "assets/medal/medal-2-4.webp",
      "assets/medal/medal-2-5.webp",
      "assets/medal/medal-2-6.webp",
    ],
    [
      "assets/medal/medal-3-1.webp",
      "assets/medal/medal-3-2.webp",
      "assets/medal/medal-3-3.webp",
      "assets/medal/medal-3-4.webp",
      "assets/medal/medal-3-5.webp",
      "assets/medal/medal-3-6.webp",
    ],
    [
      "assets/medal/medal-4-1.webp",
      "assets/medal/medal-4-2.webp",
      "assets/medal/medal-4-3.webp",
      "assets/medal/medal-4-4.webp",
      "assets/medal/medal-4-5.webp",
      "assets/medal/medal-4-6.webp",
    ],
  ];
  const images4 = [
    [
      "assets/grand/grand-1-1.webp",
      "assets/grand/grand-1-2.webp",
      "assets/grand/grand-1-3.webp",
      "assets/grand/grand-1-4.webp",
      "assets/grand/grand-1-5.webp",
      "assets/grand/grand-1-6.webp",
    ],
    [
      "assets/grand/grand-2-1.webp",
      "assets/grand/grand-2-2.webp",
      "assets/grand/grand-2-3.webp",
      "assets/grand/grand-2-4.webp",
      "assets/grand/grand-2-5.webp",
      "assets/grand/grand-2-6.webp",
    ],
  ];
  const slideCount = [
    {
      heading: "rising stars",
      images: images1,
      slideCount: [1, 2, 3],
    },
    {
      heading: "LUXE GRAND REDUCTION DEALS",
      images: images2,
      slideCount: [1, 2, 3],
    },
    {
      heading: "Medal Worthy Brands To Bag",
      images: images3,
      slideCount: [1, 2, 3, 4],
    },
    {
      heading: "Grand Global Brands",
      images: images4,
      slideCount: [1, 2],
    },
  ];

  return (
    <>
      <Header />
      <Hero />
      {slideCount.map((slide, idx) => (
        <CaroselsCommon
          key={idx}
          header={slide.heading}
          images={slide.images}
          imagesCount={slide.slideCount}
        />
      ))}
      <ShopCategory />
    </>
  );
};
export default Home;
