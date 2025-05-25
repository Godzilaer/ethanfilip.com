import PropTypes from "prop-types";

export default function AwardExperienceSection(props) {
    const awardsExperiences = props.awardsExperiences;

    return (
        <section id={props.sectionName}>
            <h2 className="title-secondary text-center mt-2">{props.sectionName}</h2>
            <ul className="list-group">
                {awardsExperiences.map(awardExperience => <AwardExperience key={awardExperience.id} awardExperience={awardExperience}/>)}
            </ul>
        </section>
    )
}

AwardExperienceSection.propTypes = {
    sectionName: PropTypes.string.isRequired,
    awardsExperiences: PropTypes.array.isRequired,
}

function AwardExperience(props) {
    const awardExperience = props.awardExperience;

    return (
        <li className="list-group-item">
            <h3>{awardExperience.name}</h3>
            <h5><b>{awardExperience.isUpcoming && "Upcoming:"}</b> {awardExperience.visibleDate}</h5>
            <p>{awardExperience.desc}</p>

            <img src={awardExperience.imgSrc} />

            <ul className="list-group">
                {awardExperience.items.map(item => (
                    <li key={item.id} className="list-group-item">
                        <h4>{item.name}</h4>
                        <p>{item.desc}</p>
                    </li>
                ))}
            </ul>
        </li>
    )
}

AwardExperience.propTypes = {
    awardExperience: PropTypes.object.isRequired,
}