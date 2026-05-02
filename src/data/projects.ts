let project_id = 0

const projectThumbnailsPath = '/images/project-thumbnails/';

export type ProjectType = 'Games' | 'Tools/Other' | 'Websites'

interface ProjectConstructor {
    name: string
    type: ProjectType
    desc?: string
    imgSrc: string
    external_link?: string
}

export type Project = ProjectConstructor & {
    id: number
    desc: string
    isExternal: boolean
    link: string
}

const project = (props: ProjectConstructor): Project => ({
    id: project_id++,
    name: props.name,
    type: props.type,
    desc: props.desc ?? '',
    imgSrc: projectThumbnailsPath + props.imgSrc,
    isExternal: props.external_link !== undefined,
    link: props.external_link ?? `/projects/${props.name.toLowerCase().replace(/ /g, "-")}`,
});

export default [
    project({ name: 'ByteBrawl', type: 'Websites', desc: 'A Java programming and robotics learning platform that prioritizes fun learning through virtual battle-bot fighting and interactive lessons.', imgSrc: 'bytebrawl.webp', external_link: "https://bytebrawl.app" }),

    project({ name: 'Air Traffic Troubles', type: 'Games', desc: 'Air traffic control strategy and puzzle game where you must guide planes safely to land.', imgSrc: 'air-traffic-troubles.png' }),

    project({ name: 'Clock', type: 'Tools/Other', desc: 'Analog clock with an ocean background. Might add timers and alarms.', imgSrc: 'clock.png' }),

    project({ name: 'Coin Flipper', type: 'Games', desc: 'A 3D physics-based coin flipping sandbox. Includes a graph to see how probability approaches expected value over time.', imgSrc: 'coin-flipper.png' }),

    project({ name: 'Flappy Penguin', type: 'Games', desc: 'Uh oh, our good old bird friend is trying to navigate this frozen world. Help him dodge the ice spikes! Note: Penguins can\'t actually fly :(', imgSrc: 'flappy-penguin.png' }),

    project({ name: 'Coding Club', type: 'Websites', desc: 'The Dover Sherborn High School Coding Club website.', imgSrc: 'coding-club.png', external_link: 'https://coding-club.ethanfilip.com' }),
]