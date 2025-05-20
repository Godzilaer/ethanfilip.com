import AwardExperienceSection from '/src/components/AwardExperienceSection'
import awardsAndExperiences from '/src/data/awards-and-experiences'

export default function AwardsAndExperiences() {
    let sections = awardsAndExperiences;

    let today = new Date();
    let year = today.getFullYear();

    //Go through awards/experiences this year
    awardsAndExperiences[year].forEach(awardExperience => {
        let startDate = new Date(awardExperience.startDate);

        //If date in future
        if (startDate > today) {
            awardExperience.isUpcoming = true;
        }
    });

    let awardExperienceSections = [];

    for(const [section, awardsExperiences] of Object.entries(sections).sort((a, b) => Number(b[0]) - Number(a[0]))) {
        awardExperienceSections.push(<AwardExperienceSection key={section} sectionName={section} awardsExperiences={awardsExperiences}/>);
    }

    return (
        <main className="container-fluid">
            <h1 className="title-main text-center">Awards and Experiences</h1>

            {awardExperienceSections}
        </main>
    )
}