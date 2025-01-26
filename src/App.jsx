import {useState} from 'react'

function App() {
  const [collegeName, setCollegeName] = useState('SHRI RAWATPURA SARKAR UNIVERSITY')
  const [collegePlace, setCollegePlace] = useState('RAIPUR (C.G.)')

  const [departmentName, setDepartmentName] = useState('Department of Computer Science & Engineering')
  const [logo, setLogo] = useState(null)

  const [purpose, setPurpose] = useState('Project File')

  const [subjectName, setSubjectName] = useState('Unix and Shell Programming')
  const [subjectCode, setSubjectCode] = useState('(BENCS504T)')

  const [sem, setSem] = useState('B.Tech.(CSE) - 5th Semester')

  const [submittedBy, setSubmittedBy] = useState('Submitted By:')
  const [yourName, setYourName] = useState('Name: E S Aaditya Reddy')
  const [enrollNo, setEnrollNo] = useState('Enroll No : SRUAC2188')
  const [rollNo, setRollNo] = useState('Roll No : W2302537')
  
  const [submittedTo, setSubmittedTo] = useState('Submitted To:')
  const [profName, setProfName] = useState('Miss. Payal Kapadia')
  const [designation, setDesignation] = useState('Assistant Director')


  const handleLogoUpload = (e) => {
    const file = e.target.files[0]
    if(file) {
      setLogo(URL.createObjectURL(file))
    }
  }
  return <div className='flex grid grid-cols-2'>
    <div>
      <div>
        <input 
        type="text" 
        value={collegeName} 
        placeholder="University Name"
        onChange={(e) => setCollegeName(e.target.value)}/>

        <input 
        type="text" 
        value={collegePlace} 
        placeholder="College Place"
        onChange={(e) => setCollegePlace(e.target.value)}/>
      </div>
      <div>
        <input 
        type="text" 
        value={departmentName} 
        placeholder="Department Name"
        onChange={(e) => setDepartmentName(e.target.value)}/>
      </div>
      <div>
        <input 
        type="file" 
        accept='image/' 
        placeholder="upload logo"/>
        {logo && <img src="logo" alt="College Logo" width="100"/>}
      </div>
      <div>
        <input 
        type="text" 
        value={purpose} 
        placeholder="Purpose"
        onChange={(e) => setPurpose(e.target.value)}/>
      </div>
      <div>
        {/* <input type="text" value={"On"} placeholder="On"/> */}
        <input 
        type="text" 
        value={subjectName} 
        placeholder="Subject Name"
        onChange={(e) => setSubjectName(e.target.value)}/>
        
        <input 
        type="text" 
        value={subjectCode} 
        placeholder="Subject Code"
        onChange={(e) => setSubjectCode(e.target.value)}/>
      </div>
      <div>
        {/* <input type="text" defaultValue={"For"} placeholder="For"/> */}

        <input 
        type="text" 
        value={sem} 
        placeholder="Branch & Sem"
        onChange={(e) => setSem(e.target.value)}/>
      </div>
      <div>
        <div>
          <input 
          type="text" 
          value={submittedBy} 
          placeholder="Submitted By"
          onChange={(e) => setSubmittedBy(e.target.value)}/>

          <input 
          type="text" 
          value={yourName} 
          placeholder="Name"
          onChange={(e) => setYourName(e.target.value)}/>

          <input 
          type="text" 
          value={enrollNo} 
          placeholder="Enroll No"
          onChange={(e) => setEnrollNo(e.target.value)}/>

          <input 
          type="text" 
          value={rollNo} 
          placeholder="Roll No"
          onChange={(e) => setRollNo(e.target.value)}/>
        </div>
        <div>
          <input 
          type="text" 
          value={submittedTo} 
          placeholder="Submitted To"
          onChange={(e) => setSubmittedTo(e.target.value)}/>

          <input 
          type="text" 
          value={profName} 
          placeholder="Name"
          onChange={(e) => setProfName(e.target.value)}/>

          <input 
          type="text" 
          value={designation} 
          placeholder="Designation"
          onChange={(e) => setDesignation(e.target.value)}/>
        </div>
      </div>
    </div>
    <div className='preview'>
      <div>
        <p>{collegeName}</p>
        <p>{collegePlace}</p>
      </div>
      <div>
        <p>{departmentName}</p>
      </div>
      <div>
        <img src={logo} alt="College Logo" width="100"/>
      </div>
      <div>
        <p>{purpose}</p>
      </div>
      <div>
        <p>{subjectName}</p>
        <p>{subjectCode}</p>    
      </div>
      <div>
        <p>{sem}</p>
      </div>
      <div>
        <p>{submittedBy}</p>
        <p>{yourName}</p>
        <p>{enrollNo}</p>
        <p>{rollNo}</p>
      </div>
      <div>
        <p>{submittedTo}</p>
        <p>{profName}</p>
        <p>{designation}</p>
      </div>
    </div>
    <div>
        <button onClick={""}>Download PDF</button>
    </div>
  </div>
}

export default App;
