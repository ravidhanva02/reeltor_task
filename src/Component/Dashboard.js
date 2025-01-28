import React, { useState } from "react";
import Properties from "./Properties";

function Dashboard({ handleLogout }) {
  const [activeComponent, setActiveComponent] = useState("dashboard"); // Track active component

  // Handle component change when a sidebar item is clicked
  const handleSidebarClick = (component) => {
    setActiveComponent(component);
  };

  return (
    <div className="flex">
      {/* Sidebar */}
      <div className="w-64 bg-gray-800 p-4 min-h-screen fixed">
        <nav>
          <ul className="flex flex-col space-y-4">
            <li
              onClick={() => handleSidebarClick("dashboard")}
              className="text-white text-lg hover:text-blue-400 cursor-pointer"
            >
              Dashboard
            </li>
            <li
              onClick={() => handleSidebarClick("properties")}
              className="text-white text-lg hover:text-blue-400 cursor-pointer"
            >
              Properties List
            </li>
            <li className="text-white text-lg hover:text-blue-400 cursor-pointer">About</li>
            <li className="text-white text-lg hover:text-blue-400 cursor-pointer">Contact</li>
          </ul>
        </nav>
        <div className="text-center mt-8">
          <button
            onClick={handleLogout}
            className="bg-red-500 dark:bg-red-700 text-white py-2 px-4 rounded-lg hover:bg-red-600 dark:hover:bg-red-800 transition-all duration-200"
          >
            Logout
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="ml-64 p-4 flex-1">
        {/* Conditionally render components based on activeComponent */}
        {activeComponent === "dashboard" ? (
          <section className="flex">
            {/* Left Side (Image Box) */}
            <div className="w-1/2 p-4">
              <h3 className="text-2xl font-bold mb-4 text-teal-600">NFT Marketplace</h3>
              <div className="bg-gray-200 p-4 rounded-lg shadow-md">
                <img
                  src="https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=400"
                  alt="NFT Marketplace"
                  className="w-full h-64"
                />
              </div>
            </div>

            {/* Right Side (Investment Stats) */}
            <div className="w-1/2 p-4">
              <h3 className="text-2xl font-bold mb-4 text-purple-600">Investment Stats</h3>
              <div className="bg-gray-200 p-4 rounded-lg shadow-md">
                <div className="mb-4">
                  <p className="font-semibold text-indigo-600">Total Investment</p>
                  <p className="text-gray-700">0.56 Ether</p>
                </div>
                <div className="mb-4">
                  <p className="font-semibold text-yellow-600">Weekly Returns</p>
                  <p className="text-gray-700">0.005 Ether</p>
                </div>
                <div className="mb-4">
                  <p className="font-semibold text-red-600">Expenses</p>
                  <p className="text-gray-700">0.56 Ether</p>
                </div>
              </div>
            </div>
          </section>
        ) : activeComponent === "properties" ? (
          <Properties />
        ) : null}
      </div>
    </div>
  );
}

export default Dashboard;
