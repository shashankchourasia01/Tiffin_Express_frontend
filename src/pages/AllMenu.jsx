// AllMenu.jsx
import { useParams } from 'react-router-dom';
import { menuData } from '../data/menuData';

const AllMenu = () => {
  const { kitchenId } = useParams();
  const kitchenMenu = menuData[kitchenId];

  if (!kitchenMenu) {
    return <div className="max-w-7xl mx-auto px-4 py-8">Menu not found</div>;
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">{kitchenMenu.name} - Menu</h1>
      
      {kitchenMenu.categories.map((category, index) => (
        <div key={index} className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 border-b pb-2">{category.name}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {category.items.map((item, itemIndex) => (
              <div key={itemIndex} className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <div className="flex justify-between items-start">
                  <h3 className="font-medium text-lg">{item.name}</h3>
                  <span className="font-bold text-red-600">₹{item.price}</span>
                </div>
                <p className="text-gray-600 mt-1">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      ))}
      
      <button 
        onClick={() => window.history.back()}
        className="mt-6 bg-gray-200 hover:bg-gray-300 px-4 py-2 rounded-lg transition"
      >
        ← Back to Restaurants
      </button>
    </div>
  );
};

export default AllMenu;