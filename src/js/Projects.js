import React from "react";
import quoteGenerator from "../img/quoteGenerator.png";
import camperRepair from "../img/camperRepair.png";
import comingSoon from "../img/comingSoon.jpg";
import circle from "../img/code-circle.svg"

const Test = () => {
    
    const images = {
        quoteImage: `url(${quoteGenerator})`,
        camperImage: `url(${camperRepair})`,
        inProgresImage: `url(${comingSoon})`
    }
    const projects = [
    {
        id: 'quoteGen',
        name: 'Quote generator',
        alt: "quote generator",
        image: images.quoteImage,
        img: "red",
        link: 'https://nicramas.github.io/quotes-Generator-v2/',
        text: 'Random quote generator using Javascript and JSON database',
    },
    {
        id: 'CampervanService',
        name: 'Campervan service',
        alt: "camper and caravan repair",
        image: images.camperImage,
        img:"blue",
        link: 'https://nicramas.github.io/MotorhomeService/',
        text: 'Motorhome service website created using HTML and CSS',
    },
    {
        id: 'Random',
        name: 'in progres',
        alt: "in progres",
        image: images.inProgresImage,
        img: "green",
        link: 'https://cssgrid-generator.netlify.app/',
        text: 'Under construction, coming soon',
    },
]

    return (
        <section className="projects-container" id="projects">
            <h1 
            style={{
                fontSize:"1.7rem",
                fontWeight:"500",
                padding:"1rem 3rem 2rem"
            }}>Projects</h1>
            <h2
            style={{
                fontSize:"1.3rem",
                padding:"0 3rem 5rem",
            }}>Here are a few past design projects I'v worked on.
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
                        {/* <div>
                            {project.text} 
                        </div> */}
                    </li>
                    )
                })
                }
            </ul>
        </section>
    )
}

export default Test
   