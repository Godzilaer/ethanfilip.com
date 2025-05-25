import PropTypes from "prop-types";

export default function ProjectCard(props) {
    let project = props.project;

    let typeToButtonLabel = {
        "Tool": "Use",
        "Game": "Play",
        "Website": "Visit",
    }

    return (
        <div className="col-auto card">
            <img className="p-3" src={project.img} />
            <div className="card-body text-center">
                <h2 className="card-title text-center">{project.name}</h2>
                <p className="card-text">{project.type}</p>
                
                <p>{project.desc}</p>
                <a href={project.link} target="_blank" rel='noopener noreferrer' className="btn btn-primary">{typeToButtonLabel[project.type]}</a>
            </div>
        </div>
    )
}

ProjectCard.propTypes = {
    project: PropTypes.object.isRequired,
}