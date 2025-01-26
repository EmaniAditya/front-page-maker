import React, { useState } from "react"
import { jsPDF } from "jspdf"

function App() {
  const [collegeName, setCollegeName] = useState("SHRI RAWATPURA SARKAR UNIVERSITY")
  const [collegePlace, setCollegePlace] = useState("RAIPUR (C.G.)")
  const [departmentName, setDepartmentName] = useState("Department of Computer Science & Engineering")
  const [logo, setLogo] = useState(null)
  const [purpose, setPurpose] = useState("Project File")
  const [subjectName, setSubjectName] = useState("Unix and Shell Programming")
  const [subjectCode, setSubjectCode] = useState("(BENCS504T)")
  const [sem, setSem] = useState("B.Tech.(CSE) - 5th Semester")
  const [submittedBy, setSubmittedBy] = useState("Submitted By:")
  const [yourName, setYourName] = useState("Name: E S Aaditya Reddy")
  const [enrollNo, setEnrollNo] = useState("Enroll No : SRUAC2188")
  const [rollNo, setRollNo] = useState("Roll No : W2302537")
  const [submittedTo, setSubmittedTo] = useState("Submitted To:")
  const [profName, setProfName] = useState("Miss. Payal Kapadia")
  const [designation, setDesignation] = useState("Assistant Director")

  const handleLogoUpload = (e) => {
    const file = e.target.files[0]
    if (file && file.type.startsWith("image/")) {
      const reader = new FileReader()
      reader.onload = (event) => setLogo(event.target.result)
      reader.readAsDataURL(file)
    } else {
      alert("Please upload a valid image file")
    }
  }

  const generatePDF = () => {
    console.log("button clicked")
  
    const doc = new jsPDF("portrait", "pt", "a4")
  
    // Set dimensions and margins
    const pageWidth = doc.internal.pageSize.width
    const pageHeight = doc.internal.pageSize.height
    const marginX = 40
    const marginY = 40
    const contentWidth = pageWidth - marginX * 2
  
    const titleFontSize = 18
    const subtitleFontSize = 14
    const textFontSize = 12
  
    const lineHeight = 40 
    let currentY = marginY
  
    doc.setFontSize(titleFontSize)
    doc.text(collegeName, pageWidth / 2, currentY, { align: "center" })
    currentY += lineHeight
  
    doc.setFontSize(subtitleFontSize)
    doc.text(collegePlace, pageWidth / 2, currentY, { align: "center" })
    currentY += lineHeight
  
    doc.text(departmentName, pageWidth / 2, currentY, { align: "center" })
    currentY += lineHeight * 1.5
  
    if (logo) {
      const imageWidth = 100 
      const imageHeight = 100
      const imageX = (pageWidth - imageWidth) / 2 
      doc.addImage(logo, "JPEG", imageX, currentY, imageWidth, imageHeight)
      currentY += imageHeight + lineHeight
    }
  
    doc.text(purpose, pageWidth / 2, currentY, { align: "center" })
    currentY += lineHeight
  
    doc.text(subjectName, pageWidth / 2, currentY, { align: "center" })
    currentY += lineHeight
    doc.text(subjectCode, pageWidth / 2, currentY, { align: "center" })
    currentY += lineHeight
    doc.text(sem, pageWidth / 2, currentY, { align: "center" })
    currentY += lineHeight * 2
  
    const submittedByX = marginX
    const submittedToX = pageWidth - marginX
    
    doc.setFontSize(textFontSize)
    doc.text(submittedBy, submittedByX, currentY)
    doc.text(yourName, submittedByX, currentY + lineHeight)
    doc.text(enrollNo, submittedByX, currentY + lineHeight * 2)
    doc.text(rollNo, submittedByX, currentY + lineHeight * 3)
    
  
    doc.text(submittedTo, submittedToX, currentY, { align: "right" })
    doc.text(profName, submittedToX, currentY + lineHeight, { align: "right" })
    doc.text(designation, submittedToX, currentY + lineHeight * 2, { align: "right" })
  
    doc.save(`${subjectName} front page.pdf`)
  }
  
  
  
  

  return (
    <div style={{ fontFamily: "Arial, sans-serif", margin: 0, padding: 0 }}>
      <header className="flex justify-around">
        <p>Front Page Maker</p>
        <p>Developed by Aditya</p>
      </header>
      <div className="w-full bg-white rounded-lg shadow-lg p-8">
        {/* Inputs */}
        <div className="flex-wrap border border-gray-300 p-6 rounded-lg shadow-md bg-white">
          <input
            type="text"
            value={collegeName}
            onChange={(e) => setCollegeName(e.target.value)}
            placeholder="College Name"
            className="border border-gray-300 rounded px-4 py-2"
          />
          <input
            type="text"
            value={collegePlace}
            onChange={(e) => setCollegePlace(e.target.value)}
            placeholder="College Place"
            className="border border-gray-300 rounded px-4 py-2"
          />
          <input
            type="text"
            value={departmentName}
            onChange={(e) => setDepartmentName(e.target.value)}
            placeholder="Department Name"
            className="border border-gray-300 rounded px-4 py-2"
          />
          <input
            type="text"
            value={purpose}
            onChange={(e) => setPurpose(e.target.value)}
            placeholder="Purpose"
            className="border border-gray-300 rounded px-4 py-2"
          />
          <input
            type="text"
            value={subjectName}
            onChange={(e) => setSubjectName(e.target.value)}
            placeholder="Subject Name"
            className="border border-gray-300 rounded px-4 py-2"
          />
          <input
            type="text"
            value={subjectCode}
            onChange={(e) => setSubjectCode(e.target.value)}
            placeholder="Subject Code"
            className="border border-gray-300 rounded px-4 py-2"
          />
          <input
            type="text"
            value={sem}
            onChange={(e) => setSem(e.target.value)}
            placeholder="Branch & Sem"
            className="border border-gray-300 rounded px-4 py-2"
          />
          <input
            type="text"
            value={submittedBy}
            onChange={(e) => setSubmittedBy(e.target.value)}
            placeholder="Submitted By"
            className="border border-gray-300 rounded px-4 py-2"
          />
          <input
            type="text"
            value={yourName}
            onChange={(e) => setYourName(e.target.value)}
            placeholder="Your Name"
            className="border border-gray-300 rounded px-4 py-2"
          />
          <input
            type="text"
            value={enrollNo}
            onChange={(e) => setEnrollNo(e.target.value)}
            placeholder="Enroll No"
            className="border border-gray-300 rounded px-4 py-2"
          />
          <input
            type="text"
            value={rollNo}
            onChange={(e) => setRollNo(e.target.value)}
            placeholder="Roll No"
            className="border border-gray-300 rounded px-4 py-2"
          />
          <input
            type="text"
            value={submittedTo}
            onChange={(e) => setSubmittedTo(e.target.value)}
            placeholder="Submitted To"
            className="border border-gray-300 rounded px-4 py-2"
          />
          <input
            type="text"
            value={profName}
            onChange={(e) => setProfName(e.target.value)}
            placeholder="Professor Name"
            className="border border-gray-300 rounded px-4 py-2"
          />
          <input
            type="text"
            value={designation}
            onChange={(e) => setDesignation(e.target.value)}
            placeholder="Designation"
            className="border border-gray-300 rounded px-4 py-2"
          />
          <input
            type="file"
            accept="image/*"
            onChange={handleLogoUpload}
            className="border border-gray-300 rounded px-4 py-2"
          />
        </div>

        <button
          onClick={generatePDF}
          className="bg-blue-500 text-white px-4 py-2 rounded mt-4"
        >
          Download PDF
        </button>

        {/* Preview Section */}
        <div
          id="preview"
          className="border border-gray-300 p-6 rounded-lg shadow-md bg-white mt-4"
          style={{
            width: "21cm",
            height: "29.7cm",
            padding: "1cm",
            boxSizing: "border-box",
          }}
        >
          <div className="text-center">
            <h1 className="text-2xl font-bold">{collegeName}</h1>
            <h2 className="text-lg">{collegePlace}</h2>
            <h3 className="text-xl font-semibold mt-2">{departmentName}</h3>
            {logo && <img src={logo} alt="Logo" className="mx-auto my-4 w-40 h-40" />}
            <h4 className="text-lg font-semibold mt-4">{purpose}</h4>
            <p className="mt-2 text-md">{subjectName}</p>
            <p className="text-md">{subjectCode}</p>
            <p className="text-md">{sem}</p>
            <div className="mt-8 grid grid-cols-2 gap-4">
              <div>
                <p className="font-semibold">{submittedBy}</p>
                <p>{yourName}</p>
                <p>{enrollNo}</p>
                <p>{rollNo}</p>
              </div>
              <div>
                <p className="font-semibold">{submittedTo}</p>
                <p>{profName}</p>
                <p>{designation}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
