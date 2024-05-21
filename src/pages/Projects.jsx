import Heading from "../components/Heading";
import ProjectsGrid from "../components/ProjectsGrid";

function Projects() {
  return (
    <main id="projects" className="bg-gradient-to-b from-gray-950 to-slate-900">
      <div className="container mx-auto px-2 md:px-0">
        <Heading>Proyectos</Heading>
        <p className="text-center text-slate-400 font-light text-xl">
          Colección de trabajos realizados para terceros y proyectos personales
        </p>
        <ProjectsGrid />
      </div>
    </main>
  );
}

export default Projects;
