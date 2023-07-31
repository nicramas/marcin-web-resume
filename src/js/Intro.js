import React from "react";
import msfoto from "../img/msFotoBg.png";

const Intro = () => {

    return (
        <div className="start" id="home">
            <section className="start_background">
                <div className="start_container">
                    <div className="start_container_text">
                        <h1>
                            Front-end Developer
                        </h1>
                        <h2>
                            I design and code beautifully simple things, and I love what I do.
                        </h2>
                    </div>
                        <div className="start_container_foto"
                        style={{
                        backgroundImage: `url(${msfoto})`,
                        }}>
                    </div>
                    <div className="start_container_buttons">
                        <a className="btn btnAbout" href="#about">
                            more about me
                        </a>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Intro