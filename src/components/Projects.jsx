import { Button } from "@mui/material";
import "./Projects.css";

const Projects = () => {
  return (
    <div className="projects-main-container">
      <h4>DEPARTMENT PROJECTS</h4>
      <div className="projects-container">
        <div className="projects-header-container">
          <h6>All Projects</h6>
          <p>
            * Click the projects incase you wish to see the impact of proposal
          </p>
        </div>
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
          <div className="project-list-container">
            <div className="project-item">
              <h4>Product 4</h4>
            </div>
            <div className="project-item">
              <h4>Product 5</h4>
            </div>
            <div className="project-item">
              <h4>Product 6</h4>
            </div>
          </div>
        </div>
      </div>
      <div className="gotovote-btn">
      <Button variant="contained" sx={{display: 'flex', alignContent: 'center',width: '160px', backgroundColor:"#F775B6", ":hover": {backgroundColor: '#F775B6'},}}>Go To Vote</Button>
      </div>
    </div>
  );
};

export default Projects;
