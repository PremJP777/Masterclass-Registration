import React, { useState } from 'react';

const Modules = () => {
  const modules = [
    {
      title: "Introduction to Modern Web Development",
      description: (
        <>
          Begin your journey by understanding how web development has evolved over the years.
          <br />
          <br />
          You'll explore:
          <ul className="list-disc list-inside ml-4 mt-2 text-gray-600">
            <li>The history and phases of web technologies</li>
            <li>Core web concepts like HTML, CSS & JavaScript</li>
            <li>Client-side vs server-side development</li>
            <li>Overview of modern tools and workflows</li>
          </ul>
          <br />
          <span className="font-medium text-blue-600">Outcome:</span> Gain strong foundational knowledge that prepares you for the modern web stack.
        </>
      ),
    },
    {
      title: "Building Dynamic UIs with React",
      description: (
        <>
          Learn how to craft fast and interactive front-ends using React, the most popular JavaScript library.
          <br />
          <br />
          Topics Covered:
          <ul className="list-disc list-inside ml-4 mt-2 text-gray-600">
            <li>React components, props & state</li>
            <li>React Router for page navigation</li>
            <li>State management with hooks and context</li>
            <li>Reusable architecture for scalability</li>
          </ul>
          <br />
          <span className="font-medium text-blue-600">Outcome:</span> Create modular, maintainable user interfaces with ease.
        </>
      ),
    },
    {
      title: "Styling Efficiently with TailwindCSS",
      description: (
        <>
          Say goodbye to bloated CSS files! Embrace utility-first styling with TailwindCSS for clean, responsive designs.
          <br />
          <br />
          Topics Covered:
          <ul className="list-disc list-inside ml-4 mt-2 text-gray-600">
            <li>Tailwind utility classes & responsive breakpoints</li>
            <li>Custom themes and design systems</li>
            <li>Dark mode and animations</li>
            <li>Tips for rapid UI prototyping</li>
          </ul>
          <br />
          <span className="font-medium text-blue-600">Outcome:</span> Build beautiful, scalable UIs without writing custom CSS.
        </>
      ),
    },
    {
      title: "Full-Stack Integration and API Management",
      description: (
        <>
          This module bridges the front-end and back-end. Learn how to fetch, post, and manage data securely.
          <br />
          <br />
          Topics Covered:
          <ul className="list-disc list-inside ml-4 mt-2 text-gray-600">
            <li>RESTful APIs and JSON handling</li>
            <li>Axios/fetch for HTTP communication</li>
            <li>Authentication and protected routes</li>
            <li>Error handling & response optimization</li>
          </ul>
          <br />
          <span className="font-medium text-blue-600">Outcome:</span> Master integration between your front-end and any backend or third-party APIs.
        </>
      ),
    },
  ];

  const [activeModule, setActiveModule] = useState(null);

  const toggleModule = (index) => {
    setActiveModule(activeModule === index ? null : index);
  };

  return (
    <div className=" mx-auto my-5 px-2">
      {/* <h2 className="text-4xl md:text-5xl font-bold text-center mb-10 text-gray-800 tracking-tight">
         Masterclass Modules Overview
      </h2> */}

      <div className="space-y-6">
        {modules.map((module, index) => (
          <div
            key={index}
            className="bg-white border border-gray-200 rounded-sm overflow-hidden transition-all duration-300"
          >
            <button
              onClick={() => toggleModule(index)}
              className="w-full flex justify-between items-center px-6 py-5 bg-gradient-to-r border border-gray-300 from-gray-50 to-gray-100 hover:border-blue-400  text-left transition-all duration-300"
            >
              <span className="text-sm md:text-xl font-semibold text-gray-700">
                {module.title}
              </span>
              <svg
                className={`w-6 h-6 text-gray-600 transform transition-transform duration-300 ${
                  activeModule === index ? "rotate-180" : ""
                }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
            {activeModule === index && (
              <div className="text-xs md:text-base px-6 py-5 bg-white text-gray-700 border-t border-gray-200 animate-fadeIn">
                {module.description}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Modules;
