import React, { useState } from 'react';
import Reviews from "./Reviews.jsx";
import Modules from "./Modules.jsx"

const Tabs = () => {
  const [activeTab, setActiveTab] = useState('about');

  const renderContent = () => {
    switch (activeTab) {
      case 'about':
        return (
          <div className="p-4">
          <h3 className="text-2xl font-bold mb-2">What you'll learn</h3>
          <p className="text-sm md:text-base text-gray-600">
            Dive into our comprehensive Web Development Masterclass, a carefully curated program designed to equip you with the skills needed to build high-performance, user-friendly websites and applications. You'll gain a deep understanding of modern front-end development using <strong>React</strong> and <strong>TailwindCSS</strong>, learn how to design clean, scalable UI components, and efficiently manage application state.
            <br /><br />
            Beyond the front-end, you’ll explore full-stack concepts including API integration, RESTful services, and backend logic to build dynamic applications. With real-world projects, live examples, and expert-led guidance, you’ll develop practical experience and a portfolio that showcases your abilities.
            <br /><br />
            Whether you're a beginner looking to start your journey or a developer aiming to upskill with modern tools and frameworks, this masterclass will give you the confidence and knowledge to build and deploy professional-grade web applications.
          </p>
        </div>
        
        );
      case 'modules':
        return (
          <div className="p-4">
            <h3 className="text-3xl text-gray-800 font-bold mb-2 ml-2">Modules</h3>
            {/* <ul className="list-disc ml-5 text-gray-600">
              <li>Introduction to Modern Web Development</li>
              <li>Building Dynamic UIs with React</li>
              <li>Styling Efficiently with TailwindCSS</li>
              <li>Full-Stack Integration and API Management</li>
            </ul> */}
            <Modules/>
          </div>
        );
      case 'reviews':
        return (
          <div className="p-4">
            <h3 className="text-3xl font-bold text-gray-800 mb-2">Reviews</h3>
            <p className="text-gray-600">
              Our participants rave about the masterclass—praising its clarity, depth, and practical approach. It’s a game changer for those looking to level up in web development.
            </p>
            <Reviews />
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="px-3 md:px-12 py-8 bg-white">
      <div className="border-b border-gray-200">
        <nav className="-mb-px flex space-x-8" aria-label="Tabs">
          <button
            onClick={() => setActiveTab('about')}
            className={`whitespace-nowrap pb-4 px-1 border-b-2 font-medium text-sm transition-colors duration-300 ${
              activeTab === 'about'
                ? 'border-blue-500 text-blue-600'
                : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
            }`}
          >
            About
          </button>
          <button
            onClick={() => setActiveTab('modules')}
            className={`whitespace-nowrap pb-4 px-1 border-b-2 font-medium text-sm transition-colors duration-300 ${
              activeTab === 'modules'
                ? 'border-blue-500 text-blue-600'
                : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
            }`}
          >
            Modules
          </button>
          <button
            onClick={() => setActiveTab('reviews')}
            className={`whitespace-nowrap pb-4 px-1 border-b-2 font-medium text-sm transition-colors duration-300 ${
              activeTab === 'reviews'
                ? 'border-blue-500 text-blue-600'
                : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
            }`}
          >
            Reviews
          </button>
        </nav>
      </div>
      <div className="mt-4 bg-white shadow">
        {renderContent()}
      </div>
    </div>
  );
};

export default Tabs;
