import React from "react";
import msfoto from "../img/ms.jpg";

const Intro = () => {


    return (
        <div className="start" id="home"
        style={{
            width: "100vp",
            height: "40%",
            paddingTop:"10rem",
            textAlign: "center",
            display:"flex",
        }}>
            <section className="start_background"
            style={{
                margin:"auto",
            }}>
                <div className="start_container_intro"
                style={{
                    padding: "1.2rem",
                }}>
                    <div className="start_container_intro-text">
                        <h1
                        style={{
                            padding: "1.2rem 0",
                            fontSize: "2.1rem",
                            fontWeight: 500
                            }}
                        >Front-end Developer</h1>
                        <h2
                        style={{
                            paddingBottom: "2rem",
                            fontSize: "1.2rem"
                        }}>I design and code beautifully simple things, and I love what I do.</h2>
                    </div>
                        <div 
                    style={{
                        backgroundImage: `url(${msfoto})`,
                        backgroundRepeat: "no-repeat",
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        position:"center",
                        borderRadius:"50%",
                        width:"1rem",
                        height:"1rem",
                        padding: "4rem",

                        margin: "auto",
                    }}>
                    </div>
                    <div className="start_container_intro_buttons"
                    style={{
                        padding:"2rem 0 5rem 0",
                    }}>
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