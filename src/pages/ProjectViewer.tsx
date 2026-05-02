import { useParams } from "react-router-dom";
import projectsData from '../data/projects';

import '/src/assets/styles/project-viewer.css';
import NotFound from './NotFound';
import { useEffect } from "react";

export default function ProjectViewer() {
    const params = useParams();

    if(!params.name) {
        return <NotFound />
    }

    const nameWithSpaces = params.name.replace(/-/g, " ");

    if (!projectExists(nameWithSpaces)) {
        return (<NotFound />)
    }

    const nameSplit = nameWithSpaces.split(" ");
    const nameTitleCase = nameSplit.map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(" ");

    useEffect(() => {
        document.title = `Ethan Filip's Projects - ${nameTitleCase}`
    }, [])

    return (
        <main className="container-fluid">
            <h1 className="title-main text-center">{nameTitleCase}</h1>
            <button id="fullscreen-btn" onClick={onFullscreenButtonClicked}><img src="/images/fullscreen_icon.png" /></button>
            <iframe id="project-viewer" src={`/project-files/${params.name}/index.html`}></iframe>
        </main>
    )
}

function projectExists(name: string) {
    const project = projectsData.find(project => project.name.toLowerCase() === name && project.isExternal === false);

    return project !== undefined;
}

function onFullscreenButtonClicked() {
    const elem = document.getElementById("project-viewer");

    if(!elem) return

    elem.requestFullscreen();
}