import React from "react";
import quoteGenerator from "../img/quoteGenerator.png";
import camperRepair from "../img/camperRepair.png";
import kanbanBoard from "../img/kanban-board.png";
import player from "../img/media-player.png";
import circle from "../img/code-circle.svg";

const Test = () => {
    
    const images = {
        quoteImage: `url(${quoteGenerator})`,
        camperImage: `url(${camperRepair})`,
        kanbanImage: `url(${kanbanBoard})`,
        playerImage: `url(${player})`,
    }
    const projects = [
    {
        id: 'quoteGen',
        name: 'Quote generator',
        alt: "quote generator",
        image: images.quoteImage,
        img: "red",
        link: 'https://nicramas.github.io/quotes-Generator-v2/',
        text: 'Random quote generator using JavaScript',
    },
    {
        id: 'MediaPlayer',
        name: 'Music Player',
        alt: "camper and caravan repair",
        image: images.playerImage,
        img:"blue",
        link: 'https://nicramas.github.io/web-music-player/',
        text: 'Music player using JavaScript',
    },
    {
        id: 'KanbanBoard',
        name: 'Kanban Board',
        alt: "drag and drop kanban board",
        image: images.kanbanImage,
        img: "green",
        link: 'https://nicramas.github.io/drag-drop-list/',
        text: 'Drag and drop Kanban Board using JavaScript',
    },
]

    return (
        <section className="projects-container" id="projects">
            <h1>Projects</h1>
            <h2>
                Here are a few past design projects I'v worked on.
                <a href="mailto:m.sapierzynski@hotmail.com"> Email me</a>
            </h2>
             <ul className="project-cards">
                {
                projects.map((project) => {
                    return(
                    <li className="card-container" key={project.id}>
                        <div className="card" alt={project.alt} key={project.id}  href={project.link}>
                            <div className="card-content">
                                <h2 className="card-topic">Project Info</h2>
                                <p className="card-text">{project.text}</p>
                                <a className="btn btnMenu" href={project.link}>Visit Website</a>
                            </div>
                            <div className="card-imgBox">
                                <img className="icon-imgBox" src={circle} alt="circle code logo"/>
                            </div>
                            <div className="card-textBox" style={{backgroundImage: project.image}}></div>       
                        </div>
                    </li>
                    )
                })
                }
            </ul>
        </section>
    )
}

export default Test
   