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
      detail: "+1 (555) 123-4567",
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
      detail: "+1 (555) 123-4567",
      action: "https://wa.me/15551234567",
    },
  ];

  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
          Help & Support
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* FAQs Section */}
          <div>
            <h3 className="text-2xl font-semibold text-gray-800 mb-6 flex items-center">
              <FaQuestionCircle className="mr-2 text-orange-500" /> Frequently
              Asked Questions
            </h3>
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div key={index} className="border-b border-gray-200 pb-4">
                  <h4 className="text-lg font-medium text-gray-800 mb-2">
                    {faq.question}
                  </h4>
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              ))}
            </div>

            <Link
              to="/help"
              className="inline-block mt-6 px-6 py-2 bg-orange-500 text-white rounded-md hover:bg-orange-600 transition-colors"
            >
              View All FAQs
            </Link>
          </div>

          {/* Contact Section */}
          <div>
            <h3 className="text-2xl font-semibold text-gray-800 mb-6">
              Contact Us
            </h3>
            <p className="text-gray-600 mb-8">
              Have questions or need assistance? Our support team is here to
              help you with any inquiries.
            </p>

            <div className="space-y-6">
              {contactMethods.map((method, index) => (
                <a
                  key={index}
                  href={method.action}
                  className="flex items-start p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
                >
                  <div className="mr-4 mt-1 text-orange-500">{method.icon}</div>
                  <div>
                    <h4 className="text-lg font-medium text-gray-800">
                      {method.title}
                    </h4>
                    <p className="text-gray-600">{method.detail}</p>
                  </div>
                </a>
              ))}
            </div>

            <div className="mt-8 p-6 bg-orange-50 rounded-lg">
              <h4 className="text-lg font-medium text-gray-800 mb-2">
                Need immediate help?
              </h4>
              <p className="text-gray-600 mb-4">
                Our live chat support is available 24/7.
              </p>
              <button className="px-6 py-2 bg-orange-500 text-white rounded-md hover:bg-orange-600 transition-colors">
                Start Live Chat
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HelpSupport;
