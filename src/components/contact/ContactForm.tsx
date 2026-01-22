"use client";

import React from "react";
import { ArrowRight, ChevronDown } from "lucide-react";

export const ContactForm = () => {
  return (
    <section className="w-full bg-[#F2F4F8] py-16 px-4 md:px-8 flex justify-center">
      <div className="w-full max-w-4xl flex flex-col gap-10">
        {/* Header */}
        <div className="flex flex-col gap-4">
          <h2 className="text-[40px] font-bold font-notch text-[#1E1E24]">
            Connect With Us<span className="text-[#00DDE2]">.</span>
          </h2>
          <p className="text-lg text-[#1E1E24] opacity-60 font-medium max-w-2xl">
            Please share a few details about your requirement or area of interest, and a representative will connect with you.
          </p>
        </div>

        {/* Form */}
        <form className="flex flex-col gap-6 w-full">
          {/* Row 1: Name */}
          <div className="flex flex-col md:flex-row gap-6 w-full">
            <div className="flex-1 flex flex-col gap-2">
              <label className="text-lg font-medium text-[#1E1E24]">First Name</label>
              <input 
                type="text" 
                placeholder="John Doe" 
                className="w-full bg-[#F2F4F8] border border-[#1E1E24] rounded-[5px] p-4 text-[#1E1E24] placeholder:text-[#1E1E24]/20 focus:outline-none focus:ring-1 focus:ring-[#0000FF]"
              />
            </div>
            <div className="flex-1 flex flex-col gap-2">
              <label className="text-lg font-medium text-[#1E1E24]">Last Name</label>
              <input 
                type="text" 
                placeholder="John Doe" 
                className="w-full bg-[#F2F4F8] border border-[#1E1E24] rounded-[5px] p-4 text-[#1E1E24] placeholder:text-[#1E1E24]/20 focus:outline-none focus:ring-1 focus:ring-[#0000FF]"
              />
            </div>
          </div>

          {/* Row 2: Organization */}
          <div className="flex flex-col gap-2">
            <label className="text-lg font-medium text-[#1E1E24]">Organization</label>
            <input 
              type="text" 
              placeholder="TalentiFi-X" 
              className="w-full bg-[#F2F4F8] border border-[#1E1E24] rounded-[5px] p-4 text-[#1E1E24] placeholder:text-[#1E1E24]/20 focus:outline-none focus:ring-1 focus:ring-[#0000FF]"
            />
          </div>

          {/* Row 3: Email & Phone */}
          <div className="flex flex-col md:flex-row gap-6 w-full">
            <div className="flex-1 flex flex-col gap-2">
              <label className="text-lg font-medium text-[#1E1E24]">Email ID</label>
              <input 
                type="email" 
                placeholder="johndoe@email.com" 
                className="w-full bg-[#F2F4F8] border border-[#1E1E24] rounded-[5px] p-4 text-[#1E1E24] placeholder:text-[#1E1E24]/20 focus:outline-none focus:ring-1 focus:ring-[#0000FF]"
              />
            </div>
            <div className="flex-1 flex flex-col gap-2">
              <label className="text-lg font-medium text-[#1E1E24]">Contact Number</label>
              <input 
                type="tel" 
                placeholder="+919999887766" 
                className="w-full bg-[#F2F4F8] border border-[#1E1E24] rounded-[5px] p-4 text-[#1E1E24] placeholder:text-[#1E1E24]/20 focus:outline-none focus:ring-1 focus:ring-[#0000FF]"
              />
            </div>
          </div>

          {/* Row 4: Area of Interest */}
          <div className="flex flex-col gap-2">
            <label className="text-lg font-medium text-[#1E1E24]">Area of Interest</label>
            <div className="relative">
              <select className="w-full bg-[#F2F4F8] border border-[#1E1E24] rounded-[5px] p-4 text-[#1E1E24] appearance-none focus:outline-none focus:ring-1 focus:ring-[#0000FF] cursor-pointer">
                <option value="" disabled selected className="text-[#1E1E24]/20">Option 1</option>
                <option value="hiring">Hiring Talent</option>
                <option value="job">Looking for Job</option>
                <option value="partnership">Partnership</option>
                <option value="other">Other</option>
              </select>
              <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
                <ChevronDown className="w-6 h-6 text-[#0000FF]" />
              </div>
            </div>
          </div>

          {/* Row 5: Message */}
          <div className="flex flex-col gap-2">
            <label className="text-lg font-medium text-[#1E1E24]">Message</label>
            <textarea 
              rows={4}
              placeholder="Your message goes here..." 
              className="w-full bg-[#F2F4F8] border border-[#1E1E24] rounded-[5px] p-4 text-[#1E1E24] placeholder:text-[#1E1E24]/20 focus:outline-none focus:ring-1 focus:ring-[#0000FF] resize-none"
            />
          </div>

          {/* Submit Button */}
          <div className="mt-4">
            <button 
              type="submit"
              className="flex items-center gap-2 bg-[#0000FF] hover:bg-[#000099] text-white px-8 py-3 rounded-[5px] font-bold text-lg transition-colors uppercase"
            >
              SUBMIT <ArrowRight className="w-5 h-5" />
            </button>
          </div>

        </form>
      </div>
    </section>
  );
};
