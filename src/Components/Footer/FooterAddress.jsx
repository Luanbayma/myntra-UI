const FooterAddress = () => {
  const address = [
    "Buildings Alyssa,",
    "Begonia and Clover situated in Embassy Tech Village,",
    "Outer Ring Road,",
    "Devarabeesanahalli Village,",
    "Varthur Hobli,",
    "Bengaluru – 560103, India",
  ];

  return (
    <div className="address-wrapper pb-8 border-[#eaeaec] border-solid border-b-2">
      <div className="address-container text-[#696b79]">
        <p className="mt-8 mb-5">
          <strong>Registered Office Address</strong>
        </p>
        <div className="flex justify-between items-center">
          <div className="text-[15px]">
            {address.map((add, idx) => (
              <p key={idx}>{add}</p>
            ))}
          </div>
          <div className="mt-16 mr-24">
            <p>CIN: U72300KA2007PTC041799</p>
            <p>
              Telephone:{" "}
              <strong className="text-[#526cd0]">+91-80-61561999</strong>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default FooterAddress;
