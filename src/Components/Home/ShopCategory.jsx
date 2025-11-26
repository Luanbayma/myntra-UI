import Categoryheading from "./CategoryHeading";

const ShopCategory = () => {
  const images = [
    [
      "assets/category/category-1.webp",
      "assets/category/category-2.webp",
      "assets/category/category-3.webp",
      "assets/category/category-4.webp",
      "assets/category/category-5.webp",
      "assets/category/category-6.webp",
    ],
    [
      "assets/category/category-7.webp",
      "assets/category/category-8.webp",
      "assets/category/category-9.webp",
      "assets/category/category-10.webp",
      "assets/category/category-11.webp",
      "assets/category/category-12.webp",
    ],
    [
      "assets/category/category-13.webp",
      "assets/category/category-14.webp",
      "assets/category/category-15.webp",
      "assets/category/category-16.webp",
      "assets/category/category-17.webp",
      "assets/category/category-18.webp",
    ],
    [
      "assets/category/category-19.webp",
      "assets/category/category-20.webp",
      "assets/category/category-21.webp",
      "assets/category/category-22.webp",
      "assets/category/category-23.webp",
      "assets/category/category-24.webp",
    ],
    [
      "assets/category/category-25.webp",
      "assets/category/category-26.webp",
      "assets/category/category-27.webp",
      "assets/category/category-28.webp",
      "assets/category/category-29.webp",
      "assets/category/category-30.webp",
    ],
    [
      "assets/category/category-31.webp",
      "assets/category/category-32.webp",
      "assets/category/category-33.webp",
    ],
  ];

  return (
    <div className="shop-category-container">
      <div className="shop-category-heading">
        <Categoryheading header="shop by category" />
      </div>

      <div className="flex ">
        <div className="shop-categories w-full">
          {images.map((imgage, idx) => (
            <div key={idx} className="upper-container flex justify-center">
              {imgage.map((img, idx) => (
                <a href="/" className="inner-container ">
                  <img key={idx} src={img} alt="category shopping" />
                </a>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default ShopCategory;
