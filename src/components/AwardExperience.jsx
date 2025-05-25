import React from "react";
import PropTypes from "prop-types";

export default function AwardExperience(props) {
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