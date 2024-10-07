import React from 'react'

const PanApplicationFullName = ({fullName, setFullName}) => {
  return (
    <div className="w-52 m-4 mb-10">
    <h1 className="text-[18px] mb-2 text-custom-snow-contrast font-light">
      Full Name <span className="text-red-500">*</span>
    </h1>
    <input
      type="text"
      name="fullname"
      value={fullName}
      onChange={(e) => setFullName(e.target.value)}
      required
      className="border border-gray-300 w-full rounded-md font-light px-3 py-2 text-[14px] leading-3 cursor-pointer outline-none"
    />
  </div>
  )
}

export default PanApplicationFullName