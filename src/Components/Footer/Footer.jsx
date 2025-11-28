import { FaFacebookSquare, FaYoutube, FaTwitter } from "react-icons/fa";
import { TiSocialInstagram } from "react-icons/ti";
import FooterSearch from "./FooterSearch";
import FooterAddress from "./FooterAddress";
import FooterShopInfo from "./FooterShopInfo";

const Footer = () => {
  const shopAndCustomerLink = [
    [
      {
        para: "online shopping",
        links: [
          "men",
          "women",
          "kids",
          "home",
          "beauty",
          "genz",
          "gift cards",
          "myntra insider",
        ],
        useFul: [
          {
            para: "useFul links",
            links: [
              "blog",
              "carrers",
              "site map",
              "corporate information",
              "whitehat",
              "cleartrip",
              "myntra global",
            ],
          },
        ],
      },
    ],
    [
      {
        para: "customer policies",
        links: [
          "contact us",
          "FAQ",
          "T&C",
          "terms of use",
          "track orders",
          "shopping",
          "cancellation",
          "returns",
          "privacy policy",
          "grivance redressal",
          "FSSAI food safety",
          "connect app",
        ],
        useFul: null,
      },
    ],
  ];

  const icons = [
    <FaFacebookSquare />,
    <FaTwitter />,
    <FaYoutube />,
    <TiSocialInstagram />,
  ];

  const promises = [
    {
      img: "assets/footer/original.png",
      strong: "100% ORIGINAL",
      para: "guarantee for all products at myntra.com",
    },
    {
      img: "assets/footer/return.png",
      strong: "Return within 14days",
      para: "of receiving your order",
    },
  ];

  return (
    <div className="bg-[#fafbfc] pt-12 pb-10 mt-16">
      <footer className="min-w-[980px] max-w-[1080px] mx-auto">
        <div className="footer-container mb-6">
          <div className="footer-generic-info">
            <div className="links-container flex">
              {shopAndCustomerLink.map((shopCustomer, idx) => {
                return (
                  <div key={idx} className={`${idx === 0 ? "pr-5" : ""}`}>
                    <div className="w-[155px]">
                      {shopCustomer.map((sANDc, idx) => (
                        <div key={idx} className="mt-2 ">
                          <div className="para">
                            <p className="uppercase font-bold text-xs">
                              {sANDc.para}
                            </p>
                          </div>
                          <div className="links mt-6">
                            {sANDc.links.map((link, idx) => (
                              <div key={idx}>
                                <a
                                  href="/"
                                  className="pb-1 text-[15px] capitalize text-[#696b79]"
                                >
                                  {link}
                                </a>
                              </div>
                            ))}
                            {sANDc.useFul !== null
                              ? sANDc.useFul.map((useful, idx) => (
                                  <div key={idx}>
                                    <p className="mt-4 mb-3 uppercase font-bold text-xs">
                                      {useful.para}
                                    </p>{" "}
                                    {useful.links.map((link, idx) => (
                                      <div key={idx}>
                                        <a
                                          href="/"
                                          className="pb-1 text-[15px] capitalize text-[#696b79]"
                                        >
                                          {link}
                                        </a>
                                      </div>
                                    ))}
                                  </div>
                                ))
                              : ""}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                );
              })}

              <div className="experience-wrapper pl-2 pt-2 pr-5 w-[380px]">
                <p className="pb-6 uppercase text-xs font-bold">
                  experience myntra app on mobile
                </p>
                <div className="flex">
                  <a href="/">
                    <img
                      src="assets/footer/play-store.png"
                      className="h-[42px] w-[135px] object-cover mr-3"
                      alt="play-store"
                    />
                  </a>
                  <a href="/">
                    <img
                      src="assets/footer/app-store.png"
                      className="h-[42px] w-[120px] object-cover"
                      alt="app-store"
                    />
                  </a>
                </div>
                <div>
                  <p className="text-xs uppercase font-bold mt-6 mb-[14px]">
                    keep in touch
                  </p>
                  <div className="flex">
                    {icons.map((icon, idx) => (
                      <a
                        key={idx}
                        href="/"
                        className="mr-4 text-2xl text-[#696e79]"
                      >
                        {icon}
                      </a>
                    ))}
                  </div>
                </div>
              </div>

              <div className="promises ">
                {promises.map((promis, idx) => (
                  <div key={idx} className="flex w-[250px] my-5">
                    <img
                      src={promis.img}
                      className="w-[48px] h-[40px] mr-[10px] ml-[-10px]"
                      alt="original-mark"
                    />
                    <p>
                      <strong>{promis.strong}</strong>{" "}
                      <span className="text-[#696b79]">{promis.para}</span>
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <FooterSearch />
        <FooterAddress />
        <FooterShopInfo />
      </footer>
    </div>
  );
};
export default Footer;
