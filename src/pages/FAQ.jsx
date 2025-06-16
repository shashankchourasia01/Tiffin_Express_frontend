import React from 'react';

const FAQ = () => {
  return (
    <div className="relative flex size-full min-h-screen flex-col bg-white group/design-root overflow-x-hidden" style={{ fontFamily: 'Epilogue, "Noto Sans", sans-serif' }}>
      <div className="layout-container flex h-full grow flex-col">
       

        <div className="px-40 flex flex-1 justify-center py-5">
          <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
            <div className="flex flex-wrap justify-between gap-3 p-4">
              <p className="text-[#181411] text-[32px] font-bold leading-tight min-w-72">Frequently Asked Questions</p>
            </div>

            {/* FAQ Items */}
            {faqSections.map((section, sectionIndex) => (
              <div key={sectionIndex} className="flex flex-col p-4 gap-3">
                {section.items.map((item, index) => (
                  <FAQItem 
                    key={index}
                    question={item.question}
                    answer={item.answer}
                    isOpen={item.isOpen}
                  />
                ))}
              </div>
            ))}

          </div>
        </div>
      </div>
    </div>
  );
};

// Helpful subcomponents
const FAQItem = ({ question, answer, isOpen = false }) => (
  <details className="flex flex-col rounded-xl border border-[#e6e0db] bg-white px-4 py-2 group" open={isOpen}>
    <summary className="flex cursor-pointer items-center justify-between gap-6 py-2 list-none">
      <p className="text-[#181411] text-sm font-medium leading-normal">{question}</p>
      <div className="text-[#181411] group-open:rotate-180 transition-transform">
        <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" fill="currentColor" viewBox="0 0 256 256">
          <path d="M213.66,101.66l-80,80a8,8,0,0,1-11.32,0l-80-80A8,8,0,0,1,53.66,90.34L128,164.69l74.34-74.35a8,8,0,0,1,11.32,11.32Z" />
        </svg>
      </div>
    </summary>
    <p className="text-[#8a7560] text-sm font-normal leading-normal pb-2">{answer}</p>
  </details>
);

// FAQ content
const faqSections = [
  {
    title: "General",
    items: [
      { question: "What is Tiffin?", answer: "Tiffin is a meal delivery service that makes it easy and convenient to enjoy delicious, freshly prepared meals from our kitchen to your table. We offer a variety of cuisines to choose from, and all our dishes are made with high-quality, fresh ingredients.", isOpen: true },
      { question: "How does Tiffin work?", answer: "Tiffin is a meal delivery service that makes it easy...", isOpen: false },
      { question: "What is the delivery fee?", answer: "The delivery fee for your order will depend...", isOpen: false },
      { question: "How do I pay for my order?", answer: "You can pay for your Tiffin order using any major credit card or debit card...", isOpen: false },
      { question: "Where does Tiffin deliver?", answer: "Tiffin currently delivers to select areas in the San Francisco Bay Area, New York City, and Nashville...", isOpen: false },
    ],
  },
  {
    title: "Ordering",
    items: [
      { question: "How do I place an order?", answer: "You can place an order through our website or mobile app...", isOpen: false },
      { question: "Can I modify my order after placing it?", answer: "You can modify your order within 30 minutes...", isOpen: true },
      { question: "What is your cancellation policy?", answer: "You can cancel your order up to 2 hours before...", isOpen: false },
    ],
  },
];

export default FAQ;
