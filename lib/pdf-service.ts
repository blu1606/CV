// PDF Generation Service
import jsPDF from 'jspdf'

export interface PDFOptions {
  format: 'A4' | 'Letter'
  orientation: 'portrait' | 'landscape'
  margin: number
  fontSize: number
}

export class PDFService {
  private static instance: PDFService

  static getInstance(): PDFService {
    if (!PDFService.instance) {
      PDFService.instance = new PDFService()
    }
    return PDFService.instance
  }

  async generatePDF(cvData: any, options: PDFOptions = {
    format: 'A4',
    orientation: 'portrait',
    margin: 20,
    fontSize: 11
  }): Promise<Blob> {
    const doc = new jsPDF({
      orientation: options.orientation,
      unit: 'mm',
      format: options.format
    })

    const pageWidth = doc.internal.pageSize.getWidth()
    const pageHeight = doc.internal.pageSize.getHeight()
    let yPosition = options.margin

    // Helper function to add text with word wrap
    const addText = (text: string, x: number, y: number, maxWidth: number, fontSize: number = options.fontSize) => {
      doc.setFontSize(fontSize)
      const lines = doc.splitTextToSize(text, maxWidth)
      doc.text(lines, x, y)
      return y + (lines.length * fontSize * 0.4)
    }

    // Helper function to add section header
    const addSectionHeader = (title: string, y: number) => {
      doc.setFontSize(14)
      doc.setFont('helvetica', 'bold')
      doc.text(title, options.margin, y)
      doc.setFont('helvetica', 'normal')
      return y + 8
    }

    // Header Section
    doc.setFontSize(20)
    doc.setFont('helvetica', 'bold')
    doc.text(cvData.name || 'Your Name', options.margin, yPosition)
    yPosition += 6

    doc.setFontSize(options.fontSize)
    doc.setFont('helvetica', 'normal')
    const contactInfo = [
      cvData.email,
      cvData.phone,
      // Add more contact info as needed
    ].filter(Boolean).join(' • ')
    
    if (contactInfo) {
      doc.text(contactInfo, options.margin, yPosition)
      yPosition += 8
    }

    // Professional Summary
    if (cvData.summary) {
      yPosition = addSectionHeader('PROFESSIONAL SUMMARY', yPosition)
      yPosition = addText(cvData.summary, options.margin, yPosition, pageWidth - (options.margin * 2)) + 4
    }

    // Experience Section
    if (cvData.experience && cvData.experience.length > 0) {
      yPosition = addSectionHeader('EXPERIENCE', yPosition)
      
      cvData.experience.forEach((exp: any) => {
        // Check if we need a new page
        if (yPosition > pageHeight - 40) {
          doc.addPage()
          yPosition = options.margin
        }

        // Job title and company
        doc.setFont('helvetica', 'bold')
        yPosition = addText(exp.title || 'Job Title', options.margin, yPosition, pageWidth - (options.margin * 2), 12)
        
        doc.setFont('helvetica', 'normal')
        const companyAndDates = [
          exp.company || 'Company',
          exp.startDate && exp.endDate ? `${exp.startDate} - ${exp.endDate}` : exp.startDate || exp.endDate
        ].filter(Boolean).join(' | ')
        
        yPosition = addText(companyAndDates, options.margin, yPosition, pageWidth - (options.margin * 2)) + 2

        // Job description
        if (exp.description) {
          yPosition = addText(exp.description, options.margin, yPosition, pageWidth - (options.margin * 2)) + 4
        }

        // Achievements
        if (exp.achievements && exp.achievements.length > 0) {
          exp.achievements.forEach((achievement: string) => {
            yPosition = addText(`• ${achievement}`, options.margin + 5, yPosition, pageWidth - (options.margin * 2) - 5) + 1
          })
          yPosition += 2
        }
      })
    }

    // Education Section
    if (cvData.education && cvData.education.length > 0) {
      yPosition = addSectionHeader('EDUCATION', yPosition)
      
      cvData.education.forEach((edu: any) => {
        if (yPosition > pageHeight - 30) {
          doc.addPage()
          yPosition = options.margin
        }

        const educationText = [
          edu.degree || 'Degree',
          edu.school || 'School',
          edu.field ? `in ${edu.field}` : ''
        ].filter(Boolean).join(' ')

        yPosition = addText(educationText, options.margin, yPosition, pageWidth - (options.margin * 2)) + 4
      })
    }

    // Skills Section
    if (cvData.skills && cvData.skills.length > 0) {
      yPosition = addSectionHeader('SKILLS', yPosition)
      
      if (yPosition > pageHeight - 20) {
        doc.addPage()
        yPosition = options.margin
      }

      const skillsText = cvData.skills.join(' • ')
      yPosition = addText(skillsText, options.margin, yPosition, pageWidth - (options.margin * 2)) + 4
    }

    // Projects Section
    if (cvData.projects && cvData.projects.length > 0) {
      yPosition = addSectionHeader('PROJECTS', yPosition)
      
      cvData.projects.forEach((project: any) => {
        if (yPosition > pageHeight - 40) {
          doc.addPage()
          yPosition = options.margin
        }

        doc.setFont('helvetica', 'bold')
        yPosition = addText(project.name || 'Project Name', options.margin, yPosition, pageWidth - (options.margin * 2), 12)
        
        doc.setFont('helvetica', 'normal')
        if (project.description) {
          yPosition = addText(project.description, options.margin, yPosition, pageWidth - (options.margin * 2)) + 2
        }
        
        if (project.technologies && project.technologies.length > 0) {
          const techText = `Technologies: ${project.technologies.join(', ')}`
          yPosition = addText(techText, options.margin, yPosition, pageWidth - (options.margin * 2)) + 4
        }
      })
    }

    // Generate blob
    const pdfBlob = doc.output('blob')
    return pdfBlob
  }

  async downloadPDF(cvData: any, filename?: string): Promise<void> {
    try {
      const pdfBlob = await this.generatePDF(cvData)
      const url = URL.createObjectURL(pdfBlob)
      const link = document.createElement('a')
      link.href = url
      link.download = filename || `${cvData.name?.replace(/\s+/g, '_') || 'CV'}_Resume.pdf`
      document.body.appendChild(link)
      link.click()
      document.body.removeChild(link)
      URL.revokeObjectURL(url)
    } catch (error) {
      console.error('PDF generation failed:', error)
      throw new Error('Failed to generate PDF. Please try again.')
    }
  }
}

export const pdfService = PDFService.getInstance()

