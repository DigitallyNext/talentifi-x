import React from "react";
import Image from "next/image";

export const SolutionsAISpeed = () => {
  return (
    <section className="w-full py-16 px-6 md:px-14 bg-[#F2F4F8] overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center flex-col justify-center text-center gap-16">
          <div className="flex-1">
            <h3 className="text-[34px] md:text-[54px] font-notch font-bold text-dark mb-6 leading-tight">
              AI for speed<span className="text-secondary">.</span> Humans for judgment.
              <br />
              Results for you.
            </h3>
            <p className="text-[16px] md:text-[20px] text-dark leading-relaxed mb-2">
              Trust isn’t claimed. It’s engineered.
            </p>
          </div>
          <div className="w-full max-w-[1150px]">
            <div className="bg-gradient-to-r from-primary to-secondary p-[2px] rounded-xl">
              <div className="bg-[#F2F4F8] rounded-xl p-4 sm:p-6 md:p-10">
                <Image
                  src="/Solutions/ai-banner.webp"
                  alt="AI Visual"
                  width={1200}
                  height={700}
                  sizes="(max-width: 768px) 100vw, 1150px"
                  className="w-full h-auto rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
