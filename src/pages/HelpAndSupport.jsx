import {
  FaQuestionCircle,
  FaPhone,
  FaEnvelope,
  FaWhatsapp,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const HelpSupport = () => {
  const faqs = [
    {
      question: "How do I place an order?",
      answer:
        "Simply browse our menu, select your meals, choose delivery time, and checkout.",
    },
    {
      question: "What are your delivery hours?",
      answer:
        "We deliver from 7 AM to 10 PM daily, with slots every 30 minutes.",
    },
    {
      question: "Can I change my delivery address?",
      answer: "Yes, you can update your address before placing your order.",
    },
  ];

  const contactMethods = [
    {
      icon: <FaPhone className="w-6 h-6" />,
      title: "Call Us",
      detail: "9304637399",
      action: "tel:+15551234567",
    },
    {
      icon: <FaEnvelope className="w-6 h-6" />,
      title: "Email Us",
      detail: "support@tiffinexpress.com",
      action: "mailto:support@tiffinexpress.com",
    },
    {
      icon: <FaWhatsapp className="w-6 h-6" />,
      title: "WhatsApp",
      detail: "9304637399",
      action: "https://wa.me/15551234567",
    },
  ];

  return (
    <section className="py-12 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        {/* Header with decorative elements */}
        <div className="text-center mb-16 relative">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4 relative inline-block">
            <span className="relative z-10">Help & Support</span>
            <span className="absolute -bottom-1 left-0 w-full h-2 bg-orange-100 z-0"></span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We're here to help you with any questions or issues you might have.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* FAQs Section */}
          <div className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 p-6 md:p-8 border border-gray-100">
            <div className="flex items-center mb-6">
              <FaQuestionCircle className="text-orange-500 text-2xl mr-3" />
              <h3 className="text-2xl font-semibold text-gray-800">
                Frequently Asked Questions
              </h3>
            </div>
            
            <div className="space-y-6">
              {faqs.map((faq, index) => (
                <div 
                  key={index} 
                  className="border-b border-gray-100 pb-6 last:border-0 last:pb-0"
                >
                  <h4 className="text-lg font-medium text-gray-800 mb-3 flex items-start">
                    <span className="inline-block w-2 h-2 bg-orange-500 rounded-full mt-2 mr-3"></span>
                    {faq.question}
                  </h4>
                  <p className="text-gray-600 pl-5">{faq.answer}</p>
                </div>
              ))}
            </div>

            <div className="mt-8 text-center sm:text-left">
              <Link
                to="/faq"
                className="inline-flex items-center px-6 py-3 bg-orange-500 hover:bg-orange-600 text-white font-medium rounded-lg transition-all duration-300 shadow-sm hover:shadow-md"
              >
                View All FAQs
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>

          {/* Contact Section */}
          <div>
            <div className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 p-6 md:p-8 border border-gray-100 mb-8">
              <h3 className="text-2xl font-semibold text-gray-800 mb-6">
                Contact Us
              </h3>
              <p className="text-gray-600 mb-8">
                Have questions or need assistance? Our support team is here to
                help you with any inquiries.
              </p>

              <div className="space-y-4">
                {contactMethods.map((method, index) => (
                  <a
                    key={index}
                    href={method.action}
                    className="flex items-start p-4 border border-gray-200 rounded-lg hover:border-orange-300 hover:bg-orange-50 transition-all duration-300 group"
                  >
                    <div className="mr-4 p-2 bg-orange-100 rounded-full text-orange-500 group-hover:bg-orange-500 group-hover:text-white transition-colors duration-300">
                      {method.icon}
                    </div>
                    <div>
                      <h4 className="text-lg font-medium text-gray-800 group-hover:text-orange-600 transition-colors duration-300">
                        {method.title}
                      </h4>
                      <p className="text-gray-600 group-hover:text-gray-800 transition-colors duration-300">
                        {method.detail}
                      </p>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Live Chat Section */}
            <div className="bg-gradient-to-r from-orange-50 to-amber-50 rounded-xl p-6 md:p-8 border border-orange-100">
              <div className="flex items-start">
                <div className="mr-4 p-2 bg-orange-100 rounded-full text-orange-500">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-lg font-medium text-gray-800 mb-2">
                    Need immediate help?
                  </h4>
                  <p className="text-gray-600 mb-4">
                    Our live chat support is available 24/7.
                  </p>
                  <a
                    href="https://wa.me/9304637399"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-6 py-3 bg-orange-500 hover:bg-orange-600 text-white font-medium rounded-lg transition-all duration-300 shadow-sm hover:shadow-md"
                  >
                    Start Live Chat
                    <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HelpSupport;