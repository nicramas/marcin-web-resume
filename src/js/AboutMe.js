import React from "react";
import devices from "../img/devices.svg";
import developper from "../img/developper.svg";

const AboutMe = () => {

    const skillsArray = ['JavaScript ES5/ES6+', 'Firebase','Gatsby','GraphQL', 'React','HTML', 'CSS', 'Sass', 'Git', 'RWD', 'Json', 'Gulp', 'Github', 'English B2', 'Russian B2', 'Polish Native' ]

    return (
    <div className="aboutMe">
        <section className="aboutMe_image">
            <div className="aboutMe_image_img"></div>
        </section>
        <section className="aboutMe_container">
            <div className="aboutMe_skills">
                <div>
                    <div className="aboutMe_skillImage"
                        style={{backgroundImage: `url(${devices})`}}>
                    </div>
                </div>
                <div className="aboutMe_skillsText" id="about">
                    <div>
                        <h1 className="aboutMe_skillsText_title">
                            Hi, I'm Marcin. Nice to meet you.
                            </h1>
                        <h5 className="aboutMe_skillsText_title_text">
                        A highly motivated Front End Developer, seeking for new opportunity 
                        to start my career as a web developer! Able to create responsive, modern, 
                        and user-friendly applications and web pages using mobile first approach. 
                        Passionate about what is possible to achieve using the latest technologies 
                        and eager to learn new things. 
                        </h5>
                    </div>
                </div>

                <div className="aboutMe_skillsBox">
                    <div className="aboutMe_skillsBox_container">
                        <section>
                        <div className="aboutMe_skillsBox_logo">
                            <div style={{backgroundImage:`url(${developper})`}}>
                            </div>
                        </div>
                        <h2 className="aboutMe_skillsBox_position">
                            Front-end Developer
                        </h2>
                        <h3 className="aboutMe_skillsBox_text">
                            I like to code things from scratch, 
                            and enjoy bringing ideas to life in the browser.
                        </h3>
                        </section>
                        <section>
                            <div className="aboutMe_skillsBox_skills">
                                <h3>
                                    Skills
                                </h3>
                                <ul className="row">
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