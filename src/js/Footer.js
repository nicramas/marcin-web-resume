import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";


const Footer = () => {
        
    const buttons = [
        {
            id: 'linkedinBtn',
            link: 'https://www.linkedin.com/in/marcinsapierzynski/',
            iconSocial: faLinkedinIn,
        },
        {
            id: 'githubBtn',
            link: 'https://github.com/nicramas',
            iconSocial: faGithub,
        },
        {
            id: 'mailBtn',
            link: 'mailto:m.sapierzynski@hotmail.com',
            iconSocial: faEnvelope,
        },
    ];

    return (
        <section className="footer_container">
            <div className="fLogo"><p className="nicramLogo" alt='logo'></p></div>
            <div className="social_icons"> 
                <p className="field">
                         {buttons.map((button) => {
                        return (
                        <a className="btnSocial" id={button.id} href={button.link} key={button.id}
                        ><FontAwesomeIcon icon={button.iconSocial} />
                        </a>)
                    })}
                </p>
            </div>
        </section>
        
    )
}

export default Footer