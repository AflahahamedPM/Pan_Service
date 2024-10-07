import React from "react";

const PanApplicationPhoneNumber = ({ phoneNumber, setPhoneNumber }) => {
  return (
    <div className="w-52 m-4 mb-10">
      <h1 className="text-[18px] text-custom-snow-contrast mb-2 font-light">
        Mobile Number <span className="text-red-500">*</span>
      </h1>
      <input
        type="text"
        name="Phone-Number"
        value={phoneNumber}
        onChange={(e) => setPhoneNumber(e.target.value)}
        required
        maxLength={10}
        className="border border-gray-300 w-full rounded-md font-light px-3 py-2 text-[14px] leading-3 cursor-pointer outline-none"
      />
    </div>
  );
};

export default PanApplicationPhoneNumber;
