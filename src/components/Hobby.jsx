import React from "react";
import PropTypes from "prop-types";

export default function Hobby(props) {
    const hobby = props.hobby;
    return (
        <li className="list-group-item">
            <h3>{hobby.name}</h3>
            <p>{hobby.desc}</p>
        </li>
    )
}

Hobby.propTypes = {
    hobby: PropTypes.object.isRequired,
}