import { useState, useEffect } from 'react';

interface TableOfContentsItem {
  title: string;
  id: string;
  level: number;
}

interface TableOfContentsProps {
  items: TableOfContentsItem[];
}

export function TableOfContents({ items }: TableOfContentsProps) {
  const [activeId, setActiveId] = useState<string>('');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { rootMargin: '-20% 0px -80% 0px' }
    );

    items.forEach((item) => {
      const element = document.getElementById(item.id);
      if (element) {
        observer.observe(element);
      }
    });

    return () => {
      items.forEach((item) => {
        const element = document.getElementById(item.id);
        if (element) {
          observer.unobserve(element);
        }
      });
    };
  }, [items]);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  if (!items || items.length === 0) {
    return null;
  }

  return (
    <div className="bg-grey-accent rounded-lg p-6">
      <h3 className="text-lg font-bold text-dark mb-4">Table of Contents</h3>
      <nav className="space-y-2">
        {items.map((item) => (
          <button
            key={item.id}
            onClick={() => scrollToSection(item.id)}
            className={`block w-full text-left py-2 px-3 rounded transition-colors ${
              activeId === item.id
                ? 'bg-primary text-white'
                : 'text-gray-600 hover:text-primary hover:bg-white'
            } ${
              item.level === 2 ? 'ml-0' : item.level === 3 ? 'ml-4' : 'ml-8'
            }`}
            style={{
              fontSize: item.level === 2 ? '0.875rem' : '0.8125rem',
              fontWeight: item.level === 2 ? '600' : '400',
            }}
          >
            {item.title}
          </button>
        ))}
      </nav>
    </div>
  );
}