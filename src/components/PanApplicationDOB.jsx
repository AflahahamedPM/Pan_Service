import React from "react";
import "../app/globals.css";

const PanApplicationDOB = ({ DOB, setDOB }) => {
  return (
    <div className="w-52 m-4">
      <h1 className="text-[18px] mb-2 text-custom-snow-contrast font-light">
        Date of Birth <span className="text-red-500">*</span>
      </h1>
      <div>
        <input
          type="date"
          name="DOB"
          value={DOB}
          onChange={(e) => setDOB(e.target.value)}
          className="border border-gray-300 w-full rounded-md font-light px-3 py-2 text-[14px] leading-3 cursor-pointer outline-none"
          required
        />
      </div>
    </div>
  );
};

export default PanApplicationDOB;
