


import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Mohan Krishna Portfolio',
  description: 'Data Analyst',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} bg-[#1a1a1a] text-white min-h-screen`}>
        <Header />
        {children}
        <Footer />

        <script type="module">
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/11.2.0/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.2.0/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyBbArEbMnnbNmFtMzp3vfZBp8xPWT1Vajc",
    authDomain: "mohan-krishna-portfolio.firebaseapp.com",
    projectId: "mohan-krishna-portfolio",
    storageBucket: "mohan-krishna-portfolio.firebasestorage.app",
    messagingSenderId: "236558379051",
    appId: "1:236558379051:web:e1b38a865958a5a4f4626e",
    measurementId: "G-GDVSHTPMY7"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
</script>

      </body>
    </html>
  )
}