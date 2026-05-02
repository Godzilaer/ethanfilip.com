interface ClubConstructor {
    name: string
    desc?: string
    grades: Array<Grade>
}

export type Club = ClubConstructor & {
    id: number
    desc: string
}

interface GradeConstructor {
    num: 9 | 10 | 11 | 12
    desc?: string
}

export type Grade = GradeConstructor & {
    id: number
    desc: string
}

interface HobbyConstructor {
    name: string
    desc?: string
}

export type Hobby = HobbyConstructor & {
    id: number
    desc: string
}

let clubId = 0;
const club = (props: ClubConstructor): Club => ({
    id: clubId++,
    name: props.name,
    grades: props.grades,
    desc: props.desc ?? '',
});

let gradeId = 0;
const grade = (props: GradeConstructor): Grade => ({
    id: gradeId++,
    num: props.num,
    desc: props.desc ?? ''
});

let hobbyId = 0;
const hobby = (props: HobbyConstructor): Hobby => ({
    id: hobbyId++,
    name: props.name,
    desc: props.desc ?? '',
});

export default {
    clubs: [
        club({
            name: "Science Olympiad", desc: "A series of science-based competitions, including builds and tests, starting at the regional level and progressing to states and beyond.", grades: [
                grade({num: 10, desc: "I was chosen to become junior captain, making me the fourth captain along with 3 seniors. I helped organize teams and a bake sale while competing at regionals, UMASS, Harvard, and states. My main event was robot tour, where I spent many hours coding a robot to solve a maze in a specific time. I got 5th at states in this event." }),
                grade({ num: 9, desc: "1 of 3 freshmen to make the A team. Participated in many regional events and the UMASS event." }),
            ]
        }),

        club({
            name: "DECA", desc: "DECA is a business club that includes countless different categories. ", grades: [
                grade({num: 10, desc: "I competed in PSE (Professional Selling Event), and I qualified for the state competition. I recieved the highest exam score at the state conference for my event."}),
                grade({ num: 9, desc: "I chose the individual Entrepeneurship series." }),
            ]
        }),

        club({
            name: "Robotics", desc: "A competition where each school builds a robot that will complete some sort of task that changes each year.", grades: [
                grade({num: 10, desc: "I participated in code team meetings, learning how to code the robot and implementing some features, including helping with the shooting mechanisms. Helped my team win the Sustain Award at a regional competition with my app ByteBrawl." }),
                grade({ num: 9, desc: "I became familiar with the software and robotics environment while also attending events to support the team." }),
            ]
        }),

        club({
            name: "Coding Club", desc: "The coding club at Dover Sherborn Highschool brings programmers together to get better. ", grades: [
                grade({num: 10, desc: "I continued helping to run meetings and teaching members programming." }),
                grade({ num: 9, desc: "I became the Technical Director of Javascript and C#. I created the website for the club." }),
            ]
        }),

        club({
            name: "Regional Band", desc: "I play the clarinet. We meet 2-3 times a week and perform concerts both at school and at competitions and events, such as graduation.", grades: []
        })
    ],

    hobbies: [
        hobby({ name: "Programming", desc: "Programming began as a hobby for me that I found fun and relaxing. While it has continued to be this, it has also expanded into a main interest of mine." }),
        hobby({ name: "Flight Simulation", desc: "I have been very interested by planes for a long time. The way large hunks of metal can come together so specifically to create a flying being is astonisting to me. I began with the X-Plane flight simulator and spent many hours learning the real life procedures for airliners and flying their routes. Then, I began connecting to a global network called VATSIM. Here, I enhanced the realism by having access to a network of air traffic controllers who followed real life procedures to the T that I would have to speak to and coordinate with to complete a flight." }),
    ]
}