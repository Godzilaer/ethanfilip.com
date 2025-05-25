import React from "react";
import PropTypes from "prop-types";

export default function ClubGrade(props) {
    const grade = props.grade;
    return (
        <li className="list-group-item">
            <h5>{grade.num + "th Grade"}</h5>
            <p>{grade.desc}</p>
        </li>
    )
}

ClubGrade.propTypes = {
    grade: PropTypes.object.isRequired,
}