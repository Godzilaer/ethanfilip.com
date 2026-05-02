import { AwardExperience } from "../data/awards-and-experiences"

interface AwardExperienceSectionProps {
    sectionName: string
    awardsExperiencesList: Array<AwardExperience>
}

export default function AwardExperienceSection(props: AwardExperienceSectionProps) {
    return (
        <section id={props.sectionName}>
            <h2 className="title-secondary text-center mt-2">{props.sectionName}</h2>
            <ul className="list-group">
                {props.awardsExperiencesList.map(awardExperience =>
                    <AwardExperienceDisplay key={awardExperience.id} awardExperience={awardExperience} />)}
            </ul>
        </section>
    )
}

function AwardExperienceDisplay({ awardExperience }: { awardExperience: AwardExperience }) {
    let dateDisplay = properDate({ date: awardExperience.startDate });

    if (!awardExperience.isOngoing) {
        const { startDate, endDate } = awardExperience;
        if (startDate != endDate) {
            if (startDate.getMonth() == endDate.getMonth()) {
                dateDisplay = `${properDate({ date: startDate, removeYear: true })} - ${endDate.getDate()}, ${endDate.getFullYear()}`
            } else if (startDate.getFullYear() == endDate.getFullYear()) {
                dateDisplay = `${properDate({ date: startDate, removeYear: true })} - ${properDate({ date: endDate })}`
            } else { // means end date has diff year
                dateDisplay = `${properDate({ date: startDate })} - ${properDate({ date: endDate })}`
            }
        }
    }

    return (
        <li className="list-group-item bg-black text-white">
            <h3>{awardExperience.name}</h3>
            <h5><b>{awardExperience.isUpcoming && "Upcoming:"}</b> {dateDisplay}</h5>

            <p>{awardExperience.desc}</p>

            <img src={awardExperience.imgSrc} />

            <ul className="list-group">
                {awardExperience.items.map(item => (
                    <li key={item.id} className="list-group-item bg-black text-white">
                        <h4>{item.name}</h4>
                        <p>{item.desc}</p>
                    </li>
                ))}
            </ul>
        </li>
    )
}

function properDate({ date, removeYear }: { date: Date, removeYear?: true }): string {
    return date.toLocaleDateString("en-US", {
        month: 'long',
        day: "numeric",
        year: removeYear == true ? undefined : "numeric",
    });
}