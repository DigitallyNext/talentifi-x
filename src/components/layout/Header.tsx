"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Instagram, Linkedin, Facebook, ArrowRight, X, Menu } from "lucide-react";
import Image from "next/image";

export function Header() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const isActive = (path: string) => {
    return pathname === path;
  };

  const getLinkClasses = (path: string) => {
    return isActive(path)
      ? "text-primary font-bold border-b-2 border-secondary pb-1"
      : "text-dark hover:text-primary transition-colors font-medium";
  };

  const getMobileLinkClasses = (path: string) => {
    return isActive(path)
      ? "text-primary font-bold text-xl"
      : "text-dark hover:text-primary transition-colors font-medium text-xl";
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <div className="w-full flex flex-col font-sans sticky top-0 z-100">
      {/* Top Bar */}
      <div className="w-full bg-linear-to-br from-primary to-[#000099]">
        <div className="w-full max-w-7xl mx-auto py-4 px-6 md:px-4 flex items-center justify-between h-10">
          <span className="text-white text-sm font-medium">contact@talentifix.com</span>
          <div className="flex items-center gap-4">
            <Link href="#" className="text-white hover:opacity-80">
              <Instagram size={18} />
            </Link>
            <Link href="#" className="text-white hover:opacity-80">
              <Linkedin size={18} />
            </Link>
            <Link href="#" className="text-white hover:opacity-80">
              <Facebook size={18} />
            </Link>
          </div>
        </div>
      </div>

      {/* Navigation Bar */}
      <nav className="w-full bg-white h-[80px] shadow-sm relative z-50">
        <div className="w-full max-w-7xl mx-auto h-full px-6 md:px-4 flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <Link href="/" className="w-[200px] h-[200px] flex items-center justify-center">
              <Image src="/logos/logo.svg" alt="Talentifi-X Logo" width={200} height={200} />
            </Link>
          </div>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-8">
            <Link href="/" className={getLinkClasses("/")}>
              Home
            </Link>
            <Link href="/" className={getLinkClasses("/why-us")}>
              Why Us
            </Link>
            <Link href="/solutions" className={getLinkClasses("/solutions")}>
              Solutions
            </Link>
            <Link href="/" className={getLinkClasses("/about")}>
              About
            </Link>
            <Link href="/contact" className={getLinkClasses("/contact")}>
              Contact
            </Link>
          </div>

          {/* CTA Button (Desktop) */}
          <Link
            href="/"
            className="hidden md:flex items-center gap-2 bg-[#0000FF] text-white px-6 py-3 rounded-[5px] font-bold uppercase hover:bg-primary/90 transition-colors"
          >
            HIRE TALENT
            <ArrowRight size={20} />
          </Link>

          {/* Mobile Menu Toggle Button */}
          <button
            className="md:hidden p-2 focus:outline-none"
            onClick={toggleMobileMenu}
            aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMobileMenuOpen ? (
              <X size={28} className="text-dark" />
            ) : (
              <Menu size={28} className="text-dark" />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 md:hidden"
          onClick={closeMobileMenu}
        />
      )}

      {/* Mobile Menu Panel */}
      <div
        className={`fixed top-0 right-0 h-full w-[80%] max-w-[320px] bg-white z-50 transform transition-transform duration-300 ease-in-out md:hidden ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
      >
        {/* Mobile Menu Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-100">
          <span className="text-xl font-bold font-notch text-primary">Menu</span>
          <button
            onClick={closeMobileMenu}
            className="p-2 focus:outline-none"
            aria-label="Close menu"
          >
            <X size={24} className="text-dark" />
          </button>
        </div>

        {/* Mobile Menu Links */}
        <div className="flex flex-col p-6 gap-6">
          <Link
            href="/"
            className={getMobileLinkClasses("/")}
            onClick={closeMobileMenu}
          >
            Home
          </Link>
          <Link
            href="/"
            className={getMobileLinkClasses("/why-us")}
            onClick={closeMobileMenu}
          >
            Why Us
          </Link>
          <Link
            href="/solutions"
            className={getMobileLinkClasses("/solutions")}
            onClick={closeMobileMenu}
          >
            Solutions
          </Link>
          <Link
            href="/"
            className={getMobileLinkClasses("/about")}
            onClick={closeMobileMenu}
          >
            About
          </Link>
          <Link
            href="/contact"
            className={getMobileLinkClasses("/contact")}
            onClick={closeMobileMenu}
          >
            Contact
          </Link>

          {/* Mobile CTA Button */}
          <Link
            href="/"
            className="flex items-center justify-center gap-2 bg-[#0000FF] text-white px-6 py-4 rounded-[5px] font-bold uppercase hover:bg-primary/90 transition-colors mt-4"
            onClick={closeMobileMenu}
          >
            HIRE TALENT
            <ArrowRight size={20} />
          </Link>
        </div>

        {/* Mobile Menu Footer - Social Links */}
        <div className="absolute bottom-0 left-0 right-0 p-6 border-t border-gray-100">
          <div className="flex items-center justify-center gap-6">
            <Link href="#" className="text-primary hover:opacity-80">
              <Instagram size={24} />
            </Link>
            <Link href="#" className="text-primary hover:opacity-80">
              <Linkedin size={24} />
            </Link>
            <Link href="#" className="text-primary hover:opacity-80">
              <Facebook size={24} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
