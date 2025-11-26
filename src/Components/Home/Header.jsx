import { FaRegHeart } from "react-icons/fa";
import { IoBagOutline, IoPersonOutline, IoSearch } from "react-icons/io5";

const Header = () => {
  const navLinks = [
    { id: 1, name: "men" },
    { id: 2, name: "women" },
    { id: 3, name: "kid" },
    { id: 4, name: "home" },
    { id: 5, name: "beauty" },
    { id: 6, name: "genz" },
    { id: 7, name: "studio" },
  ];

  const actionLink = [
    { id: 1, name: "Profile", icon: <IoPersonOutline /> },
    { id: 2, name: "Wishlist", icon: <FaRegHeart /> },
    { id: 3, name: "Bag", icon: <IoBagOutline /> },
  ];

  return (
    <header
      className="z-10 bg-white h-20 max-h-20 w-100 fixed top-0 left-0 right-0 font-bold flex justify-between 
    items-center shadow-[0_4px_12px_0_rgba(0,0,0,0.05)]"
    >
      {/* left side */}
      <div className="flex ml-[4%]">
        {/* myntra logo */}
        <div className="myntra-logo-cont ">
          <a href="/">
            <img
              src="assets/myntra.webp"
              className="w-[58px] h-[37px] "
              alt="myntra-logo"
              draggable="false"
            />
          </a>
        </div>

        {/* navlinks */}
        <div className="nav-container block mt-2 ml-8">
          <div className="nav-links flex">
            {navLinks.map((link) => (
              <div key={link.id} className="nav-content">
                <a
                  href="/"
                  className={`px-4 pb-[22px] uppercase text-sm tracking-wide ${
                    link.id === 7 ? "reletive" : ""
                  }`}
                >
                  {link.name}
                  {link.id === 7 ? (
                    <span className="text-[#ff3f6c] text-[10px] absolute top-7 ml-1">
                      new
                    </span>
                  ) : (
                    ""
                  )}
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* right side */}
      <div className="flex mr-[2%]">
        {/* input  */}
        <div
          tabIndex={0}
          className="input-query flex bg-[#f5f5f6] w-[373px] rounded-[4px] mr-5 border-2 border-transparent
             focus-within:border-[#f5f5f6] focus-within:border-2 focus-within:bg-white"
        >
          <div className="w-8 h-10 flex items-center justify-center">
            <IoSearch />
          </div>
          <input
            type="text"
            className="bg-[#f5f5f6] p-[10px] pt-[6px] w-[320px] h-10 text-sm outline-0 font-normal
             focus-within:bg-white"
            placeholder="Search for products, brands and more"
          />
        </div>

        {/* action links */}
        <div className="action-links flex items-baseline">
          {actionLink.map((link) => (
            <div key={link.id} className="mx-4 mt-2 flex">
              <a href="/" className="flex flex-col items-center">
                <span className="text-base">{link.icon}</span>
                <span href="/" className="text-xs pt-1">
                  {link.name}
                </span>
              </a>
            </div>
          ))}
        </div>
      </div>
    </header>
  );
};
export default Header;
