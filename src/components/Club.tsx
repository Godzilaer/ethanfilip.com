import { Club, Grade } from '../data/extracurriculars'

interface ClubProps {
    club: Club
}

export default function ClubDisplay(props: ClubProps) {
    return (
        <li className="list-group-item bg-black text-white">
            <h3>{props.club.name}</h3>
            <p>{props.club.desc}</p>

            <ul className="list-group">
                {props.club.grades.map(grade => <ClubGrade key={grade.id} grade={grade} />)}
            </ul>
        </li>
    )
}

interface ClubGradeProps {
    grade: Grade
}

function ClubGrade(props: ClubGradeProps) {
    return (
        <li className="list-group-item bg-black text-white">
            <h5>{props.grade.num + "th Grade"}</h5>
            <p>{props.grade.desc}</p>
        </li>
    )
}