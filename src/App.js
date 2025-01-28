import React, { useState } from "react";
import Signup from "./Component/Signup";
import Dashboard from "./Component/Dashboard";

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [darkMode, setDarkMode] = useState(false); // Dark Mode State

  const handleToggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={darkMode ? "dark" : ""}>
      <div className="bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100 min-h-screen">
        <header className="flex justify-between p-4 shadow-md bg-white dark:bg-gray-800">
          <h1 className="text-xl font-bold">Realtor App</h1>
          <button
            onClick={handleToggleDarkMode}
            className="bg-blue-500 dark:bg-gray-700 text-white py-2 px-4 rounded-lg hover:bg-blue-600 dark:hover:bg-gray-600"
          >
            {darkMode ? "Light Mode" : "Dark Mode"}
          </button>
        </header>

        {isLoggedIn ? (
          <Dashboard handleLogout={() => setIsLoggedIn(false)} />
        ) : (
          <Signup setIsLoggedIn={setIsLoggedIn} />
        )}
      </div>
    </div>
  );
}
