import React, { useState } from "react";

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
      reader.onload = (event) => {
        setLogo(event.target.result)
      }
      reader.readAsDataURL(file)
    } else {
      alert("Please upload a valid image file")
    }
  }

  return <div>
        <div className="grid gap-4">
          <input
            type="text"
            value={collegeName}
            onChange={(e) => setCollegeName(e.target.value)}
            placeholder="COLLEGE NAME"
            className="border border-gray-300 rounded px-4 py-2"
          />
          <input
            type="text"
            value={collegePlace}
            onChange={(e) => setCollegePlace(e.target.value)}
            placeholder="COLLEGE PLACE"
            className="border border-gray-300 rounded px-4 py-2"
          />
          <input
            type="text"
            value={departmentName}
            onChange={(e) => setDepartmentName(e.target.value)}
            placeholder="DEPARTMENT NAME"
            className="border border-gray-300 rounded px-4 py-2"
          />
          <input
            type="file"
            accept="image/*"
            onChange={handleLogoUpload}
            className="border border-gray-300 rounded px-4 py-2"
          />
          <input
            type="text"
            value={purpose}
            onChange={(e) => setPurpose(e.target.value)}
            placeholder="PURPOSE"
            className="border border-gray-300 rounded px-4 py-2"
          />
          <input
            type="text"
            value={subjectName}
            onChange={(e) => setSubjectName(e.target.value)}
            placeholder="SUBJECT NAME"
            className="border border-gray-300 rounded px-4 py-2"
          />
          <input
            type="text"
            value={subjectCode}
            onChange={(e) => setSubjectCode(e.target.value)}
            placeholder="SUBJECT CODE"
            className="border border-gray-300 rounded px-4 py-2"
          />
          <input
            type="text"
            value={sem}
            onChange={(e) => setSem(e.target.value)}
            placeholder="SEMESTER"
            className="border border-gray-300 rounded px-4 py-2"
          />
          <input
            type="text"
            value={submittedBy}
            onChange={(e) => setSubmittedBy(e.target.value)}
            placeholder="SUBMITTED BY"
            className="border border-gray-300 rounded px-4 py-2"
          />
          <input
            type="text"
            value={yourName}
            onChange={(e) => setYourName(e.target.value)}
            placeholder="YOUR NAME"
            className="border border-gray-300 rounded px-4 py-2"
          />
          <input
            type="text"
            value={enrollNo}
            onChange={(e) => setEnrollNo(e.target.value)}
            placeholder="ENROLLMENT NUMBER"
            className="border border-gray-300 rounded px-4 py-2"
          />
          <input
            type="text"
            value={rollNo}
            onChange={(e) => setRollNo(e.target.value)}
            placeholder="ROLL NUMBER"
            className="border border-gray-300 rounded px-4 py-2"
          />
          <input
            type="text"
            value={submittedTo}
            onChange={(e) => setSubmittedTo(e.target.value)}
            placeholder="SUBMITTED TO"
            className="border border-gray-300 rounded px-4 py-2"
          />
          <input
            type="text"
            value={profName}
            onChange={(e) => setProfName(e.target.value)}
            placeholder="PROFESSOR NAME"
            className="border border-gray-300 rounded px-4 py-2"
          />
          <input
            type="text"
            value={designation}
            onChange={(e) => setDesignation(e.target.value)}
            placeholder="DESIGNATION"
            className="border border-gray-300 rounded px-4 py-2"
          />
        </div>

        // preview
        <div>
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
}

export default App
