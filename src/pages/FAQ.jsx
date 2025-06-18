import React from 'react';

const FAQ = () => {
  return (
    <div className="relative flex size-full min-h-screen flex-col bg-white group/design-root overflow-x-hidden" style={{ fontFamily: 'Epilogue, "Noto Sans", sans-serif' }}>
      <div className="layout-container flex h-full grow flex-col">
        <div className="px-4 sm:px-8 md:px-20 lg:px-40 flex flex-1 justify-center py-8 md:py-12">
          <div className="layout-content-container flex flex-col max-w-[960px] flex-1 w-full">
            {/* Header with decorative element */}
            <div className="flex flex-wrap justify-between gap-3 p-4 mb-6 relative">
              <p className="text-[#181411] text-2xl sm:text-3xl md:text-[32px] font-bold leading-tight min-w-72">
                Frequently Asked Questions
              </p>
              <div className="absolute bottom-0 left-4 w-16 h-1 bg-orange-500"></div>
            </div>

            {/* FAQ Sections */}
            {faqSections.map((section, sectionIndex) => (
              <div key={sectionIndex} className="mb-8 last:mb-0">
                {/* Section Title */}
                {section.title && (
                  <h3 className="text-lg sm:text-xl font-semibold text-[#181411] mb-4 px-4 py-2 bg-orange-50 rounded-lg">
                    {section.title}
                  </h3>
                )}
                
                {/* FAQ Items */}
                <div className="flex flex-col gap-3">
                  {section.items.map((item, index) => (
                    <FAQItem 
                      key={index}
                      question={item.question}
                      answer={item.answer}
                      isOpen={item.isOpen}
                    />
                  ))}
                </div>
              </div>
            ))}

            {/* Support CTA */}
            <div className="mt-8 p-6 bg-orange-50 rounded-xl border border-orange-100">
              <h3 className="text-lg font-semibold text-[#181411] mb-2">Still need help?</h3>
              <p className="text-[#8a7560] text-sm mb-4">Can't find what you're looking for? Contact our support team.</p>
              <div className="flex flex-col sm:flex-row gap-3">
                <a href="tel:+9304637399" className="px-4 py-2 bg-orange-500 text-white text-sm font-medium rounded-lg text-center hover:bg-orange-600 transition-colors">
                  Call Support
                </a>
                <a href="mailto:support@tiffinexpress.com" className="px-4 py-2 border border-orange-500 text-orange-500 text-sm font-medium rounded-lg text-center hover:bg-orange-50 transition-colors">
                  Email Us
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// FAQ Item Component (unchanged logic, just added hover effect)
const FAQItem = ({ question, answer, isOpen = false }) => (
  <details className="flex flex-col rounded-xl border border-[#e6e0db] bg-white px-4 py-2 group hover:border-orange-300 transition-colors" open={isOpen}>
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

// Enhanced FAQ content with more questions
const faqSections = [
  {
    title: "General Information",
    items: [
      { 
        question: "What is Tiffin Express?", 
        answer: "Tiffin Express is a premium meal delivery service that brings delicious, home-style cooked meals to your doorstep. We specialize in authentic, nutritious meals prepared with fresh ingredients and delivered with care.", 
        isOpen: true 
      },
      { 
        question: "How does Tiffin Express work?", 
        answer: "Simply browse our menu, select your meals, choose your delivery time, and checkout. We'll prepare fresh meals and deliver them to your preferred location at the scheduled time.", 
        isOpen: false 
      },
      { 
        question: "What areas do you serve?", 
        answer: "We currently serve major metropolitan areas with plans to expand soon. Enter your address during checkout to confirm availability in your area.", 
        isOpen: false 
      },
      { 
        question: "What are your operating hours?", 
        answer: "Our kitchen operates from 6 AM to 11 PM daily, with deliveries available throughout the day in scheduled time slots.", 
        isOpen: false 
      },
    ],
  },
  {
    title: "Ordering & Delivery",
    items: [
      { 
        question: "How do I place an order?", 
        answer: "You can order through our website or mobile app. Select your meals, choose delivery time, enter your details, and complete payment.", 
        isOpen: false 
      },
      { 
        question: "Can I modify my order after placing it?", 
        answer: "You can modify your order within 30 minutes of placing it by contacting our support team. After that, changes may not be possible as we start preparing your food.", 
        isOpen: true 
      },
      { 
        question: "What is your cancellation policy?", 
        answer: "You can cancel your order up to 1 hour before the scheduled delivery time for a full refund. Later cancellations may incur charges as we've already prepared your food.", 
        isOpen: false 
      },
      { 
        question: "How long does delivery take?", 
        answer: "Delivery typically takes 30-45 minutes from preparation completion. You'll receive real-time updates about your order status.", 
        isOpen: false 
      },
      { 
        question: "What if I'm not available during delivery?", 
        answer: "Our driver will attempt to contact you. If unavailable, we'll leave your meal in a safe place if specified, or take it back and attempt redelivery (additional charges may apply).", 
        isOpen: false 
      },
    ],
  },
  {
    title: "Food & Quality",
    items: [
      { 
        question: "What ingredients do you use?", 
        answer: "We use only fresh, high-quality ingredients sourced from trusted suppliers. Our meals contain no artificial preservatives or additives.", 
        isOpen: false 
      },
      { 
        question: "Do you accommodate dietary restrictions?", 
        answer: "Yes! We offer vegetarian, vegan, gluten-free, and other special diet options. Specify your dietary needs during checkout.", 
        isOpen: false 
      },
      { 
        question: "How are meals packaged?", 
        answer: "Meals come in eco-friendly, microwave-safe containers designed to maintain freshness and temperature during delivery.", 
        isOpen: false 
      },
      { 
        question: "Can I see nutritional information?", 
        answer: "Nutritional information is available for all dishes on our menu pages. We provide calorie counts and allergen information.", 
        isOpen: false 
      },
    ],
  },
  {
    title: "Payments & Accounts",
    items: [
      { 
        question: "What payment methods do you accept?", 
        answer: "We accept all major credit/debit cards, UPI payments, net banking, and select digital wallets. Cash on delivery is available in some areas.", 
        isOpen: false 
      },
      { 
        question: "Is my payment information secure?", 
        answer: "Absolutely. We use industry-standard encryption and never store your full payment details on our servers.", 
        isOpen: false 
      },
      { 
        question: "How do I apply a promo code?", 
        answer: "Enter your promo code during checkout in the designated field before completing payment. Discounts will be applied immediately.", 
        isOpen: false 
      },
      { 
        question: "Do you offer subscription plans?", 
        answer: "Yes! Our subscription plans offer convenience and savings with flexible meal options and delivery schedules.", 
        isOpen: false 
      },
    ],
  },
];

export default FAQ;