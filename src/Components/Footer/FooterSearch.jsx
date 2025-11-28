const FooterSearch = () => {
  const searches = [
    "Makeup",
    "DressesFor Girls",
    "T-Shirts",
    "Sandals",
    "Headphones",
    "Babydolls",
    "Blazers For Men",
    "Handbags",
    "Ladies Watches",
    "Bags",
    "Sport Shoes",
    "Reebok Shoes",
    "Puma Shoes",
    "Boxers",
    "Wallets",
    "Tops",
    "Earrings",
    "Fastrack Watches",
    "Kurtis",
    "Nike",
    "Smart Watches",
    "Titan Watches",
    "Designer Blouse",
    "Gowns",
    "Rings",
    "Cricket Shoes",
    "Forever 21",
    "Eye Makeup",
    "Photo Frames",
    "Punjabi Suits",
    "Bikini",
    "Myntra Fashion Show",
    "Lipstick",
    "Saree",
    "Watches",
    "Dresses",
    "Lehenga",
    "Nike Shoes",
    "Goggles",
    "Bras",
    "Suit",
    "Chinos",
    "Shoes",
    "Adidas Shoes",
    "Woodland Shoes",
    "Jewellery",
    "Designers Sarees",
  ];

  return (
    <div className="search-wrapper">
      <div className="search-container text-[#696b79] pb-8 border-[#eaeaec] border-solid border-b-2">
        <div className="flex ">
          <p className="uppercase font-bold text-xs w-[140px] h-auto text-black">
            popular searches
          </p>
          <div className="h-[2px] w-full mt-[6px] border-[#eaeaec] border-solid border-t-2"></div>
        </div>
        <div className="mt-7 text-[15px]">
          {searches.map((search, idx) => (
            <a href="/" key={idx}>
              {search}
              {idx === searches.length - 1 ? (
                ""
              ) : (
                <span className="px-[6px]">|</span>
              )}
            </a>
          ))}
        </div>
        <div className="flex justify-between mt-10">
          <div>
            <p>
              In case of any concern,{" "}
              <strong>
                <a href="/" className="text-[#526cd0]">
                  Contact Us
                </a>
              </strong>
            </p>
          </div>
          <div>
            <p>© 2025 www.myntra.com. All rights reserved.</p>
          </div>
          <div>
            <a href="/">A Flipkart company</a>
          </div>
        </div>
      </div>
    </div>
  );
};
export default FooterSearch;
