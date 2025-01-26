import React, { useState } from "react";
import jsPDF from "jspdf";

function App() {
  const [collegeName, setCollegeName] = useState("SHRI RAWATPURA SARKAR UNIVERSITY");
  const [collegePlace, setCollegePlace] = useState("RAIPUR (C.G.)");
  const [departmentName, setDepartmentName] = useState("Department of Computer Science & Engineering");
  const [logo, setLogo] = useState(null);
  const [purpose, setPurpose] = useState("Project File");
  const [subjectName, setSubjectName] = useState("Unix and Shell Programming");
  const [subjectCode, setSubjectCode] = useState("(BENCS504T)");
  const [sem, setSem] = useState("B.Tech.(CSE) - 5th Semester");
  const [submittedBy, setSubmittedBy] = useState("Submitted By:");
  const [yourName, setYourName] = useState("Name: E S Aaditya Reddy");
  const [enrollNo, setEnrollNo] = useState("Enroll No : SRUAC2188");
  const [rollNo, setRollNo] = useState("Roll No : W2302537");
  const [submittedTo, setSubmittedTo] = useState("Submitted To:");
  const [profName, setProfName] = useState("Miss. Payal Kapadia");
  const [designation, setDesignation] = useState("Assistant Director");

  const handleLogoUpload = (e) => {
    const file = e.target.files[0];
    if (file && file.type.startsWith("image/")) {
      const reader = new FileReader();
      reader.onload = (event) => setLogo(event.target.result);
      reader.readAsDataURL(file);
    } else {
      alert("Please upload a valid image file");
    }
  };

  const handleDownload = () => {
    const pdf = new jsPDF("p", "mm", "a4");

    pdf.setFont("Roboto", "bold");
    pdf.setFontSize(16);

    pdf.text(collegeName, 105, 20, { align: "center" });
    pdf.setFont("Roboto", "normal");
    pdf.setFontSize(12);
    pdf.text(collegePlace, 105, 30, { align: "center" });

    pdf.setFontSize(14);
    pdf.setFont("Roboto", "bold");
    pdf.text(departmentName, 105, 40, { align: "center" });

    if (logo) {
      pdf.addImage(logo, "PNG", 85, 50, 40, 40);
    }

    pdf.setFontSize(14);
    pdf.setFont("Roboto", "bold");
    pdf.text(purpose, 105, 100, { align: "center" });

    pdf.setFontSize(12);
    pdf.setFont("Roboto", "normal");
    pdf.text(subjectName, 105, 110, { align: "center" });
    pdf.text(subjectCode, 105, 120, { align: "center" });
    pdf.text(sem, 105, 130, { align: "center" });

    pdf.setFont("Roboto", "bold");
    pdf.text(submittedBy, 30, 150);
    pdf.setFont("Roboto", "normal");
    pdf.text(yourName, 30, 160);
    pdf.text(enrollNo, 30, 170);
    pdf.text(rollNo, 30, 180);

    pdf.setFont("Roboto", "bold");
    pdf.text(submittedTo, 140, 150);
    pdf.setFont("Roboto", "normal");
    pdf.text(profName, 140, 160);
    pdf.text(designation, 140, 170);

    pdf.save(`${subjectName}_Front_Page.pdf`);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <div className="w-full max-w-4xl bg-white rounded-lg shadow-lg p-6">
        <div className="grid gap-4">
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
            type="file"
            accept="image/*"
            onChange={handleLogoUpload}
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
            placeholder="Submitted By:"
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
            value={yourName}
            onChange={(e) => setYourName(e.target.value)}
            placeholder="Name:"
            className="border border-gray-300 rounded px-4 py-2"
          />
          <input 
            type="text" 
            value={enrollNo}
            onChange={(e) => setEnrollNo(e.target.value)}
            placeholder="Enroll No:"
            className="border border-gray-300 rounded px-4 py-2"
          />
          <input 
            type="text" 
            value={rollNo}
            onChange={(e) => setRollNo(e.target.value)}
            placeholder="Roll No:"
            className="border border-gray-300 rounded px-4 py-2"
          />
          <input 
            type="text" 
            value={submittedTo}
            onChange={(e) => setSubmittedTo(e.target.value)}
            placeholder="Submitted To:"
            className="border border-gray-300 rounded px-4 py-2"
          />
          <input 
            type="text" 
            value={profName}
            onChange={(e) => setProfName(e.target.value)}
            placeholder="Prof Name:"
            className="border border-gray-300 rounded px-4 py-2"
          />
          <input 
            type="text" 
            value={designation}
            onChange={(e) => setDesignation(e.target.value)}
            placeholder="Prof Designation:"
            className="border border-gray-300 rounded px-4 py-2"
          />
        </div>
        <div className="flex justify-center mt-4">
          <button
            onClick={handleDownload}
            className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
          >
            Download PDF
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
