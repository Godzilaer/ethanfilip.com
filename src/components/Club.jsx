import PropTypes from 'prop-types';

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

function ClubGrade(props) {
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