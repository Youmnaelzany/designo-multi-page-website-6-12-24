"use client"
import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import LogoDark from "../../public/shared/desktop/logo-dark.png";
import HamburgerIcon from "../../public/shared/mobile/icon-hamburger.svg";
import CloseIcon from "../../public/shared/mobile/icon-close.svg";

const links = [
  { name: "OUR COMPANY", href: "/about" },
  { name: "LOCATIONS", href: "/locations" },
  { name: "CONTACT", href: "/contact" },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(prevState => !prevState);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <header className="mx-6 mt-[2.19rem] mb-[2.31rem] md:my-16 md:ml-[2.44rem] md:mr-10 lg:mb-[4.19rem] lg:ml-[10.31rem] lg:mr-[10.38rem] flex items-center justify-between relative">
      <div className='flex items-center justify-between w-full md:w-[12.625rem]'>
        <Link href="/" aria-label='Home'>
          <Image
            src={LogoDark}
            alt="Designo Logo"
            width={202}
            height={27}
            aria-label="Designo Logo"
          />
        </Link>
        <button
          onClick={toggleMenu}
          aria-label={isMenuOpen ? "Close Menu" : "Open Menu"}
          aria-expanded={isMenuOpen}
          aria-controls="mobile-menu"
          className='md:hidden'
        >
          <Image
            src={isMenuOpen ? CloseIcon : HamburgerIcon}
            alt={isMenuOpen ? "Close Icon" : "Hamburger Icon"}
            width={24}
            height={20}
          />
        </button>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <nav id="mobile-menu" className="absolute -left-6 -right-6 top-14 h-[14.6875rem] bg-[#1D1C1E] py-12 px-6" role="menu" aria-hidden={!isMenuOpen}>
          <ul className='space-y-8'>
            {links.map((link, index) => (
              <li key={index}>
                <Link href={link.href} className="block text-white text-2xl leading-[1.5625rem] tracking-[0.125rem] font-normal cursor-pointer">
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      )}

      {/* Desktop menu */}
      <nav className="hidden md:block" role="menu">
        <ul className="flex items-center justify-between gap-x-[2.62rem]">
          {links.map((link, index) => (
            <li key={index}>
              <Link href={link.href} className="text-[#333136] text-sm leading-[0.875rem] tracking-[0.125rem] font-normal hover:underline transition-all duration-300 ease-in-out cursor-pointer">
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
