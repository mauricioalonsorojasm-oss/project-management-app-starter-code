import { Link } from "react-router-dom";
import ProjectCard from "../components/ProjectCard"; // used to render each Project
import { useEffect, useState } from "react";

//https://project-management-api-4641927fee65.herokuapp.com/projects


function ProjectListPage() {

  const [allProjects, setAllProjects] = useState(null);

  useEffect(() => {()







  
  return (
    <div className="ProjectListPage">

      <Link to="/projects/create">
        <button>Create Project</button>
      </Link>     

      {/* ... list of all projects should be rendered here   */}
      {/* ... for each project, we should render one ProjectCard */}
       
    </div>
  );
}

export default ProjectListPage;