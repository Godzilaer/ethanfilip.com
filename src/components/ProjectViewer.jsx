import { React, useEffect } from 'react';
import { useParams } from "react-router-dom";
import projectsData from '/src/data/projects';

import '/src/assets/styles/project-viewer.css';
import NotFound from '/src/pages/NotFound';

export default function ProjectViewer() {
    const params = useParams();
    let split = params.name.replaceAll("-", " ").split(" ");
    let titleCaseName = split.map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(" ");

    useEffect(() => {
        document.title = `The Ethan Web - ${titleCaseName}`;
    }, [titleCaseName]);

    if(!ProjectExists(params)) {
        return (<NotFound />)
    }    

    return (
        <main className="container-fluid">
            <h1 className="title-main text-center">{titleCaseName}</h1>
            <button id="fullscreen-btn" onClick={OnFullscreenButtonClicked}><img src="/images/fullscreen_icon.png"/></button>
            <iframe id="project-viewer" src={`/project-files/${params.name}/index.html`}></iframe>
        </main>
    )
}

function ProjectExists(params) {
    const project = projectsData.find(project => project.name.toLowerCase() === params.name.replace(/-/g, " "));

    return project !== undefined;
}

function OnFullscreenButtonClicked() {
    const elem = document.getElementById("project-viewer");
    if (elem.requestFullscreen) {
        elem.requestFullscreen();
    } else if (elem.mozRequestFullScreen) { // Firefox
        elem.mozRequestFullScreen();
    } else if (elem.webkitRequestFullscreen) { // Chrome, Safari and Opera
        elem.webkitRequestFullscreen();
    } else if (elem.msRequestFullscreen) { // IE/Edge
        elem.msRequestFullscreen();
    }
}