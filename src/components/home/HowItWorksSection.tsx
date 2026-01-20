import React from 'react';
import Image from 'next/image';

const HowItWorksSection = () => {
  const steps = [
    {
      title: 'Discovery',
      days: '(Day 1)',
      desc: 'Understanding role requirements, culture, and expectations',
      icon: '/assets/figma/how-icon-discovery.png', 
    },
    {
      title: 'AI Screening',
      days: '(Day 2-5)',
      desc: 'Large-scale filtering for skills, experience, and patterns',
      icon: '/assets/figma/how-icon-ai.png',
    },
    {
      title: 'Human Evaluation',
      days: '(Day 6-10)',
      desc: 'Cultural fit, intent, communication, and potential',
      icon: '/assets/figma/how-icon-human.png',
    },
    {
      title: 'Delivery',
      days: '(Day 11-12)',
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
      <div className="max-w-7xl mx-auto px-4 lg:px-0 flex flex-col items-center gap-20">
        
        {/* Header */}
        <div className="flex flex-col items-center gap-6 text-center">
          <h2 className="lg:text-[54px] text-[48px] font-bold font-notch text-black leading-tight">
            How It <span className="text-primary">Works</span><span className="text-secondary">.</span>
          </h2>
          <p className="lg:text-2xl text-[20px] font-bold font-sans text-black">
            A Clear, Human-Centered Process
          </p>
        </div>

        {/* Steps */}
        <div className="relative w-full flex flex-col md:flex-row justify-between items-start gap-8">
           {/* Connecting Line (Absolute) - simplified representation */}
           <div className="absolute top-12 left-0 w-full h-2.25 bg-linear-to-r from-[#0000FF] to-secondary block opacity-20 lg:rotate-0 rotate-90" />
           
           {/* Step Items */}
           {steps.map((step, index) => (
             <div key={index} className="relative flex flex-col items-center gap-4 text-center z-10 lg:flex-1">
               {/* Icon Circle */}
               <div className="w-46 h-46 flex items-center justify-center ">
                  <div className="w-64 h-64 relative">
                    {/* Using a generic fallback if image missing, but try to load */}
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

        {/* Footer / Callout */}
        <div className="relative p-[3px] rounded-[10px] bg-gradient-to-r from-[#0000FF] via-white to-[#00DDE2]">
          <div className="bg-[#F2F4F8] rounded-[8px] px-16 py-8">
            <p className="text-2xl font-bold font-sans text-black text-center">
              Your total time investment: ~4 hours
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default HowItWorksSection;
