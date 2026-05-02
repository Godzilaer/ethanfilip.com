import ProjectCard from '../components/ProjectCard';
import projectsData, { ProjectType, Project } from '../data/projects';

import '../assets/styles/projects.css'

export default function Projects() {
  const projectSections: Record<ProjectType, Array<Project>> = {
    'Websites': [],
    'Games': [],
    'Tools/Other': []
  };

  projectsData.forEach((project) => {
    projectSections[project.type].push(project);
  });

  return (
    <main className="container-fluid">
      <title>Ethan Filip&#39;s Projects</title>

      <h1 className="text-center title-main">Projects</h1>

      {Object.values(projectSections).map((projectSection, index) => {
        const projectType = Object.keys(projectSections)[index]; 
        return <ProjectSection key={projectType} title={projectType} projectsData={projectSection} />
      })}
    </main>
  )
}

function ProjectSection({ title, projectsData }: { title: string, projectsData: Array<Project> }) {
  return (
    <section className="row justify-content-center">
      <h2 className='text-center title-secondary' id={title.toLowerCase()}>{title}</h2>
      {projectsData.map(project => <ProjectCard key={project.id} project={project} />)}
    </section>
  );
}