import { useState } from 'react';

function App() {
  const [uni, setUni] = useState("Barauda University");
  const [uniAddress, setUniAddress] = useState("Barauda, Raipur (C. G)");
  const [dep, setDep] = useState("Department of blah-blah");
  const [logo, setLogo] = useState("upload logo here");
  const [purpose, setPurpose] = useState("Assignment File");
  const [subject, setSubject] = useState("Environmental Science IRL");
  const [subCode, setSubCode] = useState("(BC420T)");
  const [sem, setSem] = useState("B.Tech(blah) - SEM V")
  const [by, setBy] = useState({
    "Name": "Adi",
    "Enroll No": "SRUAC2188",
    "Roll Number": "W2302537" 
  })

  const [to, setTo] = useState({
      "Name": "Mr. Reddy",
      "Designation": "SDE Intern"
  })

  return <div>
    <form>
      <input type="text" placeholder='university name'/>
      <input type="text" name="" id="" placeholder='department name'/>
      <input type="file" placeholder='upload logo here'/>
      <input type="text" value="" placeholder='purpose'/>
    </form>
  </div>
}

export default App;
