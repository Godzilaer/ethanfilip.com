import React from 'react';
import PropTypes from 'prop-types';
import ClubGrade from './ClubGrade';

export default function Club(props) {
    const club = props.club;

    return (
        <li className="list-group-item">
            <h3>{club.name}</h3>
            <p>{club.desc}</p>

            <ul className="list-group">
                {club.grades.map(grade => <ClubGrade key={grade.id} grade={grade}/>)}
            </ul>
        </li>
    )
}

Club.propTypes = {
    club: PropTypes.object.isRequired,
}