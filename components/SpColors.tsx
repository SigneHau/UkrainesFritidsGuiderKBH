import React from 'react';

interface Farve {
  navn: string;
  hex: string;
  bgClass: string;
  textClass: string;
  borderClass?: string;
}

export default function FarveCirklerKK(): React.JSX.Element {
  const farver: Farve[] = [
    { navn: 'Navy', hex: '#000c2e', bgClass: 'bg-[#000c2e]', textClass: 'text-white' },
    { navn: 'Offwhite', hex: '#F5F3E8', bgClass: 'bg-[#F5F3E8]', textClass: 'text-[#000c2e]' },
    { navn: 'Grey', hex: '#fafafb', bgClass: 'bg-[#fafafb]', textClass: 'text-[#000c2e]', borderClass: 'border-gray-200' },
    { navn: 'Blue', hex: '#BEE2FE', bgClass: 'bg-[#BEE2FE]', textClass: 'text-[#000c2e]' },
    { navn: 'Purple', hex: '#7C4BFF', bgClass: 'bg-[#7C4BFF]', textClass: 'text-white' },
    { navn: 'Light', hex: '#D8C9FF', bgClass: 'bg-[#D8C9FF]', textClass: 'text-[#000c2e]' },
  ];

  return (
    // Tilføjet id="color" her, så links i din SpIntro menu virker
    <section id="color" className="bg-white py-16 px-6">
      <div className="w-full max-w-7xl mx-auto space-y-10 font-sans">
        {/* Header */}
        <div className="border-b border-gray-100 pb-6">
          <h2 className="text-[#000c2e] text-2xl md:text-3xl font-bold mb-1">Farvepalette</h2>
        </div>

        {/* Række med runde farveboblere */}
        <div className="flex flex-wrap items-center gap-12 justify-center py-4">
          {farver.map((farve) => (
            <div key={farve.hex} className="flex flex-col items-center gap-4">
              {/* Cirkel */}
              <div 
                className={`w-24 h-24 rounded-full ${farve.bgClass} ${farve.borderClass ? `border ${farve.borderClass}` : 'border border-gray-100'} flex items-center justify-center shadow-sm transition-transform hover:scale-105 duration-200`}
              >
                <span className={`${farve.textClass} text-xs text-center px-2 break-words`}>
                  {farve.navn}
                </span>
              </div>
              
              {/* HEX-kode under cirklen */}
              <code className="text-xs font-mono text-gray-500 bg-gray-50 px-2 py-0.5 rounded border border-gray-100">
                {farve.hex}
              </code>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}