import { Project, ProjectType } from '../data/projects'

interface ProjectCardProps {
    project: Project
}

export default function ProjectCard(props: ProjectCardProps) {
    const typeToButtonLabel: Record<ProjectType, string> = {
        "Tools/Other": "Use",
        "Games": "Play",
        "Websites": "Visit",
    }

    return (
        <div className="col-auto card" id={props.project.name.toLowerCase().replaceAll(" ", "-")}>
            <img className="p-3" src={props.project.imgSrc} />
            <div className="card-body text-center text-white">
                <h2 className="card-title text-center">{props.project.name}</h2>

                <p>{props.project.desc}</p>
                <a href={props.project.link} target="_blank" rel='noopener noreferrer' className="btn btn-primary">{typeToButtonLabel[props.project.type]}</a>
            </div>
        </div>
    )
}