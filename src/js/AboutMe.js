import React from "react";
import devices from "../img/devices.svg";
import developper from "../img/developper.svg";

const AboutMe = () => {

    const skillsArray = ['JavaScript ES5/ES6+', 'Firebase', 'React', 'Bootstrap','HTML', 'CSS', 'Sass', 'Git', 'RWD', 'Json', 'Gulp', 'Github', 'English B2', 'Russian B2', 'Polish Native' ]

    return (
    <div className="aboutMe">
        <section className="aboutMe_image">
            <div className="aboutMe_image_img"></div>
        </section>
        <section className="aboutMe_container"
        style={{
            width: "100vw",
        }}>
            <div className="aboutMe_skills"
            >
                <div>
                    <div className="aboutMe_skillImage"
                    style={{
                        backgroundImage: `url(${devices})`,
                        height: "30vw",
                        maxHeight: "283px",
                        backgroundRepeat: "no-repeat",
                        backgroundSize: "contain",
                        backgroundPosition: "center",
                        marginBottom: "0.1rem",
                    }}
                    >
                    </div>
                </div>
                
                <div className="aboutMe_skillsText" id="about"
                style={{
                    textAlign: "center",
                    backgroundColor: "rgb(var(--color-blue))",
                    width: "100vw",
                    paddingTop: "5rem",
                    paddingBottom: "13rem",
                    display:"flex",
                    justifyContent: "center",
                    letterSpacing: "0.11rem",
                    lineHeight: "1.5rem",

                }}>
                    <div 
                    style={{
                        width: "64%",
                        color: "rgb(var(--color-white))",
                    }}>
                        <h1 className="aboutMe_skillsText_title"  
                        style={{
                            fontSize:"2.1rem",
                            lineHeight:"3rem",
                            fontWeight:"500",
                            paddingBottom:"4rem"
                        }}>
                            Hi, I'm Marcin. Nice to meet you.
                            </h1>
                        <h5 className="aboutMe_skillsText_title_text"
                        style={{
                            fontSize:"1.2rem",
                            paddingBottom:"3rem"
                        }}>
                        A highly motivated Front End Developer, seeking for new opportunity 
                        to start my career as a web developer! Able to create responsive, modern, 
                        and user-friendly applications and web pages using mobile first approach. 
                        Passionate about what is possible to achieve using the latest technologies 
                        and eager to learn new things. 
                        </h5>
                    </div>
                </div>

                <div className="aboutMe_skillsBox"
                style={{
                    displey: "flex",
                    paddingTop: "5rem"
                }}>
                    <div
                    style={{
                        width: "80%",
                        border: "1px solid rgb(var(--color-grey209))",
                        borderRadius: "1rem",
                        margin: "auto",
                        transform: "translate(0, -30%)",
                        backgroundColor:"rgb(var(--color-white))",
                        paddingTop: "5rem"

                    }}>
                        <section>
                        <div className="aboutMe_skillsBox_logo"
                            style={{
                                height: "6rem"
                            }}
                        >
                            <div
                            style={{
                                backgroundImage:`url(${developper})`,
                                height: "5rem",
                                backgroundRepeat: "no-repeat",
                                backgroundSize: "contain",
                                backgroundPosition: "center",
                            }}></div>
                        </div>
                        <h2 className="aboutMe_skillsBox_position"
                        style={{
                            textAlign: "center",
                            padding:"1rem 2rem 3rem 2rem",
                            fontSize:"1.7rem",
                            fontWeight:"500",
                            
                        }}>
                            Front-end Developer
                        </h2>
                        <h3
                        style={{
                            textAlign: "center",
                            paddingBottom:"2rem",
                            fontSize:"1.3rem",
                            padding:"0 3rem 4rem 3rem",

                        }}>I like to code things from scratch, 
                            and enjoy bringing ideas to life in the browser.
                        </h3>
                        </section>
                        <section
                        style={{
                            displey: "flex",
                            justifyContent: "center",
                            textAlign: "center"
                        }}>
                            <div className="skills">
                                <h3
                                style={{
                                    color:"rgb(var(--color-green))",
                                    fontWeight:"500",
                                    fontSize:"1.7rem",
                                    paddingBottom: "2rem"
                                }}>
                                    Skills
                                </h3>
                                <ul className="row"
                                style={{
                                    justifyContent:"center",
                                    padding:"2rem",
                                    fontSize:"1.3rem",
                                    lineHeight:"1.5rem"
                                }}>
                                    {skillsArray.map((el)=> {
                                        return(
                                            <li className="col-" key={el}>{el}</li>
                                        )
                                    }
                                    )}
                                </ul>
                            </div>
                        </section>
                    </div>
                </div>
            </div>
        </section>
    </div>
    )
}

export default AboutMe