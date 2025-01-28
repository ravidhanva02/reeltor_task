import { useState } from "react";

function Properties() {
  const properties = [
    {
      id: 1,
      name: "Ocean View Apartment",
      price: "$120,000",
      location: "Miami, FL",
      image: "https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=400",
    },
    {
      id: 2,
      name: "Modern Studio",
      price: "$85,000",
      location: "New York, NY",
      image: "https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=400",
    },
  ];

  // State to track selected property
  const [selectedProperty, setSelectedProperty] = useState(null);

  const handlePropertyClick = (property) => {
    setSelectedProperty(property);
  };

  const handleCloseModal = () => {
    setSelectedProperty(null);
  };

  return (
    <div className="p-4 bg-gray-100 dark:bg-gray-900">
      <h1 className="text-2xl font-bold mb-4 text-gray-900 dark:text-gray-100">
        Available Properties
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {properties.map((property) => (
          <div
            key={property.id}
            className="border rounded-lg shadow-lg overflow-hidden bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100"
            onClick={() => handlePropertyClick(property)} // Handle click
          >
            <img
              src={property.image}
              alt={property.name}
              className="w-full h-40 object-cover"
            />
            <div className="p-4">
              <h2 className="text-lg font-bold">{property.name}</h2>
              <p className="text-gray-600 dark:text-gray-400">
                {property.location}
              </p>
              <p className="text-green-600 font-bold">{property.price}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Modal for displaying property details */}
      {selectedProperty && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg max-w-lg w-full">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-4">
              {selectedProperty.name}
            </h2>
            <img
              src={selectedProperty.image}
              alt={selectedProperty.name}
              className="w-full h-60 object-cover mb-4"
            />
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Location: {selectedProperty.location}
            </p>
            <p className="text-green-600 font-bold mb-4">{selectedProperty.price}</p>
            <button
              onClick={handleCloseModal}
              className="bg-red-500 text-white py-2 px-4 rounded-lg hover:bg-red-600"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Properties;
