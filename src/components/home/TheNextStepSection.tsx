import React from 'react';
import Image from 'next/image';
import { Mail, Globe } from 'lucide-react';

const TheNextStepSection = () => {
  return (
    <section className="w-full py-24 px-4 md:px-0 max-w-7xl rounded-2xl my-4 relative bg-white overflow-hidden flex flex-col items-center justify-center lg:min-h-125 shadow-2xl">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/banner-home/Next.webp"
          alt="The Next Step Background"
          fill
          className="object-cover object-top"
          quality={100}
        />
      </div>
      
      {/* Content */}
      <div className="relative z-10 flex flex-col items-center text-center gap-12 max-w-5xl mx-auto">
        
        {/* Headings */}
        <div className="flex flex-col items-center gap-6 -translate-y-20">
          <h2 className="text-[50px] md:text-[80px] font-bold font-notch text-black leading-none uppercase tracking-tight">
            The Next <span className="text-secondary">Step</span><span className="text-primary">.</span>
          </h2>
          <p className="text-2xl md:text-[28px] font-medium font-sans text-black leading-tight">
            Hiring doesn’t need to be complicated. <br />
            <span className="text-[#0000FF] font-bold">It needs to be intentional.</span>
          </p>
        </div>

        {/* Contact Bar */}
        <div className="mt-8 flex flex-col md:flex-row items-center gap-8 md:gap-16 bg-white/80 backdrop-blur-md border border-gray-200 rounded-lg px-8 py-4 shadow-[0px_10px_30px_rgba(0,0,0,0.05)]">
          
          <div className="flex items-center gap-3">
            <Mail className="w-6 h-6 text-[#0000FF]" />
            <span className="text-2xl font-bold text-black">contact@talentifix.com</span>
          </div>

          <div className="w-[1px] h-8 bg-gray-300 hidden md:block" />

          <div className="flex items-center gap-3">
            <Globe className="w-6 h-6 text-[#0000FF]" />
            <span className="text-2xl font-bold text-black">www.talentifix.com</span>
          </div>

        </div>

      </div>
    </section>
  );
};

export default TheNextStepSection;
