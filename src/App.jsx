import React, { useState } from "react"
import html2pdf from 'html2pdf.js'


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
    console.log('button clicked');
    const element = document.getElementById('preview')
    if(!element) {
      console.log('preview not found');
    }
    const options = {
      margin: 0.5,
      filename: `${subjectName} front page.pdf`,
      // image: {type: 'jpeg', quality: 0.98},
      html2canvas: {scale: 2},
      jsPDF: {unit: 'in', format: 'a4', orientation: 'potrait'}
    }

    html2pdf().from(element).set(options).save()
  }

  return <div style={{ fontFamily: "Arial, sans-serif", margin: 0, padding: 0 }}>
  <header className="flex justify-around">
      <p>Fornt Page Maker</p>
      <p>Developed by Aditya</p>
    </header>
    <div className="w-full bg-white rounded-lg shadow-lg p-8">
      {/* // inputs */}
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


      {/* // preview */}
      <div id="preview" className="border border-gray-300 p-6 rounded-lg shadow-md bg-white" 
      style={{
        width: "21cm",
        height: "29.7cm",
        padding: "2cm",
        boxSizing: "border-box",
      }}>
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
}

export default App
