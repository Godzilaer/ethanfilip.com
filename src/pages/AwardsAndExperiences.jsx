import React from 'react';
import AwardExperienceSection from '/src/components/AwardExperienceSection'
import awardsAndExperiences from '/src/data/awards-and-experiences'

export default function AwardsAndExperiences() {
    var awardExperienceSections = [];

    for(const [section, awardsExperiences] of awardsAndExperiences) {
        awardExperienceSections.push(<AwardExperienceSection key={section} sectionName={section} awardsExperiences={awardsExperiences}/>);
    }

    return (
        <main className="container-fluid">
            <h1 className="title-main text-center">Awards and Experiences</h1>
            {awardExperienceSections}
        </main>
    )
}