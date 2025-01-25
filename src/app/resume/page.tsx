'use client'

export default function Resume() {
  const handleDownload = (format: 'pdf') => {
    if (format === 'pdf') {
      // Trigger the PDF download
      const link = document.createElement('a')
      link.href = '/assets/Mohan_Krishna_Resume.pdf' // Path to the PDF in the public folder
      link.download = 'Mohan_Krishna_Resume.pdf' // Name of the file when downloaded
      link.click()
    } 
  }

  return (
    <main className="pt-32 pb-20">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="flex justify-center gap-4 mb-20">
          <button
            onClick={() => handleDownload('pdf')}
            className="border border-white px-8 py-3 min-w-[300px] hover:bg-white hover:text-[#1a1a1a] transition-colors"
          >
            Download a PDF
          </button>
          
        </div>

        <section className="mb-20">
          <h2 className="gothic-heading text-4xl mb-12 text-center">Professional Experience</h2>
          <div className="space-y-12">
            <div>
              <h3 className="text-xl mb-2"><b>Trainee Decision Scientist</b> • <b>MuSigma</b> • Jul, 2023 - Apr, 2024</h3>
              <ul className="space-y-2">
                <li className="flex gap-2">
                  <span className="text-xl">★</span>
                  <span>Executed data wrangling tasks to clean and prepare datasets for predictive modeling, utilizing Python libraries such as Pandas and NumPy.</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-xl">★</span>
                  <span>Designed and implemented data transformations, including encoding, feature scaling, and aggregation, to optimize datasets for machine learning algorithms.</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-xl">★</span>
                  <span>Conducted exploratory data analysis (EDA) using Pandas and Seaborn to uncover trends, anomalies, and patterns, resulting in valuable insights.</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-xl">★</span>
                  <span>Developed and showcased interactive data visualizations with Microsoft Power BI to effectively communicate findings.</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        <section className="mb-20">
          <h2 className="gothic-heading text-4xl mb-12 text-center">Education</h2>
          <h3 className="text-xl mb-2">Bachelor of Technology • Koneru Lakshmaiah University • 2019 - 2023</h3>
          <div className="flex gap-2">
            <span className="text-xl">★</span>
            <span>Computer Science and Engineering - <b>7.97</b> GPA</span>
          </div>
          <div className="flex gap-2">
            <span className="text-xl">★</span>
            <span>Academic Achievement: Graduated with <b>Distinction</b>.</span>
          </div>
        </section>

        <section className="mb-20">
          <h2 className="gothic-heading text-4xl mb-12 text-center">Technical Expertise</h2>
          <div className="grid grid-cols-2 gap-y-6 max-w-3xl mx-auto">
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <span className="text-xl w-6 text-center">★</span>
                <span>Python</span>
              </div>
              <div className="flex items-center gap-4">
                <span className="text-xl w-6 text-center">★</span>
                <span>Pandas</span>
              </div>
              <div className="flex items-center gap-4">
                <span className="text-xl w-6 text-center">★</span>
                <span>Numpy</span>
              </div>
              <div className="flex items-center gap-4">
                <span className="text-xl w-6 text-center">★</span>
                <span>Matplotlib</span>
              </div>
              <div className="flex items-center gap-4">
                <span className="text-xl w-6 text-center">★</span>
                <span>Seaborn</span>
              </div>
              <div className="flex items-center gap-4">
                <span className="text-xl w-6 text-center">★</span>
                <span>BeautifulSoup</span>
              </div>
              <div className="flex items-center gap-4">
                <span className="text-xl w-6 text-center">★</span>
                <span>Scikit-learn</span>
              </div>
              <div className="flex items-center gap-4">
                <span className="text-xl w-6 text-center">★</span>
                <span>TensorFlow</span>
              </div>
            </div>
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <span className="text-xl w-6 text-center">★</span>
                <span>OpenCV</span>
              </div>
              <div className="flex items-center gap-4">
                <span className="text-xl w-6 text-center">★</span>
                <span>Streamlit</span>
              </div>
              <div className="flex items-center gap-4">
                <span className="text-xl w-6 text-center">★</span>
                <span>Data Wrangling</span>
              </div>
              <div className="flex items-center gap-4">
                <span className="text-xl w-6 text-center">★</span>
                <span>MySQL</span>
              </div>
              <div className="flex items-center gap-4">
                <span className="text-xl w-6 text-center">★</span>
                <span>PostgreSQL</span>
              </div>
              <div className="flex items-center gap-4">
                <span className="text-xl w-6 text-center">★</span>
                <span>Microoft Power BI</span>
              </div>
              <div className="flex items-center gap-4">
                <span className="text-xl w-6 text-center">★</span>
                <span>MS Excel</span>
              </div>
              
            </div>
          </div>
        </section>

      </div>
    </main>
  )
}
