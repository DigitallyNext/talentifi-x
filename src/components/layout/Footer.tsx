import React from 'react';
import Link from 'next/link';
import { ArrowRight, Instagram, Linkedin, Facebook } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="w-full bg-white pt-20 pb-0 flex flex-col items-center relative overflow-hidden">
      
      <div className="w-full max-w-7xl mx-auto px-6 md:px-0 flex flex-col gap-20">
        
        {/* Top Section: 3 Columns */}
        <div className="flex flex-col md:flex-row justify-between items-start gap-12 md:gap-8">
          
          {/* Column 1: Statement & Button */}
          <div className="flex flex-col gap-8 ">
            <h3 className="text-[32px] font-bold font-sans text-black leading-tight">
              Staffing isn’t about filling roles. <br />
              It’s about building what comes next.
            </h3>
            <button className="w-fit px-6 py-3 border border-[#0000FF] rounded-[4px] text-[#0000FF] font-bold text-sm tracking-wider flex items-center gap-2 hover:bg-[#0000FF] hover:text-white transition-colors uppercase">
              Know More
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* Divider (Mobile only or spacing) */}
          <div className="hidden md:block w-[1px] h-[150px] bg-gray-300" />

          {/* Column 2: Navigate */}
          <div className="flex flex-col gap-6">
            <h4 className="text-[24px] font-bold font-notch text-black">Navigate</h4>
            <nav className="flex flex-col gap-2">
              {['Home', 'Services', 'Contact', 'About', 'Industries'].map((item) => (
                <Link 
                  key={item} 
                  href="#" 
                  className={`text-[18px] font-medium hover:text-[#0000FF] transition-colors ${item === 'Home' ? 'text-[#0000FF]' : 'text-gray-600'}`}
                >
                  {item}
                </Link>
              ))}
            </nav>
          </div>

          {/* Divider */}
          <div className="hidden md:block w-[1px] h-[150px] bg-gray-300" />

          {/* Column 3: Connect With Us */}
          <div className="flex flex-col gap-6">
            <h4 className="text-[24px] font-bold font-notch text-black">Connect With Us</h4>
            <div className="flex items-center gap-4">
              <Link href="#" className="p-2 border border-[#E5E7EB] rounded-[8px] hover:border-[#0000FF] group transition-colors">
                <Instagram className="w-6 h-6 text-[#0000FF]" />
              </Link>
              <Link href="#" className="p-2 border border-[#E5E7EB] rounded-[8px] hover:border-[#0000FF] group transition-colors">
                <Linkedin className="w-6 h-6 text-[#0000FF]" />
              </Link>
              <Link href="#" className="p-2 border border-[#E5E7EB] rounded-[8px] hover:border-[#0000FF] group transition-colors">
                <Facebook className="w-6 h-6 text-[#0000FF]" />
              </Link>
            </div>
          </div>

        </div>



      </div>
              {/* Bottom Section: Big Text */}
        <div className="w-full flex justify-center lg:-mt-16 lg:-mb-20 mb-16 relative z-0">
          <h1 className="text-[20vw] md:text-[300px] font-bold font-notch bg-gradient-to-r from-[#0000FF] to-[#00DDE2] bg-clip-text text-transparent text-center select-none">
             Talentifi-X
          </h1>
        </div>

        {/* Gradient Overlay & Footer Links */}
        <div className="absolute bottom-0 left-0 w-full h-[200px] bg-gradient-to-t from-white via-white/90 to-transparent flex flex-col justify-end pb-8 z-10">
          <div className="max-w-7xl mx-auto w-full px-6 md:px-0 flex flex-col md:flex-row items-center justify-between gap-4 text-sm font-medium text-gray-500">
            <div className="flex items-center gap-8">
              <Link href="#" className="hover:text-[#0000FF] transition-colors">Terms of Service</Link>
              <Link href="#" className="hover:text-[#0000FF] transition-colors">Privacy Policy</Link>
            </div>
            <p>Talentifi-x Inc © {new Date().getFullYear()}</p>
          </div>
        </div>
    </footer>
  );
};
