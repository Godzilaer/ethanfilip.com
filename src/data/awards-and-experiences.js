var awardExperienceId = 0;
const awardExperience  = (name, startDate, visibleDate, desc, imgSrc, items) => ({
    id: awardExperienceId++,
    name,
    startDate,
    visibleDate,
    desc,
    imgSrc,
    items,
    isUpcoming: false,
});

var awardExperienceItemId = 0;
const awardExperienceItem = (name, desc) => ({
    id: awardExperienceItemId++,
    name,
    desc
});

export default {
    2025 : [
        awardExperience("Taize Youth Pilgrimage", "2025-6-24", "June 24 - July 7", "Taize is a monastic community in Burgundy, France. I will be taking part in the youth pilgrimage along with thousands of other teenagers from across the world..", "", []),
    ],

    2024 : [
        awardExperience("MATE Community Service Trip", "2024-6-23", "June 23 - 29", "I stayed in Farmington, Maine for 1 week as part of the MATE program in conjunction with the Dover Church. There, I worked with a team of students to rebuild the deck and porch-roof section of a house to help the inhabitants in need.", "", []),

        awardExperience("Massachusetts Science and Engineering Fair (MSEF)", "2024-5-11", "May 11", "I competed in the state science fair in 8th grade. My group of 3 created a model wind turbine to explore the optimal number of blades.", "", [
            awardExperienceItem("1st Place Award", "Included nomination to the Thermo Fisher Junior Innovators National Science Fair."), 
            awardExperienceItem("AMD Engineering Award", "")]),
        
        awardExperience("Peer Leadership", "", "Spring", "In 8th grade, I was selected to be a part of the peer leadership program. Here, I learned for 4 full-day training sessions. Then, I applied my knowledge in a small team of other peer leaders to create a slideshow. We presented it to 6th graders and taught them about the key concepts we learned, including stereotypes and implicit bias.", "", []), 
    ],
}