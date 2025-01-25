'use client'

import { useState } from 'react'
import axios from 'axios'
import Image from 'next/image'
import Link from 'next/link'

const socialLinks = [
  {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/mohankrishnatangirala/',
    icon: 'assets/linked.avif',
  },
  {
    name: 'Instagram',
    url: 'https://www.instagram.com/krish__712/',
    icon: 'assets/insta.png',
  },
  {
    name: 'GitHub',
    url: 'https://github.com/Mohan-Krishna-Tangirala',
    icon: 'assets/git.webp',
  },
  {
    name: 'StopStalk',
    url: 'https://www.stopstalk.com/user/profile/krish712',
    icon: 'assets/ss.png',
  },
]

export default function Footer() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [status, setStatus] = useState('')

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    // Basic validation
    if (!name || !email || !message) {
      setStatus('All fields are required!')
      return
    }

    try {
      const response = await axios.post('http://localhost:5000/submit_form', {
        name,
        email,
        message,
      })

      if (response.data.status === 'success') {
        setStatus('Form submitted successfully!')
        setName('')
        setEmail('')
        setMessage('')
      }
    } catch {
      setStatus('Failed to submit form. Please try again later.')
    }
  }

  return (
    <footer id="footer" className="bg-[#1a1a1a] pt-20 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div>
            <h2 className="gothic-heading text-4xl mb-4">Get in Touch</h2>
            <p className="text-gray-400 mb-8">
              Currently open to both full-time and freelance opportunities in Data Analyst, Data Scientist, 
              Machine Learning Engineer, and Business Analyst roles.
            </p>
          </div>
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <input
                type="text"
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full bg-transparent border-b border-white p-2 text-white placeholder-gray-400 focus:outline-none"
              />
            </div>
            <div>
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full bg-transparent border-b border-white p-2 text-white placeholder-gray-400 focus:outline-none"
              />
            </div>
            <div>
              <textarea
                placeholder="How Can I Help?"
                rows={4}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="w-full bg-transparent border-b border-white p-2 text-white placeholder-gray-400 focus:outline-none"
              />
            </div>
            <button
              type="submit"
              className="border border-white px-8 py-2 text-white hover:bg-white hover:text-[#1a1a1a] transition-colors"
            >
              Submit
            </button>
          </form>
          {status && <p className="text-white mt-4">{status}</p>}
        </div>

        <div className="mt-20">
          <h3 className="gothic-heading text-2xl mb-6">Follow Along</h3>
          <div className="flex gap-4">
            {socialLinks.map((link, index) => (
              <Link
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon"
              >
                <div className="border border-white p-2 w-12 h-12 flex items-center justify-center">
                  <Image
                    src={link.icon}
                    alt={link.name}
                    width={40}
                    height={40}
                  />
                </div>
              </Link>
            ))}
          </div>
        </div>

        <div className="mt-12 flex justify-between items-center">
          <p className="text-sm text-gray-400">© 2025 Mohan Krishna Tangirala</p>
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="border border-white px-4 py-2 text-white hover:bg-white hover:text-[#1a1a1a] transition-colors"
          >
            Back to top ↑
          </button>
        </div>
      </div>
    </footer>
  )
}
