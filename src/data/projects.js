var id = 0

const projectThumbnailsPath = '/images/project-thumbnails/';
const projectTypes = {
    tool: "Tool",
    game: "Game",
    website: "Website",
}

const project = (name, type, desc, img, externalLink=null) => ({
    id: id++,
    name,
    type,
    desc,
    img: projectThumbnailsPath + img,
    link: externalLink ? externalLink : `/projects/${name.toLowerCase().replace(/ /g, "-")}`,
});

export default [
  project('Air Traffic Troubles', projectTypes.game, 'Air traffic control strategy and puzzle game where you must guide planes safely to land.', 'air-traffic-troubles.png'),
  project('Clock', projectTypes.tool, 'Analog clock with an ocean background. Might add timers and alarms.', 'clock.png'),
  project('Coin Flipper', projectTypes.game, 'A 3D physics-based coin flipping sandbox. Includes a graph to see how probability approaches expected value over time.', 'coin-flipper.png'),
  project('Flappy Pengoon', projectTypes.game, 'Uh oh, our good old bird friend is trying to navigate this frozen world. Help him dodge the ice spikes! Note: Penguins can\'t actually fly :(', 'flappy-pengoon.png'),
  //project('Coding Club', projectTypes.website, 'The Dover Sherborn High School coding club website.', 'coding_club.png', 'github.com'),
]