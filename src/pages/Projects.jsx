import useEffect from 'react';
import ProjectCard from '/src/components/ProjectCard';
import projectsData from '/src/data/projects';

import '/src/assets/styles/projects.css';

export default function Projects() {
  useEffect(() => {
      document.title = "The Ethan Web - Projects";
  }, []);

  return (
    <main className="container-fluid">
      <h1 className="text-center title-main">Projects</h1>

      <section className="row justify-content-center">
        {projectsData.map(project => <ProjectCard key={project.id} project={project}/>)}
      </section>
    </main>
  )
}