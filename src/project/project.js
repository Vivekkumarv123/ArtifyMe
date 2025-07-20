import "./project.css";
import { ProjectCard } from "./projectCard";
import projects from "./projects.json";
import { useState } from "react";

export function Project() {
  const [data, setData] = useState(projects.projects); // Initialize with all projects
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(8); // Fixed number of posts per page
  const [selectedCategory, setSelectedCategory] = useState(''); // For category selection

  const lastPostIndex = currentPage * postsPerPage;
  const firstPostIndex = lastPostIndex - postsPerPage;
  const currentPosts = data.slice(firstPostIndex, lastPostIndex);

  const handleChange = (category) => {
    setSelectedCategory(category);
    // Filter the projects based on category
    const filteredData = projects.projects.filter((project) =>
      category === "" || project.category === category
    );
    setData(filteredData);
    setCurrentPage(1); // Reset to the first page after filtering
  };
  // Pagination Logic
  const pageCount = Math.ceil(data.length / postsPerPage);
  
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className="project">
      <div className="project-header">
        <h1>
          Our Projects<p>Home / Project</p>
        </h1>
      </div>

      {/* Project Categories */}
      <div className="project-categories">
        <ul>
          <ol className={`p-ctg ${selectedCategory === '' ? 'takenCategory' : 'notakenCategory'}`} onClick={() => handleChange('')}>
            All
          </ol>
          <ol className={`p-ctg ${selectedCategory === 'Bedroom' ? 'takenCategory' : 'notakenCategory'}`} onClick={() => handleChange('Bedroom')}>
            Bedroom
          </ol>
          <ol className={`p-ctg ${selectedCategory === 'Bathroom' ? 'takenCategory' : 'notakenCategory'}`} onClick={() => handleChange('Bathroom')}>
            Bathroom
          </ol>
          <ol className={`p-ctg ${selectedCategory === 'Kitchen' ? 'takenCategory' : 'notakenCategory'}`} onClick={() => handleChange('Kitchen')}>
            Kitchen
          </ol>
          <ol className={`p-ctg ${selectedCategory === 'Living Area' ? 'takenCategory' : 'notakenCategory'}`} onClick={() => handleChange('Living Area')}>
            Living Area
          </ol>
        </ul>
      </div>

      {/* Display Projects */}
      <div className="our-projects">
        {currentPosts.length > 0 
          ? currentPosts.map((pro, ind) => <ProjectCard props={pro} key={ind} />)
          : <p>No projects found for this category.</p>
        }
      </div>

      {/* Pagination */}
      <div className="pagination">
        {Array.from({ length: pageCount }, (_, i) => (
          <button
            key={i + 1}
            onClick={() => handlePageChange(i + 1)}
            className={i + 1 === currentPage ? 'active' : ''}
          >
            {i + 1}
          </button>
        ))}
      </div>
    </div>
  );
}
