import React from "react";
import PropTypes from "prop-types";
import AwardExperience from "./AwardExperience";

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