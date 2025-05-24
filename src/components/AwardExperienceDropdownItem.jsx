export default function AwardExperienceDropdownItem(props) {
    return (
        <li><a className="dropdown-item" href={`/awards-and-experiences#${props.sectionName}`}>{props.sectionName}</a></li>
    )
}