import React from 'react';
import Image from 'next/image';

const HowItWorksSection = () => {
  const steps = [
    {
      title: 'Discovery',
      days: '(DAY 1)',
      desc: 'Understanding role requirements, culture, and expectations',
      icon: '/assets/figma/how-icon-discovery.png', 
    },
    {
      title: 'AI Screening',
      days: '(DAY 2-5)',
      desc: 'Large-scale filtering for skills, experience, and patterns',
      icon: '/assets/figma/how-icon-ai.png',
    },
    {
      title: 'Human Evaluation',
      days: '(DAY 6-10)',
      desc: 'Cultural fit, intent, communication, and potential',
      icon: '/assets/figma/how-icon-human.png',
    },
    {
      title: 'Delivery',
      days: '(DAY 11-12)',
      desc: '3–5 highly qualified finalists, no noise',
      icon: '/assets/figma/how-icon-delivery.png',
    },
    {
      title: 'Ongoing Partnership',
      days: '',
      desc: 'Support beyond placement to ensure long-term success',
      icon: '/assets/figma/how-icon-ongoing.png',
    },
  ];

  return (
    <section className="w-full lg:py-24 py-12 bg-[#F2F4F8]">
      <div className="max-w-7xl mx-auto px-4 lg:px-4 flex flex-col items-center gap-12 md:gap-20">
        
        {/* Header */}
        <div className="flex flex-col items-center gap-4 md:gap-6 text-center">
          <h2 className="lg:text-[54px] text-[40px] font-bold font-notch text-black leading-tight">
            How It <span className="text-primary">Works</span><span className="text-secondary">.</span>
          </h2>
          <p className="lg:text-2xl text-[18px] font-bold font-sans text-black">
            A Clear, Human-Centered Process
          </p>
        </div>

        {/* Desktop View (Horizontal) */}
        <div className="hidden md:flex relative w-full flex-row justify-between items-start gap-8">
           {/* Connecting Line */}
           <div className="absolute top-12 left-0 w-full h-2.25 bg-gradient-to-r from-[#0000FF] to-[#00DDE2] opacity-20" />
           
           {steps.map((step, index) => (
             <div key={index} className="relative flex flex-col items-center gap-4 text-center z-10 flex-1">
               {/* Icon Circle */}
               <div className="w-46 h-46 flex items-center justify-center">
                  <div className="w-64 h-64 relative">
                    <Image 
                      src={step.icon} 
                      alt={step.title}
                      width={200}
                      height={200}
                      className="object-contain"
                    />
                  </div>
               </div>

               {/* Text */}
               <div className="flex flex-col gap-2">
                 <h3 className="text-[32px] font-bold font-notch text-black leading-tight">
                   {step.title}
                 </h3>
                 {step.days && (
                   <span className="text-2xl font-bold font-sans text-black uppercase">
                     {step.days}
                   </span>
                 )}
               </div>
               
               <p className="text-lg font-sans text-black font-semibold max-w-[200px]">
                 {step.desc}
               </p>
             </div>
           ))}
        </div>

        {/* Mobile View (Vertical Timeline) - Matches Image */}
        <div className="flex md:hidden flex-col items-center w-full relative gap-8 mt-4">
           {/* Vertical Connecting Line */}
           <div className="absolute top-0 bottom-0 left-1/2 w-[4px] bg-gradient-to-b from-[#0000FF] to-[#00DDE2] -translate-x-1/2 opacity-30" />
           
           {steps.map((step, index) => (
             <div key={index} className="relative z-10 flex flex-col items-center text-center gap-4 w-full">
               
               {/* Hexagon Container with Border */}
               <div className="relative w-[120px] h-[120px] flex items-center justify-center filter drop-shadow-sm">
                  {/* Border Gradient Layer */}
                  <div className="absolute inset-0 bg-gradient-to-b from-[#0000FF] via-[#7F7FFF] to-[#00DDE2]" 
                       style={{ clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)' }} 
                  />
                  {/* Inner White Layer */}
                  <div className="absolute inset-[2px] bg-white flex items-center justify-center" 
                       style={{ clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)' }}
                  >
                      <div className="w-[50px] h-[50px] relative">
                        <Image src={step.icon} alt={step.title} fill className="object-contain" />
                      </div>
                  </div>
               </div>

               {/* Text */}
               <div className="flex flex-col gap-1 items-center bg-[#F2F4F8] px-2 pt-2 pb-4 w-full">
                 <h3 className="text-[28px] font-bold font-notch text-black leading-tight">
                   {step.title}
                 </h3>
                 {step.days && (
                   <span className="text-[16px] font-bold font-sans text-black uppercase tracking-wide">
                     {step.days}
                   </span>
                 )}
                 <p className="text-[16px] font-sans text-black font-medium max-w-[260px] leading-snug mt-2 opacity-80">
                   {step.desc}
                 </p>
               </div>
             </div>
           ))}
        </div>

        {/* Footer / Callout */}
        <div className="relative p-[3px] rounded-[10px] bg-gradient-to-r from-[#0000FF] via-white to-[#00DDE2] w-full md:w-auto">
          <div className="bg-[#F2F4F8] rounded-[8px] px-6 py-6 md:px-16 md:py-8">
            <p className="text-[18px] md:text-2xl font-bold font-sans text-black text-center leading-tight">
              Your total time investment: ~4 hours
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default HowItWorksSection;
