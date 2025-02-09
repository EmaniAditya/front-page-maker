import { useState, useEffect } from 'react';
import { jsPDF } from 'jspdf';
import { Header } from './components/Header';
import { InputField } from './components/InputField';
import { PreviewSection } from './components/PreviewSection';
import countapi from 'countapi-js';

function App() {

  useEffect(() => {
    countapi.hit('emaniaditya.github.io', 'front-page-maker')
      .then((result) => {
        console.log('Total visitors:', result.value);
      })
      .catch((error) => {
        console.error('Error tracking visitors:', error);
      });
  }, []);


  const [formData, setFormData] = useState({
    collegeName: 'YOUR COLLEGE NAME HERE',
    collegePlace: 'PLACE HERE',
    departmentName: 'Department of So & So...',
    purpose: 'Project File',
    subjectName: 'Natural Language Processing - NLP',
    subjectCode: '(492001) *subject code',
    sem: 'B.Tech.(CSE) - 7th Sem',
    submittedBy: 'Submitted By:',
    yourName: 'Name: E S Aaditya Reddy',
    enrollNo: 'Enroll No : SRUAC2188',
    rollNo: 'Roll Number : W2302537',
    submittedTo: 'Submitted To:',
    profName: 'Miss. Payal Kapadia',
    logo: import.meta.env.BASE_URL + 'logo.png',
  });

  const handleInputChange = key => e => {
    setFormData(prev => ({
      ...prev,
      [key]: e.target.value,
    }));
  };

  const handleLogoUpload = e => {
    const file = e.target.files[0];
    if (file && file.type.startsWith('image/')) {
      const reader = new FileReader();
      reader.onload = event => {
        setFormData(prev => ({
          ...prev,
          logo: event.target.result,
        }));
      };
      reader.readAsDataURL(file);
    } else {
      alert('Please upload a valid image file');
    }
  };

  const generatePDF = () => {
    const doc = new jsPDF('portrait', 'pt', 'a4');
    const pageWidth = doc.internal.pageSize.width;
    const pageHeight = doc.internal.pageSize.height;
    const marginX = 50;
    let currentY = 120;

    doc.setFontSize(20);
    doc.setFont('helvetica', 'bold');
    doc.text(formData.collegeName, pageWidth / 2, currentY, { align: 'center' });
    currentY += 40;

    doc.setFontSize(16);
    doc.text(formData.collegePlace, pageWidth / 2, currentY, { align: 'center' });
    currentY += 40;

    doc.setFontSize(14);
    doc.text(formData.departmentName, pageWidth / 2, currentY, { align: 'center' });
    currentY += 30;

    if (formData.logo) {
      const imgSize = 80;
      doc.addImage(formData.logo, 'JPEG', (pageWidth - imgSize) / 2, currentY, imgSize, imgSize);
      currentY += imgSize + 60;
    }

    doc.setFontSize(18);
    doc.text(formData.purpose, pageWidth / 2, currentY, { align: 'center' });
    currentY += 40;

    doc.setFontSize(16);
    doc.text(formData.subjectName, pageWidth / 2, currentY, { align: 'center' });
    currentY += 30;
    doc.text(formData.subjectCode, pageWidth / 2, currentY, { align: 'center' });
    currentY += 40;

    doc.text(formData.sem, pageWidth / 2, currentY, { align: 'center' });
    currentY += 80;

    const remainingSpace = pageHeight - currentY;
    const submittedBlockHeight = 100;
    currentY = currentY + (remainingSpace - submittedBlockHeight) / 2;

    doc.setFontSize(12);
    const leftX = marginX;
    const rightX = pageWidth - marginX;

    doc.text(formData.submittedBy, leftX, currentY);
    doc.text(formData.yourName, leftX, currentY + 25);
    doc.text(formData.enrollNo, leftX, currentY + 50);
    doc.text(formData.rollNo, leftX, currentY + 75);

    doc.text(formData.submittedTo, rightX, currentY, { align: 'right' });
    doc.text(formData.profName, rightX, currentY + 25, { align: 'right' });

    doc.save('front-page.pdf');
  };

  return (
    <div className='min-h-screen bg-gray-500 pt-20 pb-10'>
      <Header />

      <div className='container mx-auto px-4 py-8'>
        <div className='grid md:grid-cols-2 gap-8'>
          <div className='bg-white p-6 rounded-lg shadow-md'>
            <div className='grid md:grid-cols-2 gap-4'>
              {Object.keys(formData)
                .filter(key => key !== 'logo')
                .map(key => (
                  <InputField
                    key={key}
                    label={key.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase())}
                    value={formData[key]}
                    onChange={handleInputChange(key)}
                  />
                ))}
              <InputField type='file' label='Logo' onChange={handleLogoUpload} accept='image/*' />
            </div>
          </div>

          <div className='overflow-auto'>
            <PreviewSection {...formData} />
          </div>
        </div>
      </div>
      <div className='fixed bottom-0 w-full'>
        <button
          onClick={generatePDF}
          className='w-full bg-cyan-500 text-black text-lg font-bold py-2 rounded-md hover:bg-blue-500 hover:text-white transition'
        >
          Download PDF
        </button>
      </div>
    </div>
  );
}

export default App;
