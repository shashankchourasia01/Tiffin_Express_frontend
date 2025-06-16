import { FaUtensils, FaMobileAlt, FaHome, FaShippingFast } from 'react-icons/fa';

const HowItWorks = () => {
  const steps = [
    {
      icon: <FaUtensils className="w-8 h-8 text-orange-500" />,
      title: "Choose Your Meal",
      description: "Browse our diverse menu of home-style meals curated by local chefs."
    },
    {
      icon: <FaMobileAlt className="w-8 h-8 text-orange-500" />,
      title: "Place Your Order",
      description: "Select your meals and schedule delivery through our easy-to-use platform."
    },
    {
      icon: <FaHome className="w-8 h-8 text-orange-500" />,
      title: "Prepared with Care",
      description: "Our partner kitchens freshly prepare your meals with quality ingredients."
    },
    {
      icon: <FaShippingFast className="w-8 h-8 text-orange-500" />,
      title: "Express Delivery",
      description: "Get your hot, delicious meals delivered right to your doorstep."
    }
  ];

  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">How Tiffin Express Works</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="mb-4 p-3 bg-orange-100 rounded-full">
                {step.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
              <span className="mt-4 text-orange-500 font-bold">{index + 1}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;