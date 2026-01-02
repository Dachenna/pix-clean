'use client';
import { useState, useEffect } from 'react'
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { buttonVariants } from '../ui/button';
import { ThemeToggle } from '../web/theme-toggle';
import { Sign } from 'crypto';

const navBar = [
    {id: 'About', link: '/about', title: 'About'},
    {id: "Contact", link: "/contact", title: "Contact us"}
];

export  function Navbar() {
    const router = useRouter();
  const [scrolled, setScrolled] = useState(false);

  // Handle navbar background on scroll
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 transition-all duration-300 ${
      scrolled ? 'bg-white/80 dark:bg-gray-900/80 backdrop-blur-md shadow-lg' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="shrink-0">
            <Link href="/" className="flex items-center">
              <span className="text-2xl font-extrabold tracking-tight bg-linear-to-r from-orange-300 to-orange-400 bg-clip-text text-transparent dark:from-orange-400 dark:to-orange-300">
                Pixc
              </span>
              <span className="text-2xl font-extrabold tracking-tight text-gray-900 dark:text-gray-100">
                lean
              </span>
            </Link>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:block">
            <ul className="flex items-center space-x-8">
              {navBar.map((item) => (
                <li key={item.id}>
                  <Link 
                    href={item.link} 
                    className={buttonVariants({ variant: 'secondary' })}
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Actions */}
          <div className="flex items-center space-x-2">
              <Link href="/auth/signup" className={buttonVariants({ variant: 'outline' })}>
                Sign Up
              </Link>
              <ThemeToggle />
          </div>
        </div>
        </div>
    </nav>
  )
}