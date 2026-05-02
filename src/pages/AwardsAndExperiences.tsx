import AwardExperienceSection from '../components/AwardExperienceSection'
import awardExperienceSections from '../data/awards-and-experiences'

export default function AwardsAndExperiences() { 
    const sortedYears = Object.keys(awardExperienceSections)
        .sort((a, b) => Number(b) - Number(a))

    return (
        <main className="container-fluid">
            <title>Ethan Filip&#39;s Awards and Experiences</title>

            <h1 className="title-main text-center">Awards and Experiences</h1>
            {sortedYears.map(year => {
                const yearNum = parseInt(year, 10)
                return <AwardExperienceSection key={year} sectionName={year} awardsExperiencesList={awardExperienceSections[yearNum]} />
            })}
        </main>
    )
}