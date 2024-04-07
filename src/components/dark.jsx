import React, { useState } from 'react';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <div className={`bg-gray-800 text-white flex-shrink-0 transition-all duration-300 ${isOpen ? 'w-64' : 'w-16'}`}>
        {/* Sidebar content goes here */}
        <ul>
          <li><a href="#" className="block py-2 px-4">Link 1</a></li>
          <li><a href="#" className="block py-2 px-4">Link 2</a></li>
          <li><a href="#" className="block py-2 px-4">Link 3</a></li>
        </ul>
      </div>

      {/* Content */}
      <div className="flex-1">
        {/* Toggle button */}
        <button onClick={toggleSidebar} className="bg-gray-800 text-white px-4 py-2">Toggle Sidebar</button>

        {/* Main content goes here */}
        <div className="p-4">
          <p>Main content goes here</p>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
