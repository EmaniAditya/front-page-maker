import { useState } from 'react';
import html2pdf from 'html2pdf.js';

function App() {
  const [collegeName, setCollegeName] = useState('SHRI RAWATPURA SARKAR UNIVERSITY');
  const [collegePlace, setCollegePlace] = useState('RAIPUR (C.G.)');
  const [departmentName, setDepartmentName] = useState('Department of Computer Science & Engineering');
  const [logo, setLogo] = useState(null);
  const [purpose, setPurpose] = useState('Project File');
  const [subjectName, setSubjectName] = useState('Unix and Shell Programming');
  const [subjectCode, setSubjectCode] = useState('(BENCS504T)');
  const [sem, setSem] = useState('B.Tech.(CSE) - 5th Semester');
  const [submittedBy, setSubmittedBy] = useState('Submitted By:');
  const [yourName, setYourName] = useState('Name: E S Aaditya Reddy');
  const [enrollNo, setEnrollNo] = useState('Enroll No : SRUAC2188');
  const [rollNo, setRollNo] = useState('Roll No : W2302537');
  const [submittedTo, setSubmittedTo] = useState('Submitted To:');
  const [profName, setProfName] = useState('Miss. Payal Kapadia');
  const [designation, setDesignation] = useState('Assistant Director');

  const handleLogoUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setLogo(URL.createObjectURL(file));
    }
  };

  const handleDownload = () => {
    const element = document.querySelector('.preview');
    html2pdf()
      .from(element)
      .save(`${subjectName} front page.pdf`);
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-gray-100">
      <div className="w-full md:w-2/3 lg:w-1/2 bg-white p-6 rounded-lg shadow-lg">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Form Section */}
          <div className="space-y-4">
            <input
              type="text"
              value={collegeName}
              placeholder="University Name"
              onChange={(e) => setCollegeName(e.target.value)}
              className="p-2 w-full border border-gray-300 rounded-md"
            />
            <input
              type="text"
              value={collegePlace}
              placeholder="College Place"
              onChange={(e) => setCollegePlace(e.target.value)}
              className="p-2 w-full border border-gray-300 rounded-md"
            />
            <input
              type="text"
              value={departmentName}
              placeholder="Department Name"
              onChange={(e) => setDepartmentName(e.target.value)}
              className="p-2 w-full border border-gray-300 rounded-md"
            />
            <div>
              <input
                type="file"
                accept="image/*"
                onChange={handleLogoUpload}
                className="p-2 w-full border border-gray-300 rounded-md"
              />
              {logo && <img src={logo} alt="College Logo" width="100" className="mt-2" />}
            </div>
            <input
              type="text"
              value={purpose}
              placeholder="Purpose"
              onChange={(e) => setPurpose(e.target.value)}
              className="p-2 w-full border border-gray-300 rounded-md"
            />
            <input
              type="text"
              value={subjectName}
              placeholder="Subject Name"
              onChange={(e) => setSubjectName(e.target.value)}
              className="p-2 w-full border border-gray-300 rounded-md"
            />
            <input
              type="text"
              value={subjectCode}
              placeholder="Subject Code"
              onChange={(e) => setSubjectCode(e.target.value)}
              className="p-2 w-full border border-gray-300 rounded-md"
            />
            <input
              type="text"
              value={sem}
              placeholder="Branch & Sem"
              onChange={(e) => setSem(e.target.value)}
              className="p-2 w-full border border-gray-300 rounded-md"
            />
            <input
              type="text"
              value={submittedBy}
              placeholder="Submitted By"
              onChange={(e) => setSubmittedBy(e.target.value)}
              className="p-2 w-full border border-gray-300 rounded-md"
            />
            <input
              type="text"
              value={yourName}
              placeholder="Your Name"
              onChange={(e) => setYourName(e.target.value)}
              className="p-2 w-full border border-gray-300 rounded-md"
            />
            <input
              type="text"
              value={enrollNo}
              placeholder="Enroll No"
              onChange={(e) => setEnrollNo(e.target.value)}
              className="p-2 w-full border border-gray-300 rounded-md"
            />
            <input
              type="text"
              value={rollNo}
              placeholder="Roll No"
              onChange={(e) => setRollNo(e.target.value)}
              className="p-2 w-full border border-gray-300 rounded-md"
            />
            <input
              type="text"
              value={submittedTo}
              placeholder="Submitted To"
              onChange={(e) => setSubmittedTo(e.target.value)}
              className="p-2 w-full border border-gray-300 rounded-md"
            />
            <input
              type="text"
              value={profName}
              placeholder="Professor's Name"
              onChange={(e) => setProfName(e.target.value)}
              className="p-2 w-full border border-gray-300 rounded-md"
            />
            <input
              type="text"
              value={designation}
              placeholder="Designation"
              onChange={(e) => setDesignation(e.target.value)}
              className="p-2 w-full border border-gray-300 rounded-md"
            />
          </div>

          {/* PDF Preview Section */}
          <div className="preview space-y-4 p-4 border border-gray-300 rounded-md">
            <div className="text-center">
              <p className="text-xl font-semibold">{collegeName}</p>
              <p>{collegePlace}</p>
            </div>
            <div className="text-center">
              <p className="font-semibold">{departmentName}</p>
            </div>
            {logo && (
              <div className="flex justify-center">
                <img src={logo} alt="College Logo" width="100" />
              </div>
            )}
            <div className="text-center">
              <p>{purpose}</p>
            </div>
            <div className="text-center">
              <p>{subjectName}</p>
              <p>{subjectCode}</p>
            </div>
            <div className="text-center">
              <p>{sem}</p>
            </div>
            <div className="text-center">
              <p>{submittedBy}</p>
              <p>{yourName}</p>
              <p>{enrollNo}</p>
              <p>{rollNo}</p>
            </div>
            <div className="text-center">
              <p>{submittedTo}</p>
              <p>{profName}</p>
              <p>{designation}</p>
            </div>
          </div>

          {/* Download Button Section */}
          <div className="flex justify-center mt-4">
            <button
              onClick={handleDownload}
              className="bg-blue-500 text-white px-6 py-2 rounded-md hover:bg-blue-600"
            >
              Download PDF
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
