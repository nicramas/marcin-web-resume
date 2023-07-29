import React from "react";
import quoteGenerator from "../img/quoteGenerator.png";
import camperRepair from "../img/camperRepair.png";
import comingSoon from "../img/comingSoon.jpg";

const Projects = () => {
    
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
        opacity: "0.2"
    },
    {
        id: 'CampervanService',
        name: 'Campervan service',
        alt: "camper and caravan repair",
        image: images.camperImage,
        img:"blue",
        link: 'https://nicramas.github.io/MotorhomeService/',
        text: 'Motorhome service website created using Html and CSS',
        opacity: "0.2"
    },
    {
        id: 'Random',
        name: 'in progres',
        alt: "in progres",
        image: images.inProgresImage,
        img: "green",
        link: 'https://cssgrid-generator.netlify.app/',
        text: 'Under construction, coming soon',
        opacity: "0.2"
    },
]

    return (
        <section className="projects-container" id="projects"
        style={{
            width:"90%",
            margin:"auto",
            textAlign:"center",
            paddingBottom: "8rem"
        }}>
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
             <ul className="row"
                style={{
                    padding:"1rem",
                    fontSize:"1.3rem",
                    lineHeight:"1.5rem",
                    justifyContent:"center",
                    textAlign:"center"
                }}>
                    {
                        projects.map((project) => {
                            return(
                                <li className="col-" key={project.id}>
                        <figure>
                                <a className="projectImage" alt={project.alt} key={project.id}  href={project.link}
                                 style={{backgroundImage: project.image}}>
                                </a>
                        </figure>
                        <div>
                            {project.text} 
                        </div>
                    </li>
                            )
                        })
                    }
            </ul>
        </section>
    )
}

export default Projects
   