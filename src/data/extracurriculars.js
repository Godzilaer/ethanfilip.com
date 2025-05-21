var clubId = 0;
const club = (name, desc, grades) => ({
    id: clubId++,
    name,
    grades,
    desc,
});

var gradeId = 0;
const grade = (num, desc) => ({
    id: gradeId++,
    num: num,
    desc: desc, 
});

var hobbyId = 0;
const hobby = (name, desc) => ({
    id: hobbyId++,
    name,
    desc,
});

export default {
    clubs : [
        club("DECA", "DECA is a business club that includes countless different categories. ", [
            grade(9, "I chose the individual Entrepeneurship series."),
        ]),

        club("Coding Club", "The coding club at Dover Sherborn Highschool brings programmers together to get better. ", [
            grade(9, "I became the Technical Director of Javascript and C#. I created the website for the club."),
        ]),

        club("Science Olympiad", "A series of science-based competitions, including builds and tests, starting at the regional level and progressing to states and beyond.", [
            grade(9, "1 of 3 freshmen to make the A team. Participated in many regional events and the UMASS event."),
        ]),

        club("Robotics", "A competition where each school builds a robot that will complete some sort of task that changes each year.", [
            grade(9, "I became familiar with the software and robotics environment while also attending events to support the team."),
        ]),
    ],

    hobbies : [
        hobby("Programming", "Programming began as a hobby for me that I found fun and relaxing. While it has continued to be this, it has also expanded into a main interest of mine."),
        hobby("Flight Simulation", "I have been very interested by planes for a long time. The way large hunks of metal can come together so specifically to create a flying being is astonisting to me. I began with the X-Plane flight simulator and spent many hours learning the real life procedures for airliners and flying their routes. Then, I began connecting to a global network called VATSIM. Here, I enhanced the realism by having access to a network of air traffic controllers who followed real life procedures to the T that I would have to speak to and coordinate with to complete a flight. At the start of 2025, I also took an interest for the Air Traffic Control side of things and began training on Vatsim to become a controller in the Boston airspace. In March I became a student ground controller."),
        hobby("Gaming", "I really enjoy playing games with friends. I especially enjoy cooperative games."),
        hobby("test", "test")
    ]
}