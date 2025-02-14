import React, { useState } from "react";
import Project from "./projects/project";
import { Projects } from "../../function/data";
import "./porfolio.css"

// Updated Tabs
const tabs = [
  { id: 1, name: "All" },
  { id: 2, name: "Projects" },
  { id: 3, name: "Dev Tools" },
  { id: 4, name: "Design" },
];

function Portfolio() {
  const [activeTab, setActiveTab] = useState(1);

  // Filter projects based on the active tab
  const filteredProjects =
    activeTab === 1
      ? Projects // Show all projects if "All" is selected
      : Projects.filter(
          (project) => project.category === tabs[activeTab - 1].name
        );

  return (
    <section className="portfolio-main p-6">
      {/* Render Tabs */}
      <div className="flex space-x-4 mb-6">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            className={`py-2 px-4 rounded ${
              activeTab === tab.id
                ? "bg-blue-600 text-white"
                : "bg-gray-200 text-gray-800"
            }`}
            onClick={() => setActiveTab(tab.id)}
          >
            {tab.name}
          </button>
        ))}
      </div>

      {/* Pass filtered projects to Project component */}
      <Project filteredProjects={filteredProjects} />
    </section>
  );
}

export default Portfolio;
