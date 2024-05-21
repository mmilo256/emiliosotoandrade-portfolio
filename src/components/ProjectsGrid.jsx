import ProjectCard from "./ProjectCard";
import useDataStore from "../stores/useDataStore";

function ProjectsGrid() {
  const data = useDataStore((state) => state.data);
  return (
    <div className="container mt-10 mx-auto px-2 grid 2xl:grid-cols-2 gap-6">
      {data.projects.map((project) => (
        <ProjectCard data={project} key={project.title} />
      ))}
    </div>
  );
}

export default ProjectsGrid;
