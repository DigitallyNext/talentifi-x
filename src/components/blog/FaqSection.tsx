import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface FaqSectionProps {
  data: {
    title?: string;
    faqs: Array<{
      question: string;
      answer: string;
    }>;
  };
}

export function FaqSection({ data }: FaqSectionProps) {
  const [openItems, setOpenItems] = useState<Set<number>>(new Set());

  const toggleItem = (index: number) => {
    const newOpenItems = new Set(openItems);
    if (newOpenItems.has(index)) {
      newOpenItems.delete(index);
    } else {
      newOpenItems.add(index);
    }
    setOpenItems(newOpenItems);
  };

  if (!data.faqs || data.faqs.length === 0) {
    return null;
  }

  return (
    <div className="my-12">
      {data.title && (
        <h2 className="text-2xl font-bold text-dark mb-8">{data.title}</h2>
      )}
      
      <div className="space-y-4">
        {data.faqs.map((faq, index) => {
          const isOpen = openItems.has(index);
          
          return (
            <div
              key={index}
              className="border border-gray-200 rounded-lg overflow-hidden"
            >
              <button
                onClick={() => toggleItem(index)}
                className="w-full flex items-center justify-between p-6 text-left hover:bg-gray-50 transition-colors"
                aria-expanded={isOpen}
                aria-controls={`faq-answer-${index}`}
              >
                <h3 className="text-lg font-semibold text-dark pr-4">
                  {faq.question}
                </h3>
                <div className="flex-shrink-0">
                  {isOpen ? (
                    <ChevronUp className="w-5 h-5 text-primary" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-primary" />
                  )}
                </div>
              </button>
              
              {isOpen && (
                <div
                  id={`faq-answer-${index}`}
                  className="px-6 pb-6 border-t border-gray-100"
                >
                  <p className="text-gray-700 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}