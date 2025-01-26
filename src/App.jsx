import React, { useState, useRef, useEffect } from "react"
import { jsPDF } from "jspdf"
import { Header } from "./components/Header"
import { InputField } from "./components/InputField"
import { PreviewSection } from "./components/PreviewSection"


function App() {
  const [formData, setFormData] = useState({
    collegeName: "Example University",
    collegePlace: "India",
    departmentName: "Computer Science & Engineering",
    purpose: "Project File",
    subjectName: "Natural Language Processing lab",
    subjectCode: "(BENCS504T)",
    sem: "Btech -CSE 7th Sem",
    submittedBy: "Submitted By:",
    yourName: "Name: Aditya Emani",
    enrollNo: "Enroll No : CSE701",
    rollNo: "Roll No : 701",
    submittedTo: "Submitted To:",
    profName: "Miss. Payal Kapadia",
    designation: "Assistant Director",
    logo: import.meta.env.BASE_URL + "logo.png"
  })

  const handleInputChange = (key) => (e) => {
    setFormData(prev => ({
      ...prev,
      [key]: e.target.value
    }))
  }

  const handleLogoUpload = (e) => {
    const file = e.target.files[0]
    if (file && file.type.startsWith("image/")) {
      const reader = new FileReader()
      reader.onload = (event) => {
        setFormData(prev => ({
          ...prev,
          logo: event.target.result
        }))
      }
      reader.readAsDataURL(file)
    } else {
      alert("Please upload a valid image file")
    }
  }

  const generatePDF = () => {
    const doc = new jsPDF("portrait", "pt", "a4")
  
    const pageWidth = doc.internal.pageSize.width
    const pageHeight = doc.internal.pageSize.height
    const marginX = 50
    const marginY = 125
    const contentWidth = pageWidth - marginX * 2
  
    const titleFontSize = 18
    const subtitleFontSize = 14
    const textFontSize = 12
  
    const lineHeight = 40 
    let currentY = marginY
  
    doc.setFontSize(titleFontSize)
    doc.text(formData.collegeName, pageWidth / 2, currentY, { align: "center" })
    currentY += lineHeight
  
    doc.setFontSize(subtitleFontSize)
    doc.text(formData.collegePlace, pageWidth / 2, currentY, { align: "center" })
    currentY += lineHeight
  
    doc.text(formData.departmentName, pageWidth / 2, currentY, { align: "center" })
    currentY += lineHeight * 1.5
  
    if (formData.logo) {
      const imageWidth = 100 
      const imageHeight = 100
      const imageX = (pageWidth - imageWidth) / 2 
      doc.addImage(formData.logo, "JPEG", imageX, currentY, imageWidth, imageHeight)
      currentY += imageHeight + lineHeight
    }
  
    doc.text(formData.purpose, pageWidth / 2, currentY, { align: "center" })
    currentY += lineHeight
  
    doc.text(formData.subjectName, pageWidth / 2, currentY, { align: "center" })
    currentY += lineHeight
    doc.text(formData.subjectCode, pageWidth / 2, currentY, { align: "center" })
    currentY += lineHeight
    doc.text(formData.sem, pageWidth / 2, currentY, { align: "center" })
    currentY += lineHeight * 2
  
    const submittedByX = marginX
    const submittedToX = pageWidth - marginX
    
    doc.setFontSize(textFontSize)
    doc.text(formData.submittedBy, submittedByX, currentY)
    doc.text(formData.yourName, submittedByX, currentY + lineHeight)
    doc.text(formData.enrollNo, submittedByX, currentY + lineHeight * 2)
    doc.text(formData.rollNo, submittedByX, currentY + lineHeight * 3)
    
    doc.text(formData.submittedTo, submittedToX, currentY, { align: "right" })
    doc.text(formData.profName, submittedToX, currentY + lineHeight, { align: "right" })
    doc.text(formData.designation, submittedToX, currentY + lineHeight * 2, { align: "right" })
  
    doc.save(`${formData.subjectName} front page.pdf`)
  }

  return<div className="min-h-screen bg-gray-100 pt-20">
      <Header />
      
      <div className="container mx-auto px-4 py-8">
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="grid md:grid-cols-2 gap-4">
              {Object.keys(formData)
                .filter(key => key !== 'logo')
                .map(key => (
                  <InputField
                    key={key}
                    label={key.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase())}
                    value={formData[key]}
                    onChange={handleInputChange(key)}
                  />
                ))
              }
              <InputField
                type="file"
                label="Logo"
                onChange={handleLogoUpload}
                accept="image/*"
              />
            </div>
          </div>

          <div className="overflow-auto">
            <PreviewSection {...formData} />
          </div>
        </div>
      </div>
      <div className="fixed bottom-0 w-full">
        <button
          onClick={generatePDF}
          className="w-full mt-4 bg-cyan-500 text-black text-lg font-bold py-2 rounded-md hover:bg-blue-500 hover:text-white transition"
        >
          Download PDF
        </button>
      </div>
    </div>
}

export default App
