'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function Header() {
  const pathname = usePathname()

  const scrollToFooter = (e: React.MouseEvent) => {
    e.preventDefault()
    document.getElementById('footer')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#1a1a1a] py-4">
      <div className="container mx-auto px-4 flex justify-between items-center">
        
        <Link href="/" className="gothic-heading text-2xl text-white ">
          Mohan Krishna Tangirala
        </Link>
        <nav className="flex items-center gap-8">
          <Link 
            href="/work"
            className={`text-white hover:text-blue-500 transition-colors ${pathname === '/work' ? 'opacity-100' : 'opacity-70'}`}
          >
            My Work
          </Link>
          <Link 
            href="/resume"
            className={`text-white hover:text-blue-500 transition-colors ${pathname === '/resume' ? 'opacity-100' : 'opacity-70'}`}
          >
            Resume
          </Link>
          <button
            onClick={scrollToFooter}
            className="border border-white px-4 py-2 text-white hover:bg-white hover:text-[#1a1a1a] transition-colors"
          >
            Get in touch
          </button>
        </nav>
      </div>
    </header>
  )
}
