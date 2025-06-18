import { FaUtensils, FaMobileAlt, FaHome, FaShippingFast } from 'react-icons/fa';

const HowItWorks = () => {
  const steps = [
    {
      icon: <FaUtensils className="w-8 h-8" />,
      title: "Choose Your Kitchen",
      description: "Browse our diverse menu of home-style meals curated by local chefs."
    },
    {
      icon: <FaMobileAlt className="w-8 h-8" />,
      title: "Contact with Best Kitchen",
      description: "Select your meals and schedule delivery through our easy-to-use platform."
    },
    {
      icon: <FaHome className="w-8 h-8" />,
      title: "Prepared with Care",
      description: "Our partner kitchens freshly prepare your meals with quality ingredients."
    },
    {
      icon: <FaShippingFast className="w-8 h-8" />,
      title: "Express Delivery",
      description: "Get your hot, delicious meals delivered right to your doorstep."
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-b from-white to-orange-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            How Tiffin Express Works
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Get delicious home-style meals in just 4 simple steps
          </p>
        </div>
        
        <div className="relative">
          {/* Progress line */}
          <div className="hidden lg:block absolute top-12 left-0 right-0 h-1 bg-orange-200 mx-20"></div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
            {steps.map((step, index) => (
              <div 
                key={index} 
                className="relative flex flex-col items-center text-center p-8 bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100"
              >
                {/* Number badge */}
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-10 h-10 flex items-center justify-center bg-orange-500 text-white font-bold rounded-full border-4 border-white">
                  {index + 1}
                </div>
                
                {/* Icon container */}
                <div className="mb-6 p-4 bg-orange-100 rounded-full text-orange-500">
                  {step.icon}
                </div>
                
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Button */}
        <div className="mt-16 text-center">
          <button className="px-8 py-3 bg-orange-500 hover:bg-orange-600 text-white font-medium rounded-lg shadow-md hover:shadow-lg transition-all duration-300 inline-flex items-center">
            Get Started Now
            <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;