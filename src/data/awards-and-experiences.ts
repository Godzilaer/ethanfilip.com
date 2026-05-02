type AwardExperienceConstructor = AwardExperienceConstructorBase & ({
    isOngoing: false
    endDate?: Date
} | {
    isOngoing: true
})

type AwardExperienceConstructorBase = {
    name: string
    desc?: string
    startDate: Date
    imgSrc?: string
    items?: Array<AwardExperienceItem>
}

export type AwardExperience = AwardExperienceConstructorBase & {
    id: number
    desc: string
    items: Array<AwardExperienceItem>
    isUpcoming: boolean
} & ({
    isOngoing: false
    endDate: Date
} | {
    isOngoing: true
})

interface AwardExperienceItemConstructor {
    name: string
    desc?: string
}

export type AwardExperienceItem = AwardExperienceItemConstructor & {
    id: number
    desc: string
}

let awardExperienceId = 0;

const awardExperience = (props: AwardExperienceConstructor): AwardExperience => {
    const base = {
        id: awardExperienceId++,
        name: props.name,
        startDate: props.startDate,
        isUpcoming: props.startDate > new Date(),
        desc: props.desc ?? '',
        imgSrc: props.imgSrc,
        items: props.items ?? [],
    };

    if (props.isOngoing) {
        return {
            ...base,
            isOngoing: true,
        };
    }

    return {
        ...base,
        isOngoing: false,
        endDate: props.endDate ?? props.startDate,
    };
};

let awardExperienceItemId = 0;

const awardExperienceItem = (props: AwardExperienceItemConstructor): AwardExperienceItem => ({
    id: awardExperienceItemId++,
    name: props.name,
    desc: props.desc ?? ''
});

const data: Array<AwardExperience> = [
    awardExperience({ name: "Leadership Conference - Costa Rica", startDate: new Date("July 7, 2026"), isOngoing: false, endDate: new Date("July 14, 2026") }),

    awardExperience({
        name: "DECA States (ICDC)", startDate: new Date("May 15, 2026"), isOngoing: false, desc: "I continued competing in PSE (Professional Selling Event) at the ICDC Massachsuetts state competition after regionals.", items: [
            awardExperienceItem({ name: "1st Place Exam Score Award", desc: "I had the highest exam score on the marketing exam for my category." }),
        ]
    }),

    awardExperience({
        name: "Science Olympiad States", startDate: new Date("Mar 7, 2026"), isOngoing: false, items: [
            awardExperienceItem({ name: "5th Place in Robot Tour" }),
            awardExperienceItem({ name: "Overall Team 7th Place", desc: "Out of 77 teams. This was by far our best states placement yet, and shows that our club is developing at a very fast rate." })
        ]
    }),

    awardExperience({
        name: "UMASS Amherst Science Olympiad Invitational", startDate: new Date("Feb 14, 2026"), isOngoing: false, items: [
            awardExperienceItem({ name: "2nd Place Medal in Robot Tour" })
        ]
    }),

    awardExperience({ name: "Congressional App Challenge Reception",startDate: new Date("Jan 29, 2026"), isOngoing: false, items: [
        awardExperienceItem({name: "Certificate of Recognition", desc: "As a finalist for my district, I recieved a certificate of recognition signed by congressman Jake Auchincloss."})
    ] }),

    awardExperience({
        name: "FTC Competition (Qualifier #1)", startDate: new Date("Jan 3, 2026"), isOngoing: false, items: [
            awardExperienceItem({ name: 'Sustain Award', desc: 'This award was presented to us because of our efforts to sustain the club by teaching underclassmen. A big part of recieving this award was my programming teaching project, ByteBrawl.' })
        ]
    }),

    awardExperience({
        name: "DECA Regionals (PSE Event)", startDate: new Date("Dec 11, 2025"), isOngoing: false, desc: "I competed in PSE (Professional Selling Event) at regionals.", items: [
            awardExperienceItem({ name: "1st Place Award", desc: "I won 1st place in my category at regionals, which qualified me for the state competition." }),
        ]
    }),

    awardExperience({ name: "HUVTSP", desc: "HUVTSP (Harvard Undergraduate Venture Tech Summer Program) is an in-depth program all about entrepeneurship. I attended many guest speaker events, including one from Mark Cuban. Together with a group of similarly-aged peers, we researched the impact of AI during an intership at the Amplify Institute AI political think-tank. I focused on the impacts of AI hallucinations and mitigation techniques. Our final presentation included actionable policy recommendations to better control AI in various fields, including medicine.", startDate: new Date("July 7, 2025"), endDate: new Date("August 15, 2025"), isOngoing: false }),

    awardExperience({ name: "Taize Youth Pilgrimage", startDate: new Date("Jun 24, 2025"), isOngoing: false, endDate: new Date("July 7, 2025") }),

    awardExperience({ name: "MATE Community Service Trip", startDate: new Date("Jun 23, 2024"), isOngoing: false, endDate: new Date("Jun 29, 2024"), desc: "I stayed in Farmington, Maine for 1 week as part of the MATE program in conjunction with the Dover Church. There, I worked with a team of students to rebuild the deck and porch-roof section of a house to help the inhabitants in need." }),

    awardExperience({
        name: "Massachusetts Science and Engineering Fair (MSEF)", startDate: new Date("May 11, 2024"), isOngoing: false, desc: "I competed in the state science fair in 8th grade. My group of 3 created a model wind turbine to explore the optimal number of blades.", items: [
            awardExperienceItem({ name: "1st Place Award", desc: "Included nomination to the Thermo Fisher Junior Innovators National Science Fair." }),
            awardExperienceItem({ name: "AMD Engineering Award" })
        ]
    }),

    awardExperience({ name: "Peer Leadership", startDate: new Date("March, 2024"), isOngoing: false, endDate: new Date("June, 2024"), desc: "In 8th grade, I was selected to be a part of the peer leadership program. Here, I learned for 4 full-day training sessions. Then, I applied my knowledge in a small team of other peer leaders to create a slideshow. We presented it to 6th graders and taught them about the key concepts we learned, including stereotypes and implicit bias." }),
]

data.sort((a, b) => b.startDate.getTime() - a.startDate.getTime())

const awardExperienceSections: Record<number, Array<AwardExperience>> = {};

data.forEach(awardExperience => {
    const year = awardExperience.startDate.getFullYear();

    if (!awardExperienceSections[year]) {
        awardExperienceSections[year] = [];
    }
    awardExperienceSections[year].push(awardExperience)
});

const final: Record<number, Array<AwardExperience>> = Object.entries(awardExperienceSections)
    .sort((y1, y2) => Number(y2[0]) - Number(y1[0]))
    .reduce((acc, [year, experiences]) => {
        acc[Number(year)] = experiences;
        return acc;
    }, {} as Record<number, Array<AwardExperience>>);

export default final;