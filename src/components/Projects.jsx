import "./Projects.css";

const Projects = () => {
  return (
    <div className="projects-main-container">
      <h4>DEPARTMENT PROJECTS</h4>
      <div className="projects-container">
        <h6>All Projects</h6>
        <p>
          * Click the projects incase you wish to see the impact of proposal
        </p>
        <div className="project-list-main-container">
          <div className="project-list-container">
            <div className="project-item">
              <h4>Product 1</h4>
            </div>
            <div className="project-item">
              <h4>Product 2</h4>
            </div>
            <div className="project-item">
              <h4>Product 3</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
