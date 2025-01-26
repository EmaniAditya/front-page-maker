import React from 'react'

export const PreviewSection = ({
  collegeName, collegePlace, departmentName, logo,
  purpose, subjectName, subjectCode, sem,
  submittedBy, yourName, enrollNo, rollNo,
  submittedTo, profName, designation
}) => {
  return (
    <div 
      id="preview"
      className="w-full max-w-[21cm] mx-auto bg-white p-8 shadow-lg"
      style={{
        height: "29.7cm",
        boxSizing: "border-box",
        border: "1px solid #ccc"
      }}
    >
      <div className="text-center mt-16">
        <h1 className="text-2xl font-bold">{collegeName}</h1>
        <h2 className="text-lg">{collegePlace}</h2>
        <h3 className="text-xl font-semibold mt-2">{departmentName}</h3>
        
        {logo && (
          <img 
            src={logo} 
            alt="Logo" 
            className="mx-auto my-4 w-40 h-40 object-contain" 
          />
        )}
        
        <h4 className="text-lg font-semibold mt-4">{purpose}</h4>
        <p className="mt-2 text-md">{subjectName}</p>
        <p className="text-md">{subjectCode}</p>
        <p className="text-md">{sem}</p>
        
        <div className="mt-8 grid grid-cols-2 gap-4">
          <div className="text-left">
            <p className="font-semibold">{submittedBy}</p>
            <p>{yourName}</p>
            <p>{enrollNo}</p>
            <p>{rollNo}</p>
          </div>
          <div className="text-right">
            <p className="font-semibold">{submittedTo}</p>
            <p>{profName}</p>
            <p>{designation}</p>
          </div>
        </div>
      </div>
    </div>
  )
}
