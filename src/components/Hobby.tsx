import { Hobby } from "../data/extracurriculars";

interface HobbyProps {
    hobby: Hobby
}

export default function HobbyDisplay(props: HobbyProps) {
    return (
        <li className="list-group-item bg-black text-white">
            <h3>{props.hobby.name}</h3>
            <p>{props.hobby.desc}</p>
        </li>
    )
}